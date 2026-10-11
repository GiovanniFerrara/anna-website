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
    <a class="work-teaser__view-all" href="#work">
      View all works
      <span class="work-teaser__arrow" aria-hidden="true">&rarr;</span>
    </a>
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

  .work-teaser__view-all {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    margin: 0;
    font-size: 1.7rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: inherit;
    text-decoration: none;
  }

  .work-teaser__arrow {
    font-size: 2.2rem;
    line-height: 1;
    transition: transform 0.3s ease;
  }

  .work-teaser:hover .work-teaser__arrow {
    transform: translateX(6px);
  }
</style>
