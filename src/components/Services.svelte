<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  const services = [
    {
      key: "AC",
      name: ["Art", "Commissions"],
      content: [
        "Site-specific installations and performances",
        "For galleries, institutions and festivals",
        "Open to residencies and collaborations",
      ],
    },
    {
      key: "EI",
      name: ["Edible", "Installations"],
      content: [
        "Food as sculpture your guests can eat",
        "For openings, launches and private events",
        "From concept to setup, catering included",
      ],
    },
    {
      key: "DP",
      name: ["Immersive", "Dinners"],
      content: [
        "Staged dinners and performative tastings",
        "Participatory formats built around the table",
        "For festivals, galleries and private hosts",
      ],
    },
    {
      key: "SD",
      name: ["Set Design", "Art Direction"],
      content: [
        "Food styling and sets for campaigns",
        "Photo and video shoots, product launches",
        "Visual concepts built with edible material",
      ],
    },
  ];

  function goContacts() {
    dispatch("contacts");
    document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
  }
</script>

<div id="services" class="services2">
  <div class="services2__wrap">
    <div class="services2__pic-header-wrap">
      <img class="services2__pic-header" src="/services.png" alt="Services" />
    </div>
    <div class="services2__row">
      <div class="services2__left-column">
        <h2 class="services2__left-column-title">On the menu:</h2>
        <img
          on:click={goContacts}
          on:keydown={(e) => e.key === "Enter" && goContacts()}
          role="button"
          tabindex="0"
          class="services2__left-column-pic"
          src="/mail.png"
          alt="Message us!"
        />
      </div>
      <div class="services2__slider">
        <div class="serviceCard2">
          {#each services as service}
            <div class="serviceCard2-wrap" key={service.key}>
              <div class="serviceCard2__inner">
                <div class="serviceCard2__inner-wrap">
                  <p class="serviceCard2__inner-title">
                    {#each service.name as line}<span>{line}</span>{/each}
                  </p>
                  <ul class="serviceCard2__inner-list">
                    {#each service.content as item}
                      <li class="serviceCard2__inner-item">{item}</li>
                    {/each}
                  </ul>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  /* ── Copied from ineedanicewebsite branch=anna _services2.sass ── */
  .services2 {
    background-color: #faf7f0;
    /* top padding tuned so the SERVICES sign sits ~73px below the line above,
       same rhythm as the Work section */
    padding: 8.5rem var(--page-gutter) calc(10rem - 13px);
    margin-top: 0;
    position: relative;
  }

  .services2__wrap {
    min-height: 450px;
    width: 100%;
    border: 2px solid #000;
    border-radius: 5px;
    position: relative;
  }

  .services2__pic-header-wrap {
    position: relative;
    width: 41.66%; /* lg=5/12 */
    left: 50%;
    top: 0;
    transform: translate(-50%, -40%);
  }

  .services2__pic-header {
    width: 100%;
    display: block;
  }

  .services2__row {
    display: flex;
    align-items: stretch;
    margin-top: -60px;
    margin-bottom: 50px;
    height: 100%;
  }

  .services2__left-column {
    flex: 0 0 16.66%; /* lg=2/12 */
    margin-top: 90px;
  }

  .services2__left-column-title {
    text-align: left;
    font-size: calc(2.6rem * 1.3);
    padding-left: 20%;
    font-weight: 600;
    width: 220px;
    margin: 0;
  }

  .services2__left-column-pic {
    cursor: pointer;
    width: 70px;
    margin-left: 20%;
    display: block;
    padding-top: 2.2rem;
  }

  .services2__slider {
    flex: 0 0 83.33%; /* lg=10/12 */
    display: flex;
  }

  /* ── Copied from _serviceCard2.sass ── */
  .serviceCard2 {
    width: 100%;
    min-height: 100%;
    display: flex;
  }

  .serviceCard2-wrap {
    outline: none;
    flex: 1 1 25%;
    min-width: 0;
  }

  .serviceCard2__inner {
    background: #fff;
    border-radius: 5px;
    margin: 0 1.5% auto 2%;
    height: 440px;
    cursor: move;
    cursor: grab;
  }
  .serviceCard2__inner:active {
    cursor: grabbing;
  }

  .serviceCard2__inner-wrap {
    margin: 10px;
    margin-top: 0;
    padding-top: 40px;
  }

  .serviceCard2__inner-title {
    font-weight: 600;
    font-size: calc(2.6rem * 1.2);
    width: auto;
    height: 90px;
    padding: 10px;
    line-height: 1.1em;
    margin: 0;
  }

  /* one title line per entry in service.name */
  .serviceCard2__inner-title span {
    display: block;
    white-space: nowrap;
  }

  .serviceCard2__inner-list {
    list-style: none;
    padding: 0;
    margin: 0;
    border-top: 2px solid #000;
    padding-top: 1.5rem;
  }

  .serviceCard2__inner-item {
    padding-top: 2.2rem;
    font-size: 1.7rem;
    font-weight: 500;
  }
  .serviceCard2__inner-item:last-of-type {
    padding-bottom: 40px;
  }

  @media screen and (max-width: 1200px) {
    .services2 {
      padding-top: 60px;
    }
    .services2__row {
      flex-direction: column;
      margin: 0 auto 15px auto;
    }
    .services2__pic-header {
      width: 100%;
    }
    .services2__left-column {
      display: block;
      margin: 0 auto;
      flex: none;
      text-align: center;
      padding-right: 15px;
    }
    .services2__left-column-title {
      display: inline;
      font-size: 2.2rem;
      padding-left: 10px;
      margin: auto;
      width: auto;
    }
    .services2__left-column-pic {
      display: inline-block;
      cursor: pointer;
      width: 50px;
      margin-left: 10px;
      margin-top: 10px;
      padding-top: 0;
      vertical-align: text-bottom;
    }
    .services2__slider {
      flex: none;
    }
    .serviceCard2 {
      overflow-x: auto;
      scroll-snap-type: x mandatory;
    }
    .serviceCard2-wrap {
      flex: 0 0 50%;
      scroll-snap-align: start;
    }
    .serviceCard2__inner-title {
      font-size: 2.2rem;
    }
  }

  @media screen and (max-width: 800px) {
    .serviceCard2-wrap {
      flex: 0 0 80%;
    }
  }
</style>
