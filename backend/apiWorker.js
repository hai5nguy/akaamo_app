const https = require('https');

module.exports = (accessKey) => {
  return {
    login: (callback) => {
      let data = 'grant_type=client_credentials&scope=auto';
      let headers = {};
      let buf = [];

        headers['Authorization'] = 'Basic ' + accessKey;
        headers['Content-Type'] = 'application/x-www-form-urlencoded';

        const options = {
            hostname: 'oauth.wildapricot.org',
            method: 'POST',
            path: '/auth/token',
            headers: headers
        };

        const req = https.request(options, (res) => {
          res.setEncoding('utf8');

          res.on('data', (chunk) => {
            buf.push(chunk);
          });

          res.on('end', () => {
            callback(buf.join(''));
          });

        });

      req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
      });

      // write data to request body
      req.write(data);
      req.end();
    },
    featuredevents: (accountId, authToken, callback) => {

      let headers = {};
      let buf = [];

        headers['Authorization'] = 'Bearer ' + authToken;

        const options = {
            hostname: 'api.wildapricot.org',
            method: 'GET',
            path: '/v2/Accounts/'+ accountId +'/Events?$filter=Tags%20in%20featuredevent',
            headers: headers
        };

        const req = https.request(options, (res) => {
          res.setEncoding('utf8');

          res.on('data', (chunk) => {
            buf.push(chunk);
          });

          res.on('end', () => {
            callback(buf.join(''));
          });

        });

      req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
      });

      // write data to request body
      req.end();
    }
  };
};
