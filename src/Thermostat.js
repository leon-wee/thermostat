var Thermostat = function Thermostat() {
  this.temperature = 20
  this.save_mode = 'off'
};

Thermostat.prototype.up = function() {
  if (this.save_mode === 'on' && this.temperature === 25) {
    return this.temperature = 25
  }

  if (this.save_mode === 'off' && this.temperature === 32) {
    return this.temperature = 32
  }

  return ++this.temperature;
};

Thermostat.prototype.down = function() {
  if (this.temperature < 11) {
    return 10;
  }
  return --this.temperature;
};

Thermostat.prototype.change_save_mode = function() {
  if (this.save_mode === 'off') {
    return this.save_mode = 'on';
  }

  else {
    return this.save_mode = 'off'
  }
};

Thermostat.prototype.reset_temperature = function() {
  return this.temperature = 20
};