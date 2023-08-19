import constants from '@constants/index';

export const isUserAuthenticated = () => {
  return Boolean(
    window.localStorage.getItem(constants.STORAGE_KEYS.USER_AUTH_TOKEN),
  );
};

export const getStaticUrl = (dynamicUrl, replacements) => {
  let url = dynamicUrl;
  Object.keys(replacements).forEach((key) => {
    url = url.replaceAll(`:${key}`, replacements[key]);
  });
  return url;
};

export const storeUserInStorage = (name, authToken) => {
  window.localStorage.setItem(
    constants.STORAGE_KEYS.USER_AUTH_TOKEN,
    authToken,
  );
  window.localStorage.setItem(constants.STORAGE_KEYS.USER_NAME, name);
};
