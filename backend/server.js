module.exports = (apiWorker) => {
  return {
    serve: (req, res, next) => {
      if ('/featuredevents' == req.path) {
        apiWorker.login((data) => {
          data = JSON.parse(data);
          apiWorker.featuredevents(data.Permissions[0].AccountId, data.access_token, (data) => {
            res.setHeader('Content-Type', 'application/json');
            res.write(data);
            res.end();
          });
        })
      }
    }
  };
};
