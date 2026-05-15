<script lang="ts">
  import WorkPhotoGrid from "./WorkPhotoGrid.svelte";
  export let project: { id: number; category: "art" | "food" };
</script>

<div class="showcase">
  <WorkPhotoGrid />
</div>

<style>
  .showcase {
    padding: 4rem var(--page-gutter) 6rem;
  }

  .showcase__divider {
    border: none;
    border-top: 2px solid #000;
    margin: 0;
    width: 100%;
  }

  .showcase__divider--top {
    margin-top: 6rem;
  }

  .showcase__caption {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 2rem 0;
    font-family: "Poppins", sans-serif;
  }

  .showcase__lorem {
    margin: 0;
    font-size: 1.7rem;
    line-height: 1.6;
    font-weight: 500;
    max-width: 60%;
  }

  @media (max-width: 768px) {
    .showcase__lorem {
      max-width: 100%;
    }
  }
</style>
