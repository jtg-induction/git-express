module.exports = {
  version: 1.0,
  /** Stores unique build id. \
   * Update this whenever any changes are being made at client side in `production` */
  clientBuildId: '12b5cb345',
  externalApi: {
    baseUrl: 'https://api.github.com/',
    endpoints: {
      auth: '/user',
      userDetails: '/users/{user}',
      searchUsers: '/search/users',
      followUser: '/user/following/{user}',
      getUsers: '/users',
    },
  },
};
