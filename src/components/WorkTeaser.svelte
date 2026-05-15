<script lang="ts">
  import SectionDivider from "./SectionDivider.svelte";
  // columns laid out as [top, bottom] pairs.
  // pattern: col1 = short + tall, col2 = tall + short, col3 = short + tall
  const cols = [
    [
      { color: "#d8c9b6", shape: "short" },
      { color: "#c7b89a", shape: "tall" },
    ],
    [
      { color: "#b8a988", shape: "tall" },
      { color: "#a8997a", shape: "short" },
    ],
    [
      { color: "#988a6c", shape: "short" },
      { color: "#88795e", shape: "tall" },
    ],
  ] as const;

  function goWork() {
    window.location.hash = "work";
  }
</script>

<div
  class="work-teaser"
  role="button"
  tabindex="0"
  on:click={goWork}
  on:keydown={(e) => e.key === "Enter" && goWork()}
>
  <div class="work-teaser__section-divider">
    <SectionDivider label="Work" />
  </div>

  <div class="work-teaser__grid">
    {#each cols as col}
      <div class="work-teaser__col">
        {#each col as t}
          <div
            class="work-teaser__tile work-teaser__tile--{t.shape}"
            style="background: {t.color}"
          ></div>
        {/each}
      </div>
    {/each}
  </div>

  <hr class="work-teaser__divider" />
  <div class="work-teaser__caption">
    <p class="work-teaser__lorem">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <p class="work-teaser__view-all">View all works</p>
  </div>
  <hr class="work-teaser__divider" />
</div>

<style>
  .work-teaser {
    padding: 8rem var(--page-gutter) 6rem;
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  .work-teaser:hover {
    opacity: 0.95;
  }

  .work-teaser__section-divider {
    margin: 4rem 0 6rem;
  }

  .work-teaser__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }

  .work-teaser__col {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .work-teaser__tile {
    width: 100%;
    border-radius: 8px;
  }

  .work-teaser__tile--short {
    aspect-ratio: 3 / 2;
  }

  .work-teaser__tile--tall {
    aspect-ratio: 3 / 4;
  }

  .work-teaser__divider {
    border: none;
    border-top: 2px solid #000;
    margin: 0;
    width: 100%;
  }

  .work-teaser__caption {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 2rem 0;
    font-family: "Poppins", sans-serif;
  }

  .work-teaser__lorem {
    margin: 0;
    font-size: 1.7rem;
    line-height: 1.6;
    font-weight: 500;
    max-width: 60%;
  }

  .work-teaser__view-all {
    margin: 0;
    font-size: 1.7rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .work-teaser__grid + .work-teaser__divider {
    margin-top: 6rem;
  }

  @media (max-width: 768px) {
    .work-teaser__grid {
      grid-template-columns: 1fr;
    }
    .work-teaser__col {
      flex-direction: row;
    }
    .work-teaser__caption {
      flex-direction: column;
      align-items: flex-start;
    }
    .work-teaser__lorem {
      max-width: 100%;
    }
  }
</style>
