<script lang="ts">
  import WorkPhotoGrid from "./WorkPhotoGrid.svelte";

  import candles1 from "../assets/art-candles-1.jpg";
  import candles2 from "../assets/art-candles-2.jpg";
  import candles3 from "../assets/art-candles-3.jpg";
  import candles4 from "../assets/art-candles-4.jpg";
  import candles5 from "../assets/art-candles-5.jpg";
  import candles6 from "../assets/art-candles-6.jpg";

  import fear1 from "../assets/art-fear-1.jpg";
  import fear2 from "../assets/art-fear-2.jpg";
  import fear3 from "../assets/art-fear-3.jpg";
  import fear4 from "../assets/art-fear-4.jpg";
  import fear5 from "../assets/art-fear-5.jpg";
  import fear6 from "../assets/art-fear-6.jpg";

  import conflict1 from "../assets/art-conflict-1.jpg";
  import conflict2 from "../assets/art-conflict-2.jpg";
  import conflict3 from "../assets/art-conflict-3.jpg";
  import conflict4 from "../assets/art-conflict-4.jpg";
  import conflict5 from "../assets/art-conflict-5.jpg";
  import conflict6 from "../assets/art-conflict-6.jpg";

  type Tile = { src?: string; alt?: string; shape: "short" | "tall" };

  const artPhotoSets: Record<number, Tile[][]> = {
    1: [
      [
        { src: candles1, shape: "short" },
        { src: candles2, shape: "tall" },
      ],
      [
        { src: candles3, shape: "tall" },
        { src: candles4, shape: "short" },
      ],
      [
        { src: candles5, shape: "short" },
        { src: candles6, shape: "tall" },
      ],
    ],
    2: [
      [
        { src: fear2, shape: "short" },
        { src: fear1, shape: "tall" },
      ],
      [
        { src: fear3, shape: "tall" },
        { src: fear4, shape: "short" },
      ],
      [
        { src: fear5, shape: "short" },
        { src: fear6, shape: "tall" },
      ],
    ],
    3: [
      [
        { src: conflict1, shape: "short" },
        { src: conflict2, shape: "tall" },
      ],
      [
        { src: conflict3, shape: "tall" },
        { src: conflict4, shape: "short" },
      ],
      [
        { src: conflict5, shape: "short" },
        { src: conflict6, shape: "tall" },
      ],
    ],
  };

  export let project: { id: number; category: "art" | "food" };

  $: cols = project.category === "art" ? artPhotoSets[project.id] : undefined;
</script>

<div class="showcase">
  <WorkPhotoGrid {cols} />
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
