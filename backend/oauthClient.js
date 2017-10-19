const oauth = require('oauth');
const apiKey = '';

module.exports = (apiKey) => {
  apiKey = apiKey;

  return () => {
    return {
      login: () => {

      },
      refreshToken: () => {

      }
    };
  };
};
