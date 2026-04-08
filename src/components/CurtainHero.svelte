<script lang="ts">
  import { onMount } from 'svelte'

  let scrollY = 0
  let innerHeight = 0

  // Curtain opens as you scroll: 0% scrolled = fully closed, 100% of viewport = fully open
  $: progress = Math.min(scrollY / (innerHeight * 0.8), 1)
  $: curtainOffset = progress * 50 // each panel moves 50% of its height

  onMount(() => {
    innerHeight = window.innerHeight
  })
</script>

<svelte:window bind:scrollY />

<section class="hero">
  <!-- Curtain panels -->
  <div class="curtain curtain-top" style="transform: translateY({-curtainOffset}%)"></div>
  <div class="curtain curtain-bottom" style="transform: translateY({curtainOffset}%)"></div>

  <!-- Content revealed beneath -->
  <div class="hero-content" style="opacity: {progress}">
    <h1>Anna</h1>
    <p>Web Designer · Food Designer · Artist</p>
  </div>
</section>

<!-- Spacer to allow scrolling -->
<div class="scroll-spacer"></div>

<style>
  .hero {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .curtain {
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: #0a0a0a;
    z-index: 2;
    will-change: transform;
    transition: transform 0.05s linear;
  }

  .curtain-top {
    top: 0;
  }

  .curtain-bottom {
    bottom: 0;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    color: #f5f0eb;
    transition: opacity 0.1s linear;
  }

  .hero-content h1 {
    font-family: 'Georgia', serif;
    font-size: clamp(3rem, 10vw, 8rem);
    font-weight: 300;
    letter-spacing: 0.2em;
    margin: 0;
    text-transform: uppercase;
  }

  .hero-content p {
    font-size: clamp(0.9rem, 2vw, 1.2rem);
    letter-spacing: 0.3em;
    text-transform: uppercase;
    opacity: 0.7;
    margin-top: 1rem;
  }

  .scroll-spacer {
    height: 200vh;
  }
</style>
