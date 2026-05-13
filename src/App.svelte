<script lang="ts">
  import './app.css'
  import Navbar from './components/Navbar.svelte'
  import CurtainHero from './components/CurtainHero.svelte'
  import WorkTeaser from './components/WorkTeaser.svelte'
  import Footer from './components/Footer.svelte'
  import Services from './components/Services.svelte'
  import AboutPage from './components/AboutPage.svelte'
  import WorkPage from './components/WorkPage.svelte'

  let currentHash = typeof window !== 'undefined' ? window.location.hash : ''
  $: showAbout = currentHash === '#about'
  $: showWork = currentHash === '#work'

  function onHashChange() {
    currentHash = window.location.hash
    if (currentHash === '#about' || currentHash === '#work') {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }
</script>

<svelte:window on:hashchange={onHashChange} />

<Navbar />
{#if showAbout}
  <main>
    <AboutPage />
    <Footer />
  </main>
{:else if showWork}
  <main>
    <WorkPage />
    <Footer />
  </main>
{:else}
<main>
  <section id="hero">
    <CurtainHero />
  </section>

  <section id="work-teaser">
    <WorkTeaser />
  </section>

  <Services />

  <Footer />
</main>
{/if}
