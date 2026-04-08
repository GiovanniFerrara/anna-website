<script lang="ts">
  import { onMount } from 'svelte'

  let scrollY = 0
  let windowWidth = 0

  function scaleSlogan(scroll: number): number {
    if (!scroll || scroll < 0) return 1
    if (scroll > 500) return 0
    return Math.pow(scroll - 0 + 0.001, -0.18)
  }

  $: titleScale = scaleSlogan(scrollY)
  $: curtain1Left = windowWidth > 768 ? -scrollY / 1.05 : -scrollY / 3
  $: curtain2Left = scrollY / 6
</script>

<svelte:window bind:scrollY bind:innerWidth={windowWidth} />

<div class="landing">
  <div class="landing__title">
    <div style="transform: scale({titleScale})">
      <p>
        <span class="landing__title-span">Hello,</span>
        <span class="landing__title-span"> I'm so happy</span>
      </p>
      <p class="landing__title-span"> to see you here </p>
    </div>
  </div>

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

<div style="height: 300vh;" />
