<script lang="ts">
  import SplitSection from "./SplitSection.svelte";
  import ProjectGrid from "./ProjectGrid.svelte";
  import ProjectShowcase from "./ProjectShowcase.svelte";
  import { onMount } from "svelte";

  let selectedProject: { id: number; category: "art" | "food" } | null = null;

  function scrollTo(cat: "art" | "food") {
    const id = cat === "food" ? "food-design" : "food-art";
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  function selectProject(
    project: { id: number; category: "art" | "food" },
    behavior: ScrollBehavior = "smooth",
  ) {
    selectedProject = project;
    setTimeout(() => {
      document.getElementById("project-showcase")?.scrollIntoView({ behavior });
    }, 50);
  }

  // Deep links from the home page photos: #work/<art|food>/<id>
  function openFromHash() {
    const m = window.location.hash.match(/^#work\/(art|food)\/(\d+)/);
    if (m) selectProject({ category: m[1] as "art" | "food", id: Number(m[2]) }, "instant");
  }

  onMount(() => {
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  });
</script>

<div class="work-page">
  <section id="split">
    <SplitSection on:select={(e) => scrollTo(e.detail)} />
  </section>

  <section id="food-design">
    <ProjectGrid category="food" on:select={(e) => selectProject(e.detail)} />
  </section>

  <section id="food-art">
    <ProjectGrid category="art" on:select={(e) => selectProject(e.detail)} />
  </section>

  {#if selectedProject}
    <section id="project-showcase">
      <ProjectShowcase project={selectedProject} />
    </section>
  {/if}
</div>

<style>
  .work-page {
    padding-top: 10rem;
  }

  /* Mobile: one spacing unit (--u) between burger bars, FOOD ART title,
     description and photo (see SplitSection). 39px = bottom of burger bars,
     12px = space above the title caps inside the divider box. */
  @media (max-width: 768px) {
    .work-page {
      --u: 32px;
      padding-top: calc(39px + var(--u) - 12px);
    }
    /* last FOOD DESIGN project text -> FOOD ART title caps = 1.25 × --u (same as below the title)
       (~5px below the text baseline + ~5px above the title caps) */
    #food-design :global(.grid-section) {
      padding-bottom: 0;
    }
    #food-art :global(.grid-section) {
      padding-top: calc(var(--u) * 1.25 - 10px);
    }
  }
</style>
