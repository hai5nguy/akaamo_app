const https = require('https');
const url = require('url');
const moment = require('moment');

module.exports = (accessKey) => {
  const caller = (requestUrl, method, authToken, callback) => {
    let headers = {};
    let buf = [];
    let restUrl = url.parse(requestUrl);
    let hostname = restUrl.hostname;
    let path = restUrl.pathname + restUrl.search;

    headers['Authorization'] = 'Bearer ' + authToken;

    const options = {
        hostname: hostname,
        method: method.toUpperCase(),
        path: path,
        headers: headers
    };

    const req = https.request(options, (res) => {
      res.setEncoding('utf8');

      res.on('data', (chunk) => {
        buf.push(chunk);
      });

      res.on('end', () => {
        callback(JSON.parse(buf.join('')));
      });

    });

    req.on('error', (e) => {
      console.error(`problem with request: ${e.message}`);
    });

    // write data to request body
    req.end();
  };
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
            callback(JSON.parse(buf.join('')));
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
      caller(
        'https://api.wildapricot.org/v2/Accounts/' + accountId + '/Events?includeEventDetails=true&$filter=Tags%20in%20featuredevent',
        'GET',
        authToken,
        callback
      );
    },

    calendarevents: (accountId, authToken, callback) => {
      caller(
        'https://api.wildapricot.org/v2/Accounts/' + accountId + '/Events?includeEventDetails=true&$filter=EndDate%20ge%20' + moment(Date.now()).format('YYYY-MM-DD'),
        'GET',
        authToken,
        callback
      );
    }
  };
};
