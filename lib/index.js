var data = require('./data.json');

module.exports = {
  getTimezones: function () {
    return Object.keys(data.zones);
  },

  getCountriesAbbr: function () {
    return Object.keys(data.countries);
  },

  getCountries: function () {
    var countryNames = [];
    for(var el in data.countries)
      countryNames.push(data.countries[el].name);
    return countryNames;
  },

  getZoneByCountry: function (country) {
    for(var el in data.countries)
      if(data.countries[el].name === country)
        return data.countries[el].zones;
    return [];
  }
};