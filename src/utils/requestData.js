const axios = require('axios');

const requireData = {
  get(url) {
    return axios.get(url);
  },
  post(url, body, config) {
    return axios.post(url, body, config);
  },
  delete(url) {},
};

module.exports = requireData;
