const apiConfig = {
  clientId: 'efrmnqokv2zxydq5aqco0p3i0tqpg4',
  authUrl: 'https://id.twitch.tv/oauth2/authorize',
  redirectUrl: 'http://localhost:4200/auth/authorize',
  baseUrl: 'https://api.twitch.tv/helix',
};

const oAuthConfig = {
  authLink: `${apiConfig.authUrl}?client_id=${apiConfig.clientId}&response_type=token&redirect_uri=${apiConfig.redirectUrl}`
};

export const environment = {
  production: true,
  api: {...apiConfig, ...oAuthConfig},
  twitch: {
    videoPlayerUrl: 'http://player.twitch.tv/?channel=[USERNAME]&parent=localhost',
    chatRoomUrl: 'https://www.twitch.tv/embed/[USERNAME]/chat',
  }
};
