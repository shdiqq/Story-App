const Add = {
  async init() {
    this._initialListener();
  },

  _initialListener() {
    const addFormRecord = document.querySelector('#addRecordForm');
    addFormRecord.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        addFormRecord.classList.add('was-validated');
        this._sendPost();
      },
      false,
    );
  },

  _sendPost() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);

      // this._goToDashboardPage();
    }
  },

  _getFormData() {
    const nameInput = document.querySelector('#validationCustomRecordName');
    const descriptionInput = document.querySelector('#validationCustomNotes');
    const evidenceInput = document.querySelector('#validationCustomEvidence');

    var date = new Date().toISOString();

    return {
      id: `story-${Math.random().toString(17).substring(2, 17)}`,
      name: nameInput.value,
      description: descriptionInput.value,
      photoUrl: evidenceInput.files[0],
      createdAt: date,
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },

  _goToDashboardPage() {
    window.location.href = '/';
  },
};

export default Add;
