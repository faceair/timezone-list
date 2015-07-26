var fs = require('fs');
var request = require('request');

request('https://raw.githubusercontent.com/moment/moment-timezone/master/data/meta/latest.json', function (err, res, data) {
  fs.writeFileSync('data.json', data);
})
