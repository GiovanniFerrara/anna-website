<script lang="ts">
  import { onMount } from "svelte";

  let menuOpen = false;
  let scrollY = 0;
  $: active = scrollY < 150;

  function toggle() {
    menuOpen = !menuOpen;
  }
  function close() {
    menuOpen = false;
  }

  const items = [
    { label: "Home", href: "#hero", key: "hero" },
    { label: "About", href: "#about", key: "about" },
    { label: "Work", href: "#work", key: "work" },
    { label: "Contacts", href: "#contacts", key: "Footer" },
    { label: "Services", href: "#services", key: "services" },
  ];

  let activeKey = "hero";

  function updateActive() {
    if (typeof window === "undefined") return;
    if (window.location.hash === "#about") {
      activeKey = "about";
      return;
    }
    if (window.location.hash === "#work") {
      activeKey = "work";
      return;
    }
    const sectionIds = ["hero", "services", "Footer"];
    const probe = window.scrollY + window.innerHeight * 0.35;
    let current = "hero";
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= probe) current = id;
    }
    activeKey = current;
  }

  onMount(() => {
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("hashchange", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("hashchange", updateActive);
    };
  });

  function navigate(href: string) {
    close();
    if (href === "#about" || href === "#work") {
      const target = href.slice(1);
      if (window.location.hash !== href) {
        window.location.hash = target;
      }
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    const onRoutedPage =
      window.location.hash === "#about" || window.location.hash === "#work";
    if (onRoutedPage) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 320);
  }
</script>

<svelte:window bind:scrollY />

<div class="navbar">
  <!-- Left spacer (empty langSwap) — pushes social-icons toward curtain edge -->
  <div class="langSwap" class:navbar--active={active}></div>

  <p class="nav-spacer"></p>

  <!-- Social icons (sibling, not inside langSwap) -->
  <div class="social-icons">
    <a
      href="https://www.instagram.com/around.the.tongue/"
      target="_blank"
      rel="noopener"
      aria-label="Instagram"
      class="social-icons__item"
      class:navbar--active={active}
    >
      <img src="/instagram.svg" alt="Instagram" />
    </a>
    <a
      href="https://www.linkedin.com/in/anna-hora-59a9151a3/"
      target="_blank"
      rel="noopener"
      aria-label="LinkedIn"
      class="social-icons__item"
      class:navbar--active={active}
    >
      <img src="/linkedin.svg" alt="LinkedIn" />
    </a>
  </div>

  <!-- Page list -->
  <div class="page-list">
    <ul class="page-list__list">
      {#each items as item}
        <li
          class="page-list__item"
          class:navbar--active={active}
          class:is-active={item.key === activeKey}
          on:click={() => navigate(item.href)}
          role="button"
          tabindex="0"
          on:keydown={(e) => e.key === "Enter" && navigate(item.href)}
        >
          {item.label}
        </li>
      {/each}
    </ul>
  </div>

  <!-- Right: burger icon -->
  <div class="icon">
    <button
      class="menu-icon"
      class:opened={menuOpen}
      class:closed={!menuOpen}
      on:click={toggle}
      aria-label="Menu"
    >
      <div class="bar bar-1"></div>
      <div class="bar bar-2"></div>
    </button>
  </div>
</div>

<!-- Overlay menu -->
{#if menuOpen}
  <div class="menu" role="presentation">
    <button class="menu__close" on:click={close} aria-label="Close">
      <div class="bar bar-1"></div>
      <div class="bar bar-2"></div>
    </button>
    <div class="menu__cursor">
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
      >
        <path d="M24 12L96 60L60 66L48 102L24 12Z" fill="#1a1a1a" />
        <line
          x1="60"
          y1="3"
          x2="60"
          y2="18"
          stroke="#1a1a1a"
          stroke-width="3"
        />
        <line
          x1="105"
          y1="21"
          x2="94.5"
          y2="31.5"
          stroke="#1a1a1a"
          stroke-width="3"
        />
        <line
          x1="117"
          y1="60"
          x2="102"
          y2="60"
          stroke="#1a1a1a"
          stroke-width="3"
        />
        <line
          x1="15"
          y1="21"
          x2="25.5"
          y2="31.5"
          stroke="#1a1a1a"
          stroke-width="3"
        />
        <line
          x1="3"
          y1="60"
          x2="18"
          y2="60"
          stroke="#1a1a1a"
          stroke-width="3"
        />
        <line
          x1="21"
          y1="99"
          x2="30"
          y2="88.5"
          stroke="#1a1a1a"
          stroke-width="3"
        />
      </svg>
    </div>
    <div class="menu__page-list__wrap">
      <ul class="menu__list">
        {#each items as item}
          <li
            class="menu__item"
            class:is-active={item.key === activeKey}
            on:click={() => navigate(item.href)}
            role="button"
            tabindex="0"
            on:keydown={(e) => e.key === "Enter" && navigate(item.href)}
          >
            {item.label}
          </li>
        {/each}
      </ul>
    </div>
    <div class="social-icons">
      <a
        href="https://www.instagram.com/around.the.tongue/"
        target="_blank"
        rel="noopener"
        class="social-icons__item"
      >
        <img
          src="/instagram.svg"
          alt="Instagram"
          style="width:45px;height:45px;"
        />
      </a>
    </div>
  </div>
{/if}

<style>
  /* ── NAVBAR — exact copy of original ── */
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 200;
    display: flex;
    flex-direction: row;
    padding-left: 0;
    padding-right: var(--page-gutter);
    height: 6.5rem;
    transition: 0.4s;
    background: transparent;
  }

  /* Empty left spacer — flex 1 0 28% pushes social-icons to curtain edge.
     Mirrors .langSwap from ineedanicewebsite branch=anna (_langSwap.sass). */
  .langSwap {
    margin: auto auto auto 0;
    flex: 1 0 28%;
    justify-content: flex-start;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  /* Tiny separator <p>, mirrors empty <p /> in original Navbar.tsx */
  .nav-spacer {
    margin: 0;
    padding: 0;
  }

  /* Social icons — copied from _socialIcons.sass on branch=anna.
     Original used $l-space*1.5 (4.5rem) with 10px base = 45px. */
  .social-icons {
    flex: 1 1 2%;
    display: flex;
    justify-content: space-between;
    height: 45px;
    margin: auto;
    position: relative;
  }

  .social-icons__item {
    height: 100%;
    padding-right: 0;
    margin-left: -10px;
    opacity: 0;
    transition: opacity 0.4s ease;
    color: #1a1a1a;
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  .social-icons__item img {
    height: 100%;
    width: auto;
    padding: 7px;
    box-sizing: border-box;
    display: block;
  }
  .social-icons__item:hover {
    opacity: 0.5 !important;
  }

  /* Threshold reveal: visible when class navbar--active is added (scrollY < 150)
     or when the navbar is hovered. Matches ineedanicewebsite branch=anna. */
  .navbar :global(.navbar--active) {
    opacity: 1 !important;
  }
  .navbar:hover .langSwap,
  .navbar:hover :global(.social-icons__item),
  .navbar:hover :global(.page-list__item) {
    opacity: 1;
  }

  /* Page list — wraps the items, gives flex 0 1 54% like original */
  .page-list {
    flex: 0 1 54%;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: auto;
  }

  .page-list__list {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0 0 0 -2px;
  }

  .page-list__item {
    font-family: "Poppins", sans-serif;
    font-size: 2.6rem;
    text-transform: uppercase;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    cursor: pointer;
  }
  .page-list__item:hover {
    opacity: 0.5 !important;
  }
  .page-list__item.is-active {
    color: #2b6bac;
  }
  .menu__item.is-active {
    color: #2b6bac;
  }

  /* icon / burger */
  .icon {
    margin-top: auto;
    margin-bottom: auto;
    flex: 0 0 16%;
    z-index: 3000;
    display: flex;
    justify-content: flex-end;
  }

  .menu-icon {
    height: 47px;
    cursor: pointer;
    width: auto;
    position: relative;
    z-index: 3000;
    background: none;
    border: none;
    padding: 0;
    min-width: 60px;
  }

  .bar {
    background-color: rgb(0, 0, 0);
    z-index: 3000;
    position: absolute;
    height: 5px;
  }

  .closed .bar-1 {
    width: 50px;
    top: 15px;
    right: 0px;
    transition: 0.3s linear;
  }
  .closed .bar-2 {
    width: 30px;
    top: 25px;
    right: 0px;
    transition: 0.3s linear;
  }
  .opened .bar-1 {
    width: 30px;
    top: 15px;
    right: 0px;
    transition: 0.3s linear;
  }
  .opened .bar-2 {
    width: 50px;
    top: 25px;
    right: 0px;
    transition: 0.3s linear;
  }

  .menu-icon:hover .bar {
    background-color: rgb(43, 107, 172);
  }

  /* ── OVERLAY MENU ── */
  .menu {
    position: fixed;
    inset: 0;
    z-index: 199;
    background-color: rgba(245, 241, 234, 0.97);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 60px 60px 60px 80px;
    animation: fadeIn 0.25s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .menu__close {
    position: absolute;
    top: 14px;
    right: 24px;
    background: none;
    border: none;
    cursor: pointer;
    height: 47px;
    min-width: 60px;
    padding: 0;
  }

  .menu__close .bar-1 {
    width: 40px;
    top: 15px;
    right: 0;
    transform: rotate(45deg);
    transform-origin: right center;
  }
  .menu__close .bar-2 {
    width: 40px;
    top: 25px;
    right: 0;
    transform: rotate(-45deg);
    transform-origin: right center;
  }

  .menu__cursor {
    margin-bottom: 24px;
  }

  .menu__page-list__wrap {
    display: inline-block;
    text-align: left;
    margin: auto 0;
  }

  .menu__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .menu__item {
    font-family: "Poppins", sans-serif;
    font-size: clamp(2.2rem, 5vw, 3.4rem);
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #1a1a1a;
    cursor: pointer;
    padding: 6px 0;
    transition: opacity 0.2s;
  }
  .menu__item:hover {
    opacity: 0.35;
  }

  @media (max-width: 600px) {
    .page-list {
      display: none;
    }
    .menu {
      padding: 60px 32px;
    }
  }
</style>
