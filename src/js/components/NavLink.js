import { LitElement, css, html } from 'lit';

class NavLink extends LitElement {
  static styles = css`
    li {
      list-style-type: none;
      margin: 0px 12px 0px 12px;
    }

    li a {
      padding: 3px;
      text-decoration: none;
      font-size: 18px;
      font-weight: 500;
      color: black;
    }

    li a:hover {
      border-bottom: 1px solid black;
    }

    @media screen and (max-width: 920px) {
      li {
        padding: 12px;
        margin: 0;
        text-align: center;
      }

      li:hover {
        background: rgb(255, 255, 255);
      }

      li a {
        font-size: 12px;
      }

      li a:hover {
        border-bottom: none;
      }
    }
  `;

  static properties = {
    content: { type: String, reflect: true },
    to: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('to')) {
      throw new Error(`Atribut "to" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <li class="nav-item">
        <a class="nav-link" href="${this.to}">${this.content}</a>
      </li>
    `;
  }
}

customElements.define('nav-link', NavLink);
