<div id="Footer" class="footer">
  <div class="footer__left">
    <div class="footer__item footer__item--left">
      <span class="footer__space" />
      <p on:click={() => document.getElementById('split')?.scrollIntoView({ behavior: 'smooth' })}>About</p>
    </div>

    <div class="footer__item footer__item--left">
      <p class="footer__privacy">Privacy Policy</p>
      <span class="footer__space" />
      <p on:click={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}>Contacts</p>
    </div>

    <div class="footer__item footer__item--left">
      <span />
      <p on:click={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}>Testimonials</p>
    </div>
  </div>

  <div class="footer__center">
    <img class="footer__logo" src="/logo.svg" alt="Anna Hora" />
    <p>Copyright</p>
    <p>ANNA HORA</p>
    <p>{new Date().getFullYear()}</p>
  </div>

  <div class="footer__right">
    <p class="footer__item footer__item--right">Contact us:</p>
    <p class="footer__item footer__item--right">hora.anna@gmail.com</p>
    <p class="footer__item footer__item--right">+48 697 975 665</p>
  </div>
</div>

<style>
  .footer {
    display: flex;
    border-top: 2px solid #000;
    border-bottom: 2px solid #000;
    margin: 0 var(--page-gutter) 90px;
    padding-top: 4rem;
    padding-bottom: 4rem;
    padding-left: var(--page-gutter);
    padding-right: var(--page-gutter);
    background: #faf7f0;
    font-size: calc(2.2rem / 1.1);
    justify-content: space-between;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  .footer__item {
    padding-bottom: 2.2rem;
    vertical-align: bottom;
  }
  .footer__item:last-of-type {
    padding-bottom: 0;
  }
  .footer__item--left {
    display: flex;
    justify-content: flex-end;
    text-transform: uppercase;
    align-items: flex-end;
    text-align: right;
    cursor: pointer;
  }
  .footer__item--right {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
  }

  .footer__center {
    position: relative;
    text-align: center;
    font-size: 2.2rem;
  }
  .footer__center p {
    margin: 0.85em 0;
  }
  .footer__logo {
    width: 80px;
    display: block;
    margin: 0 auto;
  }

  .footer__right {
    text-align: left;
  }

  .footer__space {
    background: black;
    border-radius: 50%;
    height: 8px;
    width: 8px;
    flex-shrink: 0;
    margin: auto 5px 0.9rem 7px;
  }

  .footer__privacy {
    text-transform: uppercase;
    cursor: pointer;
    margin: 0;
  }

  p {
    margin: 0;
  }

  @media screen and (max-width: 992px) {
    .footer {
      flex-direction: column;
      padding-top: 2.7rem;
      padding-bottom: 3rem;
    }
    .footer__left {
      order: 2;
      padding-bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .footer__center {
      order: 0;
      padding-bottom: 3rem;
    }
    .footer__right {
      order: 1;
      padding-bottom: 3rem;
    }
    .footer__item {
      padding-bottom: 0;
    }
    .footer__item--left {
      justify-content: center;
      text-align: center;
    }
    .footer__item--right {
      justify-content: center;
      text-align: center;
    }
  }
</style>
