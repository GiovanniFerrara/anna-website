<div class="about">
  <img
    class="about__image about__image--big"
    src="/red-table.jpg"
    alt="About Anna"
  />

  <div class="about__right">
    <h1 class="about__title">MANIFESTO</h1>
    <img
      class="about__image about__image--small"
      src="/flowers.JPG"
      alt="Detail"
    />
    <hr class="about__divider" />
    <p class="about__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
</div>

<style>
  .about {
    padding: 13rem var(--page-gutter) 6rem;
    display: grid;
    grid-template-columns: 1.45fr 1fr;
    gap: 3rem;
    align-items: stretch;
  }

  .about__image--big {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
    display: block;
  }

  .about__right {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .about__title {
    font-family: "Baskervville", serif;
    font-size: clamp(6rem, 11vw, 14rem);
    font-weight: 600;
    line-height: 1;
    margin: -18px -13px 0 0;
    color: #000;
    text-shadow: -1px 1.5px black;
    letter-spacing: 0.02em;
  }

  .about__image--small {
    width: 32.5%;
    aspect-ratio: 1 / 1;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
    display: block;
    margin-top: auto;
    align-self: flex-start;
  }

  .about__divider {
    border: none;
    border-top: 2px solid #000;
    margin: 0.5rem 0;
    width: 100%;
  }

  .about__text {
    font-family: "Poppins", sans-serif;
    font-size: 1.7rem;
    line-height: 1.6;
    margin: 0;
    font-weight: 500;
  }

  @media (max-width: 992px) {
    .about {
      grid-template-columns: 1fr;
      padding: 11rem var(--page-gutter) 4rem;
      gap: 2rem;
    }
    .about__image--big {
      max-height: 60vh;
    }
    .about__image--small {
      display: none;
    }
    .about__title {
      text-align: left;
      font-size: clamp(5rem, 14vw, 9rem);
      margin: 1rem 0 0;
    }
  }
</style>
