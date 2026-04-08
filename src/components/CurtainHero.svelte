<script lang="ts">
  import { onMount } from 'svelte'

  let scrollY = 0
  let windowWidth = 0

  // Curtain slides from top (starts at -1500px offset, animates down on load)
  // Then as user scrolls, the left curtain slides left and right one slides right
  // This matches the original: curtain1 (left panel) moves left, curtain2 (right panel) moves right

  $: curtain1Left = windowWidth > 768 ? -scrollY / 1.05 : -scrollY / 3
  $: curtain2Left = scrollY / 6

  // Title scales down as user scrolls (matches scaleSlogan logic from original)
  function scaleSlogan(scroll: number): number {
    if (!scroll || scroll < 0) return 1
    if (scroll > 500) return 0
    return Math.pow(scroll + 1, -0.18)
  }
  $: titleScale = scaleSlogan(scrollY)
</script>

<svelte:window bind:scrollY bind:innerWidth={windowWidth} />

<div class="landing">
  <!-- Title — positioned absolutely, scales out as you scroll -->
  <div class="landing__title">
    <div style="transform: scale({titleScale})">
      <p>
        <span class="landing__title-span">Hello,</span>
        <span class="landing__title-span"> I'm so happy</span>
      </p>
      <p class="landing__title-span"> to see you here </p>
    </div>
  </div>

  <!-- Curtain panels -->
  <div class="landing__banner-wrap">
    <div class="landing__parent-wrap">
      <div class="landing__picture-wrap-1">
        <img
          alt="curtain left"
          class="landing__picture-1"
          style="left: {curtain1Left}px"
          src="/curtain1.jpg"
        />
      </div>
      <div class="landing__picture-wrap-2">
        <img
          alt="curtain right"
          class="landing__picture-2"
          style="left: {curtain2Left}px"
          src="/curtain2.jpg"
        />
      </div>
    </div>
  </div>
</div>

<!-- Spacer to allow scrolling beyond the fixed section -->
<div style="height: 300vh;" />

<style>
  .landing {
    position: relative;
    overflow: hidden;
    z-index: 10;
    margin-top: 15px;
    height: 100vh;
  }

  /* Curtain container — starts way up, animates down on load */
  .landing__banner-wrap {
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin-top: 6.5rem;
    top: -1500px;
    animation: fromUp 0.6s ease-in-out forwards 0.5s;
  }

  .landing__parent-wrap {
    position: relative;
    display: flex;
    width: 70%; /* roughly right + center + icons columns from original */
  }

  .landing__picture-wrap-1 {
    position: relative;
    flex: 1 1 491px;
    overflow: hidden;
  }

  .landing__picture-wrap-2 {
    position: relative;
    flex: 1 1 368px;
    overflow: hidden;
  }

  .landing__picture-1,
  .landing__picture-2 {
    width: 100%;
    height: 100%;
    position: relative;
    object-fit: cover;
  }

  /* Title */
  .landing__title {
    font-family: 'Ultra', 'Georgia', serif;
    font-weight: 500;
    position: absolute;
    font-size: 10rem;
    z-index: 20;
    color: #2b6bac;
    top: 22rem;
    left: 28%;
    margin-left: -370px;
    transform: translateX(-200%);
    animation: fromLeft 1.5s cubic-bezier(.44, 1.81, .87, .99) forwards 0.9s;
    text-shadow: -1px 1.5px black;
    white-space: nowrap;
    line-height: 1.1;
  }

  .landing__title-span {
    text-shadow: -1px 1.5px black;
  }

  /* Animations */
  @keyframes fromUp {
    0% { transform: translateY(0); }
    100% { transform: translateY(1500px); }
  }

  @keyframes fromLeft {
    0% { transform: translateX(-200%); }
    100% { transform: translateX(0); }
  }

  /* Responsive */
  @media (max-width: 1200px) {
    .landing__title {
      top: 12rem;
      font-size: 7.7rem;
      margin-left: -195px;
    }
  }

  @media (max-width: 992px) {
    .landing__title {
      top: 13rem;
      font-size: 6.7rem;
      margin-left: -170px;
    }
  }

  @media (max-width: 768px) {
    .landing {
      margin-top: 0;
    }
    .landing__banner-wrap {
      justify-content: center;
      margin-top: 1rem;
    }
    .landing__parent-wrap {
      width: 130%;
    }
    .landing__title {
      top: 8rem;
      font-size: 8.3rem;
      margin-left: -90px;
      max-width: 430px;
    }
  }

  @media (max-width: 550px) {
    .landing__parent-wrap {
      width: 180%;
    }
    .landing__title {
      top: 10rem;
      font-size: 6.7rem;
      margin-left: -80px;
      max-width: 400px;
    }
  }

  @media (max-width: 400px) {
    .landing__parent-wrap {
      width: 210%;
    }
    .landing__title {
      top: 12.4rem;
      font-size: 6.25rem;
      margin-left: -80px;
      max-width: 330px;
    }
  }
</style>
