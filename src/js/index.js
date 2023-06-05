// Import our custom CSS
import '../scss/main.scss';

// Import components
import './components/index';

// Import javascript file as needed
import Dashboard from './pages/dashboard';
import Add from './pages/story/add';
import Login from './pages/auth/login';
import Register from './pages/auth/register';

import './utils/firebase';
import * as bootstrap from 'bootstrap';

const routes = {
  '/': Dashboard,
  '/story/add.html': Add,

  '/auth/login.html': Login,
  '/auth/register.html': Register,
};

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  if (main && footer) {
    main.style.minHeight = `calc(100vh - ${footer.clientHeight}px)`;
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  initPages();

  const route = detectRoute();
  route.init();
});
