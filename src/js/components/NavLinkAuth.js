import { LitElement, css, html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import Utils from '../utils/utils';
import Config from '../config/config';
import CheckUserAuth from '../pages/auth/check-user-auth';

class NavLinkAuth extends LitElement {
  static styles = css`
    .user-photo-bar {
      width: 30px;
      border-radius: 50%;
      margin-left: 16px;
      cursor: pointer;
    }

    .sub-menu-wrap {
      position: absolute;
      top: 70%;
      right: 5%;
      width: 320px;
      max-height: 0px;
      overflow: hidden;
      transition: max-height 0.5s;
    }

    .sub-menu-wrap.open-menu {
      max-height: 400px;
    }

    .sub-menu-wrap .sub-menu {
      background: #f5f5f5;
      padding: 20px;
    }

    .sub-menu-wrap .sub-menu .user-info {
      display: flex;
      align-items: center;
    }

    .sub-menu-wrap .sub-menu .user-info .user-photo {
      width: 60px;
      border-radius: 50%;
      margin-right: 16px;
    }

    .sub-menu-wrap .sub-menu .user-info h3 {
      font-weight: 500;
    }

    .sub-menu-wrap .sub-menu hr {
      border: 0;
      height: 1px;
      width: 100%;
      background: #ccc;
      margin: 15px 0 10px;
    }

    .sub-menu-wrap .sub-menu .sub-menu-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #525252;
      margin: 12px 0;
      cursor: pointer;
      transition: transform 0.5s;
    }

    .sub-menu-wrap .sub-menu .sub-menu-link:hover {
      transform: translateX(5px);
      font-weight: 600;
    }

    @media screen and (max-width: 920px) {
      .user-photo-bar {
        margin: 6px 37% 0;
      }

      .sub-menu-wrap {
        top: 93%;
      }
    }
  `;

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <img
        class="user-photo-bar"
        src="https://ui-avatars.com/api/?name=User%20Name&background=random"
        alt="User Name"
        @click=${() => this._toogleProfile()}
      />
      <div class="sub-menu-wrap" id="subMenu">
        <div class="sub-menu">
          <div class="user-info">
            <img
              class="user-photo"
              src="https://ui-avatars.com/api/?name=User%20Name&background=random"
              alt="User Name"
            />
            <h3>${Utils.getName(Config.NAME)}</h3>
          </div>
          <hr />
          <a class="sub-menu-link" id="userLogOut" @click=${this._userLogOut}>${msg(`Keluar`)}</a>
        </div>
      </div>
    `;
  }

  _toogleProfile() {
    const subMenuWrap = this.shadowRoot.querySelector('#subMenu');
    subMenuWrap.classList.toggle('open-menu');
  }

  _userLogOut(event) {
    event.preventDefault();
    Utils.destroyUserToken(Config.USER_TOKEN_KEY);
    Utils.destroyName(Config.NAME);

    CheckUserAuth.checkLoginState();
  }
}

customElements.define('nav-link-auth', NavLinkAuth);
