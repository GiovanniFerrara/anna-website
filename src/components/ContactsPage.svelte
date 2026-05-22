<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  let titleEl: HTMLElement;
  let subtitleEl: HTMLElement;
  let cardEl: HTMLElement;
  let wrapWidth = 0;
  let subtitleFontSize = 0;
  let ro: ResizeObserver;

  function recompute() {
    if (!titleEl || !subtitleEl) return;
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 992px)").matches) {
      wrapWidth = 0;
      subtitleFontSize = 0;
      return;
    }
    wrapWidth = titleEl.getBoundingClientRect().width;
    // measure subtitle natural width at a known font-size, then scale
    const probeSize = 100; // px
    const prevSize = subtitleEl.style.fontSize;
    const prevDisplay = subtitleEl.style.display;
    subtitleEl.style.fontSize = probeSize + "px";
    subtitleEl.style.display = "inline-block";
    const naturalWidth = subtitleEl.getBoundingClientRect().width;
    subtitleEl.style.fontSize = prevSize;
    subtitleEl.style.display = prevDisplay;
    if (naturalWidth > 0) {
      subtitleFontSize = (wrapWidth / naturalWidth) * probeSize;
    }
  }

  onMount(() => {
    recompute();
    ro = new ResizeObserver(() => recompute());
    if (cardEl) ro.observe(cardEl);
    window.addEventListener("load", recompute);
    // run a few times in case fonts load late
    setTimeout(recompute, 50);
    setTimeout(recompute, 300);
    setTimeout(recompute, 1000);
    if ((document as any).fonts?.ready) {
      (document as any).fonts.ready.then(recompute);
    }
  });

  onDestroy(() => {
    ro?.disconnect();
    window.removeEventListener("load", recompute);
  });

  let copied = false;
  let copyTimer: ReturnType<typeof setTimeout> | undefined;
  async function copyEmail(e: MouseEvent) {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText("hora.anna@gmail.com");
      copied = true;
      clearTimeout(copyTimer);
      copyTimer = setTimeout(() => (copied = false), 1600);
    } catch {}
  }
</script>

<div class="contacts">
  <div class="contacts__card" bind:this={cardEl}>
    <div class="contacts__inner" style="width: {wrapWidth ? wrapWidth + 'px' : 'auto'}">
      <h1 class="contacts__title" bind:this={titleEl}>The best ideas don't wait.</h1>
      <p
        class="contacts__subtitle"
        bind:this={subtitleEl}
        style="font-size: {subtitleFontSize ? subtitleFontSize + 'px' : '2rem'}"
      >
        Let's stay in touch and talk about your project.
      </p>
      <hr class="contacts__divider" />
      <a
        class="contacts__email"
        href="mailto:hora.anna@gmail.com"
        on:click={copyEmail}
        title="Click to copy"
      >
        {copied ? "Copied!" : "hora.anna@gmail.com"}
      </a>
      <hr class="contacts__divider contacts__divider--bottom" />
    </div>
  </div>
</div>

<style>
  .contacts {
    padding: 17rem var(--page-gutter) 14rem;
    display: flex;
    justify-content: center;
  }

  .contacts__card {
    width: 100%;
    max-width: 1100px;
    border: 2px solid #000;
    border-radius: 4px;
    padding: 7rem clamp(3rem, 7vw, 9rem);
    background: transparent;
    display: flex;
    justify-content: center;
  }

  .contacts__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 100%;
  }

  .contacts__title {
    font-family: "Baskervville", serif;
    font-size: clamp(3.6rem, 5.5vw, 6.4rem);
    font-weight: 500;
    line-height: 1.1;
    margin: 0 0 2rem;
    color: #000;
    letter-spacing: 0.01em;
    white-space: nowrap;
  }

  .contacts__subtitle {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    margin: 0 0 4rem;
    color: #000;
    white-space: nowrap;
    line-height: 1.2;
  }

  .contacts__divider {
    border: none;
    border-top: 2px solid #000;
    width: 100%;
    margin: 0 0 2rem;
    align-self: stretch;
  }
  .contacts__divider--bottom {
    margin: 2rem 0 0;
  }

  .contacts__email {
    font-family: "Poppins", sans-serif;
    font-size: clamp(1.6rem, 1.8vw, 2rem);
    color: #000;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
  }
  .contacts__email:hover {
    opacity: 0.6;
  }

  @media (max-width: 992px) {
    .contacts {
      padding: 11rem var(--page-gutter) 4rem;
    }
    .contacts__card {
      padding: 4.5rem 2.5rem;
    }
    .contacts__title,
    .contacts__subtitle {
      white-space: normal;
    }
    .contacts__title {
      font-size: clamp(3.2rem, 8vw, 5rem);
    }
    .contacts__subtitle {
      font-size: clamp(1.6rem, 4vw, 2.2rem) !important;
    }
    .contacts__title,
    .contacts__subtitle {
      text-align: left;
      align-self: stretch;
    }
  }
</style>
