import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { html } from 'lit';

class ShowPassword extends LitWithoutShadowDom {
  constructor() {
    super();
  }

  render() {
    return html` <input type="checkbox" @click=${() => this._showPassword()} /> Show Password `;
  }

  _showPassword() {
    var passwordText = document.getElementById('validationCustomPassword');
    if (passwordText.type === 'password') {
      passwordText.type = 'text';
    } else {
      passwordText.type = 'password';
    }
  }
}

customElements.define('show-password', ShowPassword);
