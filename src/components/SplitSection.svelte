<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import SectionDivider from "./SectionDivider.svelte";
  const dispatch = createEventDispatcher();
</script>

<div class="split">
  <button
    type="button"
    class="split__col"
    on:click={() => dispatch("select", "art")}
    aria-label="View art projects"
  >
    <div class="split__hr"><SectionDivider label="FOOD ART" /></div>
    <p class="split__desc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div class="split__side split__side--art"></div>
  </button>

  <button
    type="button"
    class="split__col"
    on:click={() => dispatch("select", "food")}
    aria-label="View food design projects"
  >
    <div class="split__hr"><SectionDivider label="FOOD DESIGN" /></div>
    <p class="split__desc">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut labore et
      dolore magna aliqua.
    </p>
    <div class="split__side split__side--food"></div>
  </button>
</div>

<style>
  .split {
    display: flex;
    gap: 92px;
    height: 140vh;
    margin-top: calc(var(--page-gutter));
    padding-bottom: calc(var(--page-gutter) - 30px);
    padding-left: var(--page-gutter);
    padding-right: var(--page-gutter);
    position: relative;
  }

  .split__col {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    color: inherit;
    text-align: inherit;
    cursor: pointer;
  }

  .split__hr {
    margin-bottom: 24px;
  }

  .split__desc {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    line-height: 1.5;
    color: #000;
    margin: 0 0 24px;
    min-height: calc(1.5em * 3);
  }

  .split__hr :global(.hr--custom) {
    height: 4rem;
    text-transform: none;
  }

  .split__hr :global(.hr--custom::after) {
    font-family: "Baskervville", serif;
    font-weight: 600;
    font-size: clamp(3rem, 4.5vw, 5rem);
    letter-spacing: 0.02em;
    padding: 0 0.4em;
    top: -7px;
  }

  .split__side {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    background-color: #f5f0eb;
    padding: 0;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
  }

  .split__side::before {
    content: "";
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    will-change: transform;
  }

  .split__side--art::before {
    background-image: url("/funeral-autumn2.jpeg");
  }

  .split__side--food {
    background-color: #ebe8e3;
  }
  .split__side--food::before {
    background-image: url("/table-orange.jpg");
  }

  .split__side:hover::before {
    transform: scale(1.15);
  }

  @media (max-width: 768px) {
    .split {
      flex-direction: column;
      height: auto;
      gap: 3rem;
    }
    .split__side {
      flex: none;
      width: 100%;
      height: auto;
    }
    .split__side--art {
      aspect-ratio: 870 / 1280;
    }
    .split__side--food {
      aspect-ratio: 870 / 1280;
    }
    .split__side::before {
      background-size: cover;
      background-position: center;
    }
  }
</style>
