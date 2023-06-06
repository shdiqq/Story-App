import Auth from '../../network/auth';
import Config from '../../config/config';
import Utils from '../../utils/utils';
import CheckUserAuth from './check-user-auth';

const Login = {
  async init() {
    CheckUserAuth.checkLoginState();

    this._initialListener();
  },

  _initialListener() {
    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        loginForm.classList.add('was-validated');
        await this._getLogged();
      },
      false,
    );
  },

  async _getLogged() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      const preloaderWrapper = document.getElementById('preloaderWrapper');
      preloaderWrapper.style.visibility = 'visible';
      try {
        const response = await Auth.login({
          email: formData.email,
          password: formData.password,
        });
        if (response.status === 200) {
          Utils.setUserToken(Config.USER_TOKEN_KEY, response.data.loginResult.token);
          Utils.setName(Config.NAME, response.data.loginResult.name);

          window.alert('Signed user in detected');

          this._goToDashboardPage();
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
    const email = document.querySelector('#validationCustomRecordEmail');
    const password = document.querySelector('#validationCustomPassword');

    return {
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

  _goToDashboardPage() {
    window.location.href = '/index.html';
  },
};

export default Login;
