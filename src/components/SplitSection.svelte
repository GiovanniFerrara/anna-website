<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<div class="split">
  <div class="split__col">
    <hr class="hr--custom split__hr" data-content="Food Art" />
    <button
      class="split__side split__side--art"
      on:click={() => dispatch("select", "art")}
      aria-label="View art projects"
    ></button>
    <div class="split__caption">
      <p class="split__caption-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
        Brief: Sed do eiusmod tempor incididunt.
      </p>
    </div>
  </div>

  <div class="split__col">
    <hr class="hr--custom split__hr" data-content="Food Design" />
    <button
      class="split__side split__side--food"
      on:click={() => dispatch("select", "food")}
      aria-label="View food design projects"
    ></button>
    <div class="split__caption">
      <p class="split__caption-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
        Brief: Ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
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
  }

  .split__hr {
    margin-bottom: calc(var(--page-gutter));
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

  /* Caption — copied pattern from old portfolioCard (branch=anna) */
  .split__caption {
    margin-top: 4rem;
  }
  .split__caption-content {
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    padding-top: 1.2rem;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    line-height: 1.5;
    min-height: 110px;
    margin: 0;
    padding-bottom: 1.2rem;
  }

  @media (max-width: 768px) {
    .split {
      flex-direction: column;
    }
  }
</style>
