const eventTransformer = require('./transform/event');
const eventsFilter = (events) => {
  let arr = [];
  events.forEach((evt) => {
    if ('Public' === evt.AccessLevel) {
      arr.push(eventTransformer(evt));
    }
  });
  return arr;
};

module.exports = (apiWorker) => {
  return {
    serve: (req, res, next) => {
      if ('/featuredevents' == req.path) {
        apiWorker.login((data) => {
          apiWorker.featuredevents(data.Permissions[0].AccountId, data.access_token, (data) => {
            data.Events = eventsFilter(data.Events);
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(data));
            res.end();
          });
        })
      }

      if ('/calendarevents' == req.path) {
        apiWorker.login((data) => {
          apiWorker.calendarevents(data.Permissions[0].AccountId, data.access_token, (data) => {
            data.Events = eventsFilter(data.Events);
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(data));
            res.end();
          });
        })
      }
    }
  };
};
