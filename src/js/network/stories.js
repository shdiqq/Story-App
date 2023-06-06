import ApiEndpoint from '../config/api-endpoint';
import instance from '../config/api-instance';

const Stories = {
  async getAllStories() {
    return await instance('application/json')({
      method: 'get',
      url: ApiEndpoint.GET_ALL_STORIES,
    })
      .then((res) => {
        //console.log(res);
        return res;
      })
      .catch((err) => {
        //console.log(err);
        return err;
      });
  },

  async addNewStory({ description, photo }) {
    return await instance('multipart/form-data')({
      method: 'post',
      url: ApiEndpoint.ADD_NEW_STORY,
      data: {
        description: description,
        photo: photo,
      },
    })
      .then((res) => {
        //console.log(res);
        return res;
      })
      .catch((err) => {
        //console.log(err);
        return err;
      });
  },
};

export default Stories;
