import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class CardDashboard extends LitWithoutShadowDom {
  static properties = {
    name: { type: String, reflect: true },
    storyID: { type: String, reflect: true },
    description: { type: String, reflect: true },
    photoUrl: { type: String, reflect: true },
    createdAt: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.name = '';
    this.storyID = '';
    this.description = '';
    this.photoUrl = '';
    this.createdAt = '';
  }

  render() {
    return html`
      <div class="card m-3" style="width: 24rem;">
        <img
          class="card-img-top"
          src="${this.photoUrl}"
          alt="Card Story Image - ${this.name}"
          style="width: 100%;height: 15rem;object-fit: cover;"
        />
        <div class="card-body">
          <h1 class="card-title fs-2">${this.name}<br /></h1>
          <p class="card-text fs-5">${this.description}</p>
          <div class="d-flex justify-content-end align-items-center gap-3">
            <a
              class="btn btn-sm btn-primary"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#recordDetailModal"
              data-record-id="${this.storyID}"
            >
              <i class="bi bi-eye-fill me-1"></i>Show Detail
            </a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('card-dashboard', CardDashboard);
