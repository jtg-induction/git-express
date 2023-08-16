const axiosInstance = require('../axios/hubApiInstance');
const serverConfig = require('../serverConfig');
const { prepareUserDetails } = require('../utils');

class AuthModel {
  async authenticateUser(username, password) {
    const response = await axiosInstance.get(
      serverConfig.externalApi.endpoints.auth,
      {
        headers: {
          Authorization: `token ${password}`,
        },
      },
    );
    const data = JSON.parse(response.data);

    if (response.status === 401 || data.login !== username) {
      throw new Error('Wrong username or password.');
    }

    return prepareUserDetails(data);
  }
}

module.exports = AuthModel;
