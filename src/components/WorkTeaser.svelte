<script lang="ts">
  import SectionDivider from "./SectionDivider.svelte";
  import WorkPhotoGrid from "./WorkPhotoGrid.svelte";

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

  <WorkPhotoGrid />

  <hr class="work-teaser__divider work-teaser__divider--top" />
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

  .work-teaser__divider {
    border: none;
    border-top: 2px solid #000;
    margin: 0;
    width: 100%;
  }

  .work-teaser__divider--top {
    margin-top: 6rem;
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

  @media (max-width: 768px) {
    .work-teaser__lorem {
      max-width: 100%;
    }
  }
</style>
