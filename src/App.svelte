<script lang="ts">
  import './app.css'
  import Navbar from './components/Navbar.svelte'
  import CurtainHero from './components/CurtainHero.svelte'
  import SplitSection from './components/SplitSection.svelte'
  import ProjectGrid from './components/ProjectGrid.svelte'
  import ProjectDetail from './components/ProjectDetail.svelte'
  import Manifesto from './components/Manifesto.svelte'

  let selectedCategory: 'art' | 'food' | null = null
  let selectedProject: { id: number; category: string } | null = null

  function selectCategory(cat: 'art' | 'food') {
    selectedCategory = cat
    selectedProject = null
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  function selectProject(project: { id: number; category: string }) {
    selectedProject = project
    setTimeout(() => {
      document.getElementById('project-detail')?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  function goBack() {
    selectedProject = null
  }
</script>

<Navbar />
<main>
  <!-- Section 1: Curtain Hero -->
  <section id="hero">
    <CurtainHero />
  </section>

  <!-- Section 2: 50/50 Split -->
  <section id="split">
    <SplitSection on:select={(e) => selectCategory(e.detail)} />
  </section>

  <!-- Section 3: Project Grid -->
  {#if selectedCategory}
    <section id="projects">
      <ProjectGrid category={selectedCategory} on:select={(e) => selectProject(e.detail)} />
    </section>
  {/if}

  <!-- Section 4: Project Detail -->
  {#if selectedProject}
    <section id="project-detail">
      <ProjectDetail project={selectedProject} on:back={goBack} />
    </section>
  {/if}

  <!-- Section 5: Manifesto -->
  <section id="manifesto">
    <Manifesto />
  </section>
</main>
