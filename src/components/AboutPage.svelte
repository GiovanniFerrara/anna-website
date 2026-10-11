<div class="about">
  <div class="about__frame about__frame--big">
    <img class="about__image" src="/red-table.jpg" alt="About Anna" />
  </div>

  <div class="about__right">
    <h1 class="about__title">MANIFESTO</h1>
    <hr class="about__divider about__divider--m1" />
    <div class="about__frame about__frame--small">
      <img class="about__image" src="/flowers.JPG" alt="Detail" />
    </div>
    <hr class="about__divider about__divider--mobile about__divider--m2" />
    <hr class="about__divider about__divider--main" />
    <div class="about__text">
      <p>
        Anna Hora is a Polish artist and food designer based between Paris and Warsaw, working internationally. She works with food as her creative material, creating installations, performances and edible events for galleries, festivals and brands.
      </p>
      <p>
        She explores life through food. In her work, food becomes a total medium, at once material and language: intimate and collective, private and political - insisting on the visibility of the kitchen as an undervalued space of human connection.
      </p>
      <p>
        She is drawn to the things we stop noticing: the kitchen, the work that happens there, and what a meal quietly says about the moment we live in. What ends up on the menu is never random. It carries memory and emotions, but mostly, it brings people to the table.
      </p>
      <p>
        And yet the table is also a place of celebration. Of people gathering around and choosing to be together.
      </p>
      <p>
        Her work insists on one simple fact: human connection is never abstract. It often happens between physical bodies, and often because of a shared meal. Whether in a gallery or at a catered event, she brings the same attention to what food sparks between people.
      </p>
    </div>
  </div>
</div>

<style>
  .about {
    /* bottom = top: same space above the footer as from the page top to the content */
    padding: 13rem var(--page-gutter) 13rem;
    display: grid;
    grid-template-columns: 1.45fr 1fr;
    gap: 3rem;
    align-items: stretch;
  }

  .about__frame {
    border-radius: 12px;
    overflow: hidden;
    isolation: isolate;
  }

  .about__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: var(--hover-zoom-transition);
    will-change: transform;
  }

  .about__frame:hover .about__image {
    transform: scale(var(--hover-zoom-scale));
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
    letter-spacing: 0.02em;
  }

  .about__frame--small {
    width: 32.5%;
    aspect-ratio: 1 / 1;
    /* centered vertically between the line under the title and the one above the text */
    margin-top: auto;
    margin-bottom: auto;
    align-self: flex-start;
  }

  .about__divider {
    border: none;
    border-top: 2px solid #000;
    margin: 0.5rem 0;
    width: 100%;
  }

  .about__divider--mobile {
    display: none;
  }


  .about__text p {
    margin: 0 0 1em;
  }

  .about__text p:last-child {
    margin-bottom: 0;
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
      display: flex;
      flex-direction: column;
      padding: 11rem var(--page-gutter) 4rem;
      gap: 1.5rem;
    }
    .about__right {
      display: contents;
    }
    .about__title {
      order: 1;
      text-align: left;
      font-size: clamp(5rem, 14vw, 9rem);
      margin: 1rem 0 0;
    }
    .about__divider--m1 {
      display: block;
      order: 2;
    }
    .about__frame--big {
      order: 3;
      max-height: 60vh;
    }
    .about__divider--m2 {
      display: block;
      order: 4;
    }
    .about__text {
      order: 5;
    }
    .about__divider--main {
      order: 6;
    }
    .about__frame--small {
      order: 7;
      width: 100%;
      max-height: 60vh;
      aspect-ratio: auto;
      margin-top: 0;
    }
    .about__frame--big .about__image,
    .about__frame--small .about__image {
      max-height: 60vh;
    }
  }
</style>
