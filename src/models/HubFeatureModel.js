const axiosInstance = require('../axios/hubApiInstance');
const serverConfig = require('../serverConfig');
const { prepareUserDetails } = require('../utils');

class HubFeatureModel {
  constructor(authToken) {
    this.authToken = authToken;
  }

  async getUserSuggestions(count) {
    const response = await axiosInstance.get(
      serverConfig.externalApi.endpoints.getUsers,
      {
        headers: {
          Authorization: this.authToken,
        },
        params: {
          since: Math.floor(Math.random() * 10000 + 1),
          per_page: count,
        },
      },
    );

    if (response.status !== 200) {
      throw {
        status: response.status,
        message: response.data.message,
      };
    }

    return response.data.map((item) => prepareUserDetails(item));
  }

  async getSearchUsers(queries) {
    const response = await axiosInstance.get(
      serverConfig.externalApi.endpoints.searchUsers,
      {
        headers: {
          Authorization: this.authToken,
        },
        params: queries,
      },
    );

    if (response.status !== 200) {
      throw {
        status: response.status,
        message: response.data.message,
      };
    }

    return response.data.items.map((item) => prepareUserDetails(item));
  }

  async getPaginatedSearchUsers() {
    /** TODO */
    return [];
  }
}

module.exports = HubFeatureModel;
