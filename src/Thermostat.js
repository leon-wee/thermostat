var Thermostat = function Thermostat() {
  this.temperature = 20
  this.save_mode = 'on'
  this.maximumOffTemperature = 25
  this.maximumOnTemperature = 32
  this.minimumTemperature = 11
  this.greenTemperature = 18
  this.orangeTemperature = 25
};

Thermostat.prototype.up = function() {
  if (this.save_mode === 'on' && this.temperature === this.maximumOffTemperature) {
    return this.temperature = this.maximumOffTemperature;
  }

  if (this.save_mode === 'off' && this.temperature === this.maximumOnTemperature) {
    return this.temperature = this.maximumOnTemperature;
  }

  return this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature < this.minimumTemperature) {
    return 10;
  }
  return this.temperature -= 1;
};

Thermostat.prototype.change_save_mode = function() {
  if (this.save_mode === 'off') {
    return this.save_mode = 'on';
  }

  else {
    return this.save_mode = 'off';
  }
};

Thermostat.prototype.reset_temperature = function() {
  return this.temperature = 20;
};

Thermostat.prototype.colour = function() {

  if (this.temperature < this.greenTemperature) {
    return 'green';
  }

  if (this.temperature < this.orangeTemperature) {
    return 'orange';
  }

  else {
    return 'red';
  }
};