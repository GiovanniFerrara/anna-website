<script lang="ts">
  // Manifesto page — Anna will fill in her text
</script>

<div class="manifesto">
  <div class="manifesto__content">
    <h2 class="manifesto__label">Manifesto</h2>
    <p class="manifesto__text">
      Anna's manifesto will go here.
    </p>
  </div>
</div>

<style>
  .manifesto {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a1a1a;
    padding: 80px 40px;
  }

  .manifesto__content {
    max-width: 720px;
    text-align: center;
  }

  .manifesto__label {
    font-size: 0.8rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #666;
    margin-bottom: 48px;
  }

  .manifesto__text {
    font-size: clamp(1.2rem, 2.5vw, 1.8rem);
    font-weight: 300;
    line-height: 1.9;
    color: #f5f0eb;
    letter-spacing: 0.02em;
  }
</style>
