<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  export let category: 'art' | 'food'
  const dispatch = createEventDispatcher()

  // Placeholder projects — Anna will replace with real images
  const artProjects = [
    { id: 1, title: 'Project 01', thumb: 'https://placehold.co/600x800/e8e0d6/666?text=Art+01' },
    { id: 2, title: 'Project 02', thumb: 'https://placehold.co/600x800/ddd8cf/666?text=Art+02' },
    { id: 3, title: 'Project 03', thumb: 'https://placehold.co/600x800/e8e0d6/666?text=Art+03' },
    { id: 4, title: 'Project 04', thumb: 'https://placehold.co/600x800/ddd8cf/666?text=Art+04' },
    { id: 5, title: 'Project 05', thumb: 'https://placehold.co/600x800/e8e0d6/666?text=Art+05' },
    { id: 6, title: 'Project 06', thumb: 'https://placehold.co/600x800/ddd8cf/666?text=Art+06' },
  ]

  const foodProjects = [
    { id: 1, title: 'Project 01', thumb: 'https://placehold.co/600x800/f0ebe3/666?text=Food+01' },
    { id: 2, title: 'Project 02', thumb: 'https://placehold.co/600x800/e5dfd6/666?text=Food+02' },
    { id: 3, title: 'Project 03', thumb: 'https://placehold.co/600x800/f0ebe3/666?text=Food+03' },
    { id: 4, title: 'Project 04', thumb: 'https://placehold.co/600x800/e5dfd6/666?text=Food+04' },
  ]

  $: projects = category === 'art' ? artProjects : foodProjects
  $: label = category === 'art' ? 'Art Projects' : 'Food Design'
</script>

<div class="grid-section">
  <div class="grid-section__header">
    <h2 class="grid-section__title">{label}</h2>
  </div>

  <div class="grid-section__grid">
    {#each projects as project}
      <button class="grid-item" on:click={() => dispatch('select', { id: project.id, category })}>
        <div class="grid-item__img-wrap">
          <img src={project.thumb} alt={project.title} class="grid-item__img" loading="lazy" />
        </div>
        <span class="grid-item__label">{project.title}</span>
      </button>
    {/each}
  </div>
</div>

<style>
  .grid-section {
    min-height: 100vh;
    padding: 80px 40px;
    background-color: #faf7f4;
  }

  .grid-section__header {
    margin-bottom: 60px;
    text-align: center;
  }

  .grid-section__title {
    font-size: clamp(1.2rem, 2.5vw, 2rem);
    font-weight: 300;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #1a1a1a;
  }

  .grid-section__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .grid-item {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .grid-item__img-wrap {
    overflow: hidden;
    aspect-ratio: 3/4;
    background-color: #e8e0d6;
  }

  .grid-item__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .grid-item:hover .grid-item__img {
    transform: scale(1.04);
  }

  .grid-item__label {
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #666;
  }

  @media (max-width: 768px) {
    .grid-section__grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    .grid-section {
      padding: 60px 20px;
    }
  }

  @media (max-width: 480px) {
    .grid-section__grid {
      grid-template-columns: 1fr;
    }
  }
</style>
