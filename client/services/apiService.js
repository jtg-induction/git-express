import axios from 'axios';

import apiUrls from '@constants/apiUrls';
import constants from '@constants/common';
import { getStaticUrl } from '@utils';

const axiosInstance = new axios.Axios({
  baseURL: process.env.API_BASE_URL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = JSON.stringify(config.data);
    config.headers['Content-Type'] = 'application/json';
  }

  const userAuthToken = window.localStorage.getItem(
    constants.STORAGE_KEYS.USER_AUTH_TOKEN,
  );

  config.headers['Authorization'] = userAuthToken
    ? `Token ${userAuthToken}`
    : undefined;

  return config;
});

axiosInstance.interceptors.response.use((config) => {
  config.data = JSON.parse(config.data);

  return config;
});

const signInUser = async (username, password) => {
  const response = await axiosInstance.post(apiUrls.LOGIN, {
    username,
    password,
  });

  return response;
};

const executeUserSearchQuery = async (params) => {
  const response = await axiosInstance.get(apiUrls.SEARCH, {
    params,
  });

  return response;
};

const getUserDetails = async (username) => {
  const response = await axiosInstance.get(
    getStaticUrl(apiUrls.USER_DETAILS, { username }),
  );

  return response;
};

const getUserSuggestions = async (count) => {
  const response = await axiosInstance.get(apiUrls.SUGGESTIONS, {
    params: {
      size: count,
    },
  });

  return response;
};

export default {
  axiosInstance,
  signInUser,
  executeUserSearchQuery,
  getUserDetails,
  getUserSuggestions,
};
