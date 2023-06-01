// Import our custom CSS
import '../scss/main.scss';

// Import components
import './components/index';

// Import javascript file as needed
import Dashboard from './pages/dashboard';
import Add from './pages/story/add';
import * as bootstrap from 'bootstrap';

const routes = {
  '/': Dashboard,
  '/story/add.html': Add,
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
  console.log(route);
  route.init();
});
