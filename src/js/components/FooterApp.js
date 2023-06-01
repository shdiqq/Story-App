import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class FooterApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <locale-picker class="d-block mb-3"></locale-picker>
      <div class="copyright">
        <p>${msg(`Dibuat oleh Shadiq Harwiz`)}</p>
      </div>
    `;
  }
}

customElements.define('footer-app', FooterApp);
