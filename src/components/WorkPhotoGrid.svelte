<script lang="ts">
  import photo1 from "../assets/home-page-photo-1.jpg";
  import photo2 from "../assets/home-page-photo-2.jpg";
  import photo3 from "../assets/home-page-photo-3.jpg";
  import photo4 from "../assets/home-page-photo-4.jpg";
  import photo5 from "../assets/home-page-photo-5.jpg";
  import photo6 from "../assets/home-page-photo-6.jpg";

  type Tile = {
    color?: string;
    src?: string;
    alt?: string;
    shape: "short" | "tall";
  };

  const defaults: Tile[][] = [
    [
      { src: photo1, shape: "short" },
      { src: photo2, shape: "tall" },
    ],
    [
      { src: photo3, shape: "tall" },
      { src: photo4, shape: "short" },
    ],
    [
      { src: photo5, shape: "short" },
      { src: photo6, shape: "tall" },
    ],
  ];

  export let cols: Tile[][] = defaults;
</script>

<div class="photo-grid">
  {#each cols as col}
    <div class="photo-grid__col">
      {#each col as t}
        <div class="photo-grid__tile photo-grid__tile--{t.shape}">
          {#if t.src}
            <img src={t.src} alt={t.alt ?? ""} loading="lazy" />
          {:else}
            <div class="photo-grid__placeholder" style="background: {t.color}"></div>
          {/if}
        </div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }

  .photo-grid__col {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .photo-grid__tile {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
  }

  .photo-grid__tile--short {
    aspect-ratio: 3 / 2;
  }

  .photo-grid__tile--tall {
    aspect-ratio: 3 / 4;
  }

  .photo-grid__tile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .photo-grid__placeholder {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    .photo-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
    .photo-grid__col {
      flex-direction: column;
      gap: 16px;
    }
    .photo-grid__tile {
      aspect-ratio: auto;
    }
    .photo-grid__tile--short,
    .photo-grid__tile--tall {
      aspect-ratio: auto;
    }
    .photo-grid__tile img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
    /* Placeholders keep their aspect ratio so they don't collapse */
    .photo-grid__tile--short:has(.photo-grid__placeholder) {
      aspect-ratio: 3 / 2;
    }
    .photo-grid__tile--tall:has(.photo-grid__placeholder) {
      aspect-ratio: 3 / 4;
    }
  }
</style>
