<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import SectionDivider from "./SectionDivider.svelte";
  export let category: "art" | "food";
  const dispatch = createEventDispatcher();

  const artProjects = [
    {
      id: 1,
      title: "Project 01",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      thumb: "https://placehold.co/600x800/e8e0d6/666?text=Art+01",
    },
    {
      id: 2,
      title: "Project 02",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      thumb: "https://placehold.co/600x800/ddd8cf/666?text=Art+02",
    },
    {
      id: 3,
      title: "Project 03",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      thumb: "https://placehold.co/600x800/e8e0d6/666?text=Art+03",
    },
    {
      id: 4,
      title: "Project 04",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      thumb: "https://placehold.co/600x800/ddd8cf/666?text=Art+04",
    },
  ];

  const foodProjects = [
    {
      id: 1,
      title: "Project 01",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      thumb: "https://placehold.co/600x800/f0ebe3/666?text=Food+01",
    },
    {
      id: 2,
      title: "Project 02",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      thumb: "https://placehold.co/600x800/e5dfd6/666?text=Food+02",
    },
    {
      id: 3,
      title: "Project 03",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      thumb: "https://placehold.co/600x800/f0ebe3/666?text=Food+03",
    },
    {
      id: 4,
      title: "Project 04",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      thumb: "https://placehold.co/600x800/e5dfd6/666?text=Food+04",
    },
  ];

  $: projects = category === "art" ? artProjects : foodProjects;
  $: label = category === "art" ? "Food Art" : "Food Design";
</script>

<div class="grid-section">
  <div class="grid-section__header">
    <SectionDivider label={label} />
  </div>

  <div class="grid-section__grid">
    {#each projects as project}
      <button
        class="grid-item"
        on:click={() => dispatch("select", { id: project.id, category })}
      >
        <div class="grid-item__img-wrap">
          <img
            src={project.thumb}
            alt={project.title}
            class="grid-item__img"
            loading="lazy"
          />
        </div>
        <h3 class="grid-item__title">{project.title}</h3>
        <p class="grid-item__desc">{project.desc}</p>
      </button>
    {/each}
  </div>
</div>

<style>
  .grid-section {
    padding: 6rem var(--page-gutter);
  }

  .grid-section__header {
    margin-bottom: 4rem;
  }

  .grid-section__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  .grid-item {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font: inherit;
    color: inherit;
  }

  .grid-item__img-wrap {
    overflow: hidden;
    aspect-ratio: 4/3;
    border-radius: 12px;
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

  .grid-item__title {
    font-family: "Baskervville", serif;
    font-size: 1.8rem;
    font-weight: 600;
    color: #000;
    margin: 0.5rem 0 0;
    line-height: 1.2;
  }

  .grid-item__desc {
    font-family: "Poppins", sans-serif;
    font-size: 1.3rem;
    line-height: 1.5;
    color: #000;
    margin: 0;
  }

  @media (max-width: 992px) {
    .grid-section__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 560px) {
    .grid-section__grid {
      grid-template-columns: 1fr;
    }
  }
</style>
