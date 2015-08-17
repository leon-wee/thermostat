var Thermostat = function Thermostat() {
  this.temperature = 20
};

Thermostat.prototype.up = function() {
  return ++this.temperature;
};

Thermostat.prototype.down = function() {
  if (this.temperature < 11) {
    return 10
  }
  return --this.temperature;
};