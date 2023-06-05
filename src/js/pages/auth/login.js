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

      //console.log('formData');
      //console.log(formData);

      try {
        const response = await Auth.login({
          email: formData.email,
          password: formData.password,
        });
        if (response.status === 200) {
          Utils.setUserToken(Config.USER_TOKEN_KEY, response.data.loginResult.token);
          Utils.setName(Config.NAME, response.data.loginResult.name);
          preloaderWrapper.style.visibility = 'hidden';
          window.alert('Signed user in detected');

          this._goToDashboardPage();
        } else {
          preloaderWrapper.style.visibility = 'hidden';
          window.alert(`${response.response.data.message}`);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      window.alert(`Password minimal berisi 8 karakter`);
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
    const formDataFiltered = Object.values(formData).filter((item) => item === '');
    const isPasswordChar8 = formData.password.length >= 8;

    return formDataFiltered.length === 0 && isPasswordChar8;
  },

  _goToDashboardPage() {
    window.location.href = '/';
  },
};

export default Login;
