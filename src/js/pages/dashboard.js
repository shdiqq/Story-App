const Dashboard = {
  async init() {
    await this._initialData();
    this._initialListener();
  },

  async _initialData() {
    const fetchRecords = await fetch('/data/DATA.json');
    const responseRecords = await fetchRecords.json();
    this._listStory = responseRecords.listStory;
    this._populateTransactionsRecordToCard(this._listStory);
  },

  _initialListener() {
    const recordDetailModal = document.getElementById('recordDetailModal');
    recordDetailModal.addEventListener('show.bs.modal', (event) => {
      const modalTitle = recordDetailModal.querySelector('.modal-title');
      modalTitle.focus();

      const button = event.relatedTarget;
      const dataRecord = this._listStory.find((item) => {
        return item.id == button.dataset.recordId;
      });

      this._populateDetailTransactionToModal(dataRecord);
    });
  },

  _populateTransactionsRecordToCard(listStory = null) {
    if (!(typeof listStory === 'object')) {
      throw new Error(`Parameter listStory should be an object. The value is ${listStory}`);
    }

    if (!Array.isArray(listStory)) {
      throw new Error(`Parameter listStory should be an array. The value is ${listStory}`);
    }

    const recordBodyCard = document.querySelector('#recordsCard');

    recordBodyCard.innerHTML = '';
    if (listStory.length <= 0) {
      recordBodyCard.innerHTML = this._templateEmptyBodyCard();
      return;
    }

    listStory.forEach((item, idx) => {
      recordBodyCard.innerHTML += this._templateBodyCard(idx, listStory[idx]);
    });
  },

  _populateDetailTransactionToModal(storyRecord) {
    if (!(typeof storyRecord === 'object')) {
      throw new Error(`Parameter storyRecord should be an object. The value is ${storyRecord}`);
    }

    const imgDetailRecord = document.querySelector('#recordDetailModal #imgDetailRecord');
    const nameDetailRecord = document.querySelector('#recordDetailModal #nameDetailRecord');
    const createdAtDetailRecord = document.querySelector('#recordDetailModal #dateDetailRecord');
    const descriptionDetailRecord = document.querySelector('#recordDetailModal #noteDetailRecord');

    imgDetailRecord.setAttribute('src', storyRecord.photoUrl);
    imgDetailRecord.setAttribute('alt', `Card Story Image - ${storyRecord.name}`);
    nameDetailRecord.textContent = storyRecord.name;
    var date = new Date(storyRecord.createdAt);
    date.toISOString().substring(0, 10);
    createdAtDetailRecord.textContent = date.toString().slice(0, 24);
    descriptionDetailRecord.textContent = storyRecord.description || '-';
  },

  _templateBodyCard(index, storyRecord) {
    return `
      <card-dashboard
        name="${storyRecord.name}"
        storyID="${storyRecord.id}"
        description="${storyRecord.description.slice(0, 85)}..."
        photoUrl="${storyRecord.photoUrl}"
        createdAt="${storyRecord.createdAt}"
        classes="h-100 bg-primary text-bg-primary bg-gradient"
      ></card-dashboard>
    `;
  },

  _templateEmptyBodyCard() {
    return `
      <div class="text-center">Tidak ada list story</div>
    `;
  },
};

export default Dashboard;
