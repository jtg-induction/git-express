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

    if (response.status !== 200) {
      throw {
        status: response.status,
        message: data.message,
      };
    }

    if (data.login !== username) {
      throw {
        status: 401,
        message: 'Wrong username or password',
      };
    }

    return prepareUserDetails(data);
  }
}

module.exports = AuthModel;
