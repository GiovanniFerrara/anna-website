<script lang="ts">
  import SplitSection from "./SplitSection.svelte";
  import ProjectGrid from "./ProjectGrid.svelte";
  import ProjectShowcase from "./ProjectShowcase.svelte";

  let selectedProject: { id: number; category: "art" | "food" } | null = null;

  function scrollTo(cat: "art" | "food") {
    const id = cat === "food" ? "food-design" : "food-art";
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  function selectProject(project: { id: number; category: "art" | "food" }) {
    selectedProject = project;
    setTimeout(() => {
      document.getElementById("project-showcase")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }
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
</style>
