const getStaticUrl = (dynamicUrl, replacements) => {
  let url = dynamicUrl;
  Object.keys(replacements).forEach((key) => {
    url = url.replaceAll(`{${key}}`, replacements[key]);
  });
  return url;
};

const prepareUserDetails = (data) => ({
  username: data.login,
  id: data.id,
  avatarUrl: data.avatar_url,
  collaborators: data.collaborators,
  name: data.name,
  company: data.company,
  location: data.location,
  email: data.email,
  bio: data.bio,
  followersCount: data.followers,
  followingCount: data.following,
  totalReposCount: (data.public_repos || 0) + (data.owned_private_repos || 0),
  twitterUsername: data.twitter_username,
});

module.exports = {
  getStaticUrl,
  prepareUserDetails,
};
