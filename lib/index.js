var data = require('./data.json');

exports.getTimezones = function () {
  return Object.keys(data.zones);
};

