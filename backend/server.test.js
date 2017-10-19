const assert = require('assert');

const server = require('./server.js');
const oauthClient = require('./oauthClient.mock.js');

describe('Server', () => {
  describe('#routes()', () => {
    it('should return an events route', () => {
      assert(typeof server(oauthClient).routes().events, 'function');
    });
  });
});
