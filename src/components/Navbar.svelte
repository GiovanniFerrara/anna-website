<script lang="ts">
  let menuOpen = false

  function toggle() { menuOpen = !menuOpen }
  function close() { menuOpen = false }

  const items = [
    { label: 'About Me', href: '#about' },
    { label: 'Work', href: '#split' },
    { label: 'Manifesto', href: '#manifesto' },
    { label: 'Contacts', href: '#contacts' },
  ]

  function navigate(href: string) {
    close()
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 320)
  }
</script>

<div class="navbar">
  <!-- Left: lang/social placeholder (same flex space as original langSwap) -->
  <div class="langSwap navbar--active">
    <div class="social-icons">
      <a href="https://pinterest.com" target="_blank" rel="noopener" aria-label="Pinterest" class="social-icons__item">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
        </svg>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" class="social-icons__item">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
    </div>
  </div>

  <!-- Center: page list -->
  <div class="page-list">
    <ul class="page-list__list">
      {#each items as item}
        <li class="page-list__item" on:click={() => navigate(item.href)} role="button" tabindex="0" on:keydown={(e) => e.key === 'Enter' && navigate(item.href)}>
          {item.label}
        </li>
      {/each}
    </ul>
  </div>

  <!-- Right: burger icon -->
  <div class="icon">
    <button class="menu-icon" class:opened={menuOpen} class:closed={!menuOpen} on:click={toggle} aria-label="Menu">
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
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
        <path d="M24 12L96 60L60 66L48 102L24 12Z" fill="#1a1a1a"/>
        <line x1="60" y1="3" x2="60" y2="18" stroke="#1a1a1a" stroke-width="3"/>
        <line x1="105" y1="21" x2="94.5" y2="31.5" stroke="#1a1a1a" stroke-width="3"/>
        <line x1="117" y1="60" x2="102" y2="60" stroke="#1a1a1a" stroke-width="3"/>
        <line x1="15" y1="21" x2="25.5" y2="31.5" stroke="#1a1a1a" stroke-width="3"/>
        <line x1="3" y1="60" x2="18" y2="60" stroke="#1a1a1a" stroke-width="3"/>
        <line x1="21" y1="99" x2="30" y2="88.5" stroke="#1a1a1a" stroke-width="3"/>
      </svg>
    </div>
    <div class="menu__page-list__wrap">
      <ul class="menu__list">
        {#each items as item}
          <li class="menu__item" on:click={() => navigate(item.href)} role="button" tabindex="0" on:keydown={(e) => e.key === 'Enter' && navigate(item.href)}>
            {item.label}
          </li>
        {/each}
      </ul>
    </div>
    <div class="social-icons">
      <a href="https://pinterest.com" target="_blank" rel="noopener" class="social-icons__item">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
        </svg>
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
    padding-left: 1.5%;
    padding-right: 1.5%;
    height: 6.5rem;
    transition: 0.4s;
    background: transparent;
  }

  .navbar .navbar--active { opacity: 1 !important; }
  .navbar:hover :global(.page-list__item) { opacity: 1; }
  .navbar:hover .langSwap { opacity: 1; }
  .navbar:hover .social-icons__item { opacity: 1; }

  /* langSwap / left area */
  .langSwap {
    margin: auto auto auto 0px;
    flex: 1 0 28%;
    justify-content: flex-start;
    opacity: 0;
    transition: opacity 0.4s;
    display: flex;
    align-items: center;
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .social-icons__item {
    color: #1a1a1a;
    display: flex;
    align-items: center;
    opacity: 0;
    transition: opacity 0.4s;
    text-decoration: none;
  }
  .social-icons__item:hover { opacity: 0.5 !important; }

  /* page-list */
  .page-list {
    flex: 0 1 54%;
    justify-content: space-between;
    margin-top: auto;
    margin-bottom: auto;
  }

  .page-list__list {
    display: flex;
    justify-content: space-between;
    margin-left: -2px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .page-list__item {
    font-family: 'Poppins', sans-serif;
    font-size: 2.6rem;
    text-transform: uppercase;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    cursor: pointer;
  }
  .page-list__item:hover { opacity: 0.5 !important; }

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

  .closed .bar-1 { width: 50px; top: 15px; right: 0px; transition: 0.3s linear; }
  .closed .bar-2 { width: 30px; top: 25px; right: 0px; transition: 0.3s linear; }
  .opened .bar-1 { width: 30px; top: 15px; right: 0px; transition: 0.3s linear; }
  .opened .bar-2 { width: 50px; top: 25px; right: 0px; transition: 0.3s linear; }

  .menu-icon:hover .bar { background-color: rgb(43, 107, 172); }

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
    from { opacity: 0; }
    to { opacity: 1; }
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
    width: 40px; top: 15px; right: 0;
    transform: rotate(45deg);
    transform-origin: right center;
  }
  .menu__close .bar-2 {
    width: 40px; top: 25px; right: 0;
    transform: rotate(-45deg);
    transform-origin: right center;
  }

  .menu__cursor { margin-bottom: 24px; }

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
    font-family: 'Poppins', sans-serif;
    font-size: clamp(2.2rem, 5vw, 3.4rem);
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #1a1a1a;
    cursor: pointer;
    padding: 6px 0;
    transition: opacity 0.2s;
  }
  .menu__item:hover { opacity: 0.35; }

  @media (max-width: 600px) {
    .page-list { display: none; }
    .menu { padding: 60px 32px; }
  }
</style>
