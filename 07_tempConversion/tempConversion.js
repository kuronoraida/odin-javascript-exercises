const convertToCelsius = function(input) {
  input = ((input - 32) * (5 / 9));
  return Math.round(input * 10) / 10;
};

const convertToFahrenheit = function(input) {
  input = (input * (9 / 5) + 32);
  return Math.round(input * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
