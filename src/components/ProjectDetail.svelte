<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  export let project: { id: number; category: string }
  const dispatch = createEventDispatcher()

  $: title = `${project.category === 'art' ? 'Art' : 'Food Design'} — Project 0${project.id}`
  $: imgSrc = `https://placehold.co/1200x800/e8e0d6/666?text=Project+0${project.id}`
</script>

<div class="detail">
  <button class="detail__back" on:click={() => dispatch('back')}>← Back</button>

  <div class="detail__content">
    <div class="detail__images">
      <img src={imgSrc} alt={title} class="detail__main-img" />
      <img src="https://placehold.co/800x600/ddd8cf/666?text=Detail+view" alt="detail" class="detail__secondary-img" />
    </div>

    <div class="detail__info">
      <h1 class="detail__title">{title}</h1>
      <p class="detail__desc">
        Description coming soon. Anna will add her own text here.
      </p>
    </div>
  </div>
</div>

<style>
  .detail {
    min-height: 100vh;
    padding: 60px 40px;
    background-color: #faf7f4;
  }

  .detail__back {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #666;
    padding: 0;
    margin-bottom: 60px;
    display: block;
    transition: color 0.2s;
  }

  .detail__back:hover {
    color: #1a1a1a;
  }

  .detail__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    max-width: 1200px;
    margin: 0 auto;
    align-items: start;
  }

  .detail__images {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .detail__main-img {
    width: 100%;
    display: block;
  }

  .detail__secondary-img {
    width: 100%;
    display: block;
  }

  .detail__info {
    position: sticky;
    top: 80px;
  }

  .detail__title {
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);
    font-weight: 300;
    letter-spacing: 0.06em;
    color: #1a1a1a;
    margin-bottom: 32px;
  }

  .detail__desc {
    font-size: 1rem;
    line-height: 1.8;
    color: #555;
  }

  @media (max-width: 768px) {
    .detail__content {
      grid-template-columns: 1fr;
    }
    .detail__info {
      position: static;
    }
  }
</style>
