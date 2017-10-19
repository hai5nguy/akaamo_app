const moment = require('moment');
const fmt = "dddd, MMMM Do YYYY, h:mm:ss a";

module.exports = (evt) => {
  evt.StartDate = moment(evt.StartDate).format(fmt);
  evt.EndDate = moment(evt.EndDate).format(fmt);
  evt.singleDayEvent = evt.StartDate === evt.EndDate;

  return evt;
};
