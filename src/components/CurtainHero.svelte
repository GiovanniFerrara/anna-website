<script lang="ts">
  let scrollY = 0;
  let windowWidth = 0;

  function scaleSlogan(scroll: number): number {
    if (!scroll || scroll < 0) return 1;
    if (scroll > 500) return 0;
    return Math.pow(scroll - 0 + 0.001, -0.18);
  }

  $: titleScale = scaleSlogan(scrollY);
  $: curtain1Left = windowWidth > 768 ? -scrollY / 1.05 : -scrollY / 3;
  $: curtain2Left = scrollY / 6;
  // subtitle: starts invisible, grows to 10rem and descends as user scrolls to 500
  $: subtitleFontSizeRem = 10 * Math.min(1, Math.max(0, scrollY / 500));
  $: subtitleTranslateY = scrollY * 0.6;
</script>

<svelte:window bind:scrollY bind:innerWidth={windowWidth} />

<div class="landing">
  <div class="landing__title">
    <div style="transform: scale({titleScale})">
      <p>
        <span class="landing__title-span">Hello,</span>
        <span class="landing__title-span"> I'm so happy</span>
      </p>
      <p class="landing__title-span"> to see you here!</p>
    </div>
  </div>

  <div
    class="landing__subtitle-wrap"
    style="transform: translateY({subtitleTranslateY}px)"
  >
    <div
      class="landing__subtitle-reveal"
      style="font-size: {subtitleFontSizeRem}rem"
    >
      <span class="landing__title-span">See what's possible for you.</span>
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
