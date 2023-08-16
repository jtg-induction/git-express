const axiosInstance = require('../axios/hubApiInstance');
const serverConfig = require('../serverConfig');
const { getStaticUrl, prepareUserDetails } = require('../utils');

class HubUserModel {
  constructor(username, authToken) {
    this.username = username;
    this.authToken = authToken;
  }

  async getUserDetails() {
    const endpoint = getStaticUrl(
      serverConfig.externalApi.endpoints.userDetails,
      {
        user: this.username,
      },
    );

    if (!this.username) {
      throw {
        status: 400,
        message: 'Username is not present or invalid.',
      };
    }

    const response = await axiosInstance.get(endpoint, {
      headers: {
        Authorization: this.authToken,
      },
    });

    const data = JSON.parse(response.data);

    if (response.status !== 200) {
      throw {
        status: response.status,
        message: data.message,
      };
    }

    return prepareUserDetails(data);
  }
}

module.exports = HubUserModel;
