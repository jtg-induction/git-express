const axios = require('axios');
const serverConfig = require('../serverConfig');

const axiosInstance = new axios.Axios({
  baseURL: serverConfig.externalApi.baseUrl,
  timeout: 10000,
  headers: {
    accept: 'application/vnd.github.v3+json',
  },
});

axiosInstance.interceptors.request.use((requestConfig) => {
  /**
   * Check if the authentication header is present and the request url is not auth one
   * Note - Token is mandatory for all api calls except for auth one
   **/
  if (
    requestConfig.url !== serverConfig.externalApi.endpoints.auth &&
    !requestConfig.headers['Authorization']
  ) {
    return Promise.reject({
      status: 401,
      message: 'Authorization header not present',
    });
  }
  return requestConfig;
});

module.exports = axiosInstance;
