import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class ModalDetailStory extends LitWithoutShadowDom {
  static properties = {
    title: { type: String, reflect: true },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header bg-gray">
            <h1 class="modal-title fs-2" id="staticBackdropLabel">${this.title}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <img src="" id="imgDetailRecord" class="img-fluid rounded" alt="" />
            </div>

            <div class="row mt-2">
              <div class="col-sm-3 fw-bold">${msg(`Nama`)} <br /></div>
              <div class="col-sm-9">: <span id="nameDetailRecord"></span></div>
            </div>
            <div class="row mt-2">
              <div class="col-sm-3 fw-bold">${msg(`Tanggal dibuat`)} <br /></div>
              <div class="col-sm-9">: <span id="dateDetailRecord"></span></div>
            </div>
            <div class="row mt-2">
              <div class="col-sm-3 fw-bold">${msg(`Deskripsi`)}</div>
              <div class="col-sm-9">: <span id="noteDetailRecord"></span></div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              ${msg(`Tutup`)}
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('modal-detail-story', ModalDetailStory);
