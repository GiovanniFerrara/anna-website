<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
</script>

<div class="split">
  <button class="split__side split__side--art" on:click={() => dispatch('select', 'art')}>
    <div class="split__label">
      <span class="split__title">Art Projects</span>
      <span class="split__cta">View work →</span>
    </div>
  </button>

  <button class="split__side split__side--food" on:click={() => dispatch('select', 'food')}>
    <div class="split__label">
      <span class="split__title">Food Design</span>
      <span class="split__cta">View work →</span>
    </div>
  </button>
</div>

<style>
  .split {
    display: flex;
    height: 100vh;
    width: 100%;
  }

  .split__side {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    background-color: #f5f0eb;
    transition: flex 0.4s ease, background-color 0.3s ease;
    padding: 0;
    position: relative;
    overflow: hidden;
  }

  .split__side--food {
    background-color: #ebe8e3;
  }

  .split__side:hover {
    flex: 1.4;
    background-color: #e8e0d6;
  }

  .split__side--food:hover {
    background-color: #ddd8cf;
  }

  .split__label {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    pointer-events: none;
  }

  .split__title {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    font-weight: 300;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #1a1a1a;
  }

  .split__cta {
    font-size: 0.9rem;
    letter-spacing: 0.15em;
    color: #666;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .split__side:hover .split__cta {
    opacity: 1;
    transform: translateY(0);
  }

  /* Divider line */
  .split::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 10%;
    height: 80%;
    width: 1px;
    background-color: #ccc;
    pointer-events: none;
  }

  .split {
    position: relative;
  }

  @media (max-width: 768px) {
    .split {
      flex-direction: column;
    }
    .split__side {
      flex: 1;
    }
    .split__side:hover {
      flex: 1.2;
    }
    .split::after {
      left: 10%;
      top: 50%;
      height: 1px;
      width: 80%;
    }
  }
</style>
