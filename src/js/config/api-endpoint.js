import Config from './config';

const ApiEndpoint = {
  REGISTER: `/register`,
  LOGIN: `/login`,

  ADD_NEW_STORY: `${Config.BASE_URL}/stories`,

  GET_ALL_STORIES: `/stories`,
};

export default ApiEndpoint;
