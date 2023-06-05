import CheckUserAuth from '../auth/check-user-auth';
import Stories from '../../network/stories';

const Add = {
  async init() {
    CheckUserAuth.checkLoginState();
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

  async _sendPost() {
    const preloaderWrapper = document.getElementById('preloaderWrapper');
    preloaderWrapper.style.visibility = 'visible';
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);

      try {
        const response = await Stories.addNewStory(formData);
        preloaderWrapper.style.visibility = 'hidden';
        window.alert('New Stories added successfully');

        this._goToDashboardPage();
      } catch (error) {
        console.error(error);
      }
    }
  },

  _getFormData() {
    const descriptionInput = document.querySelector('#validationCustomNotes');
    const evidenceInput = document.querySelector('#validationCustomEvidence');

    var date = new Date().toISOString();

    return {
      description: descriptionInput.value,
      photo: evidenceInput.files[0],
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
