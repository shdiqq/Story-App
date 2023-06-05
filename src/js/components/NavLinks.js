import { LitElement, html, css } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import CheckUserAuth from '../pages/auth/check-user-auth';

class NavLinks extends LitElement {
  static styles = css`
    button,
    ul button {
      display: none;
    }

    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    @media screen and (max-width: 920px) {
      button {
        display: block;
        font-size: 18px;
        border: none;
        background: none;
        cursor: pointer;
      }

      button.hide {
        display: none;
      }

      ul {
        position: fixed;
        right: -1000px;
      }

      ul.open {
        background: rgb(245, 245, 245);
        width: 125px;
        padding: 12px;
        flex-direction: column;
        position: fixed;
        z-index: 7;
        top: -13px;
        right: 2.5%;
        align-items: flex-end;
      }

      ul button {
        display: block;
      }

      ul nav-link,
      ul nav-link-auth {
        width: 100%;
      }
    }
  `;

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    if (CheckUserAuth.checkLoginState() === true) {
      return html`
        <button @click=${() => this._showNavLink()} aria-label="navigation-menu-open">☰</button>
        <ul>
          <button @click=${() => this._hideNavLink()} aria-label="navigation-menu-close">X</button>
          <nav-link content="${msg(`Dasbor`)}" to="/"></nav-link>
          <nav-link content="${msg(`Tambah Story`)}" to="/story/add.html"></nav-link>
          <nav-link-auth></nav-link-auth>
        </ul>
      `;
    } else {
      return html`
        <button @click=${() => this._showNavLink()} aria-label="navigation-menu-open">☰</button>
        <ul>
          <button @click=${() => this._hideNavLink()} aria-label="navigation-menu-close">X</button>
          <nav-link content="${msg(`Dasbor`)}" to="/"></nav-link>
          <nav-link content="${msg(`Tambah Story`)}" to="/story/add.html"></nav-link>
          <nav-link content="${msg(`Masuk`)}" to="/auth/login.html"></nav-link>
        </ul>
      `;
    }
  }

  _showNavLink() {
    const ul = this.shadowRoot.querySelector('ul');
    const button = this.shadowRoot.querySelector('button');
    ul.classList.add('open');
    button.classList.add('hide');
  }

  _hideNavLink() {
    const ul = this.shadowRoot.querySelector('ul');
    const button = this.shadowRoot.querySelector('button');
    ul.classList.remove('open');
    button.classList.remove('hide');
  }
}

customElements.define('nav-links', NavLinks);
