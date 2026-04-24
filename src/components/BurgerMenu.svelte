<script lang="ts">
  let isOpen = false

  function toggle() { isOpen = !isOpen }
  function close() { isOpen = false }

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

<!-- Burger button -->
<button class="burger" class:open={isOpen} on:click={toggle} aria-label="Menu">
  <span class="burger__line"></span>
  <span class="burger__line"></span>
</button>

<!-- Overlay -->
{#if isOpen}
  <div class="overlay" role="presentation">
    <!-- Cursor icon, same as original -->
    <div class="overlay__cursor">
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
        <path d="M16 8L64 40L40 44L32 68L16 8Z" fill="#1a1a1a"/>
        <!-- rays -->
        <line x1="40" y1="2" x2="40" y2="12" stroke="#1a1a1a" stroke-width="2"/>
        <line x1="70" y1="14" x2="63" y2="21" stroke="#1a1a1a" stroke-width="2"/>
        <line x1="78" y1="40" x2="68" y2="40" stroke="#1a1a1a" stroke-width="2"/>
        <line x1="10" y1="14" x2="17" y2="21" stroke="#1a1a1a" stroke-width="2"/>
        <line x1="2" y1="40" x2="12" y2="40" stroke="#1a1a1a" stroke-width="2"/>
        <line x1="14" y1="66" x2="20" y2="59" stroke="#1a1a1a" stroke-width="2"/>
      </svg>
    </div>

    <nav class="overlay__nav">
      {#each items as item}
        <button class="overlay__item" on:click={() => navigate(item.href)}>
          {item.label}
        </button>
      {/each}
    </nav>
  </div>
{/if}

<style>
  /* Burger icon */
  .burger {
    position: fixed;
    top: 24px;
    right: 28px;
    z-index: 1000;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 7px;
    padding: 6px;
  }

  .burger__line {
    display: block;
    width: 30px;
    height: 2px;
    background-color: #1a1a1a;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform-origin: center;
  }

  .burger.open .burger__line:first-child {
    transform: translateY(4.5px) rotate(45deg);
  }
  .burger.open .burger__line:last-child {
    transform: translateY(-4.5px) rotate(-45deg);
  }

  /* Overlay */
  .overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(250, 247, 244, 0.96);
    z-index: 999;
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

  .overlay__cursor {
    margin-bottom: 32px;
    opacity: 0.85;
  }

  .overlay__nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .overlay__item {
    background: none;
    border: none;
    cursor: pointer;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #1a1a1a;
    padding: 6px 0;
    transition: opacity 0.2s ease;
    text-align: left;
    line-height: 1.15;
  }

  .overlay__item:hover {
    opacity: 0.35;
  }

  @media (max-width: 480px) {
    .overlay {
      padding: 60px 32px;
    }
  }
</style>
