<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import SectionDivider from "./SectionDivider.svelte";
  import artCover1 from "../assets/art-candles-1.jpg";
  import artCover2 from "../assets/art-fear-7.jpg";
  import artCover3 from "../assets/art-conflict-1.jpg";
  import { foodDesignProjects, foodArtExtraProjects, descriptions, categories } from "../lib/foodDesignProjects";
  export let category: "art" | "food";
  const dispatch = createEventDispatcher();

  const artProjects = [
    {
      id: 1,
      title: "Funeral of Autumn",
      desc: descriptions["Funeral of Autumn"],
      category: categories["Funeral of Autumn"],
      thumb: artCover1,
    },
    {
      id: 2,
      title: "Disruptors of Days",
      desc: descriptions["Disruptors of Days"],
      category: categories["Disruptors of Days"],
      thumb: artCover2,
    },
    {
      id: 3,
      title: "Taste of Conflict",
      desc: descriptions["Taste of Conflict"],
      category: categories["Taste of Conflict"],
      thumb: artCover3,
    },
    ...foodArtExtraProjects,
  ];

  const foodProjects = foodDesignProjects;

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
            style="object-position: {('coverPosition' in project && project.coverPosition) || 'center'}"
            loading="lazy"
          />
        </div>
        <h3 class="grid-item__title">{project.title}</h3>
        {#if "category" in project && project.category}
          <p class="grid-item__category">{project.category}</p>
        {/if}
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

  /* Flex instead of grid so an incomplete last row stays centered */
  .grid-section__grid {
    --cols: 4;
    --gap: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--gap);
  }

  .grid-section__grid > .grid-item {
    width: calc((100% - (var(--cols) - 1) * var(--gap)) / var(--cols));
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

  .grid-item__category {
    font-family: "Poppins", sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #000;
    margin: 0;
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
      --cols: 2;
    }
  }

  @media (max-width: 560px) {
    .grid-section__grid {
      --cols: 1;
    }
  }
</style>
