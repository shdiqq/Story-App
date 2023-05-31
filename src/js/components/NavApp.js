import { css, html, LitElement } from 'lit';

class NavApp extends LitElement {
  static styles = css`
    .navbar {
      position: fixed;
      z-index: 5;
      padding: 6px;
      width: 100%;
      background: rgb(245, 245, 245);
    }

    .navbar .container {
      margin: 0 5%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .navbar .container .container-left {
      font-size: 36px;
      font-weight: 700;
      cursor: pointer;
      border-bottom: 1px solid rgb(245, 245, 245);
    }

    .navbar .container .container-left:hover {
      border-bottom: 1px solid black;
    }

    .navbar .container .container-right {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    @media screen and (max-width: 920px) {
      .navbar .container .container-left {
        font-size: 24px;
      }

      .navbar .container .container-left:hover {
        border-bottom: none;
        background: rgb(255, 255, 255);
      }
    }
  `;

  static properties = {
    brandName: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('brandName')) {
      throw new Error(`Atribut "brandName" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <nav class="navbar">
        <div class="container">
          <div class="container-left">
            <span class="navbarBrand" @click=${() => this._goToDashboard()}>${this.brandName}</span>
          </div>
          <div class="container-right">
            <nav-links></nav-links>
          </dib>
        </div>
      </nav>
    `;
  }

  _goToDashboard() {
    window.location.href = '/';
    document.querySelector;
  }
}

customElements.define('nav-app', NavApp);
