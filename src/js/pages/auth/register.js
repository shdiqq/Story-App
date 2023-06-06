import Auth from '../../network/auth';
import CheckUserAuth from './check-user-auth';

const Register = {
  async init() {
    CheckUserAuth.checkLoginState();

    this._initialListener();
  },

  _initialListener() {
    const registerForm = document.querySelector('#registerForm');
    registerForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        registerForm.classList.add('was-validated');
        await this._getRegistered();
      },
      false,
    );
  },

  async _getRegistered() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      const preloaderWrapper = document.getElementById('preloaderWrapper');
      preloaderWrapper.style.visibility = 'visible';
      try {
        const response = await Auth.register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        if (response.status === 201) {
          window.alert('Registered a new user');

          this._goToLoginPage();
        } else {
          if (formData.password.length <= 8) {
            window.alert(`Password harus minimal 8 karakter`);
          } else {
            window.alert(`${response.response.data.message}`);
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        preloaderWrapper.style.visibility = 'hidden';
      }
    }
  },

  _getFormData() {
    const name = document.querySelector('#validationCustomRecordName');
    const email = document.querySelector('#validationCustomEmail');
    const password = document.querySelector('#validationCustomPassword');

    return {
      name: name.value,
      email: email.value,
      password: password.value,
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter(
      (item) => item === '' || item === undefined || item === null,
    );

    return formDataFiltered.length === 0;
  },

  _goToLoginPage() {
    window.location.href = '/auth/login.html';
  },
};

export default Register;
