<script lang="ts">
  import SplitSection from "./SplitSection.svelte";
  import ProjectGrid from "./ProjectGrid.svelte";
  import ProjectDetail from "./ProjectDetail.svelte";

  let selectedCategory: "art" | "food" | null = null;
  let selectedProject: { id: number; category: string } | null = null;

  function selectCategory(cat: "art" | "food") {
    selectedCategory = cat;
    selectedProject = null;
    setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  function selectProject(project: { id: number; category: string }) {
    selectedProject = project;
    setTimeout(() => {
      document.getElementById("project-detail")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  function goBack() {
    selectedProject = null;
  }
</script>

<div class="work-page">
  <section id="split">
    <SplitSection on:select={(e) => selectCategory(e.detail)} />
  </section>

  {#if selectedCategory}
    <section id="projects">
      <ProjectGrid category={selectedCategory} on:select={(e) => selectProject(e.detail)} />
    </section>
  {/if}

  {#if selectedProject}
    <section id="project-detail">
      <ProjectDetail project={selectedProject} on:back={goBack} />
    </section>
  {/if}
</div>

<style>
  .work-page {
    padding-top: 10rem;
  }
</style>
