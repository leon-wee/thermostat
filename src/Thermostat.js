var Thermostat = function Thermostat() {
  this.temperature = 20
  this.save_mode = 'on'
  this.maximumOffTemperature = 25
  this.maximumOnTemperature = 32
  this.minimumTemperature = 10
  this.greenTemperature = 18
  this.orangeTemperature = 25
};

Thermostat.prototype.up = function() {
  if (this._saveModeIsOff()) {
    return this.temperature = this.maximumOffTemperature;
  }
  return this._saveModeIsOn() ? this.temperature = this.maximumOnTemperature : this.temperature += 1;
};

Thermostat.prototype.down = function() {
  return this._belowMinimumTemp() ? 10 : this.temperature -= 1;
};

Thermostat.prototype.change_save_mode = function() {
  if (this._aboveMaximumOffTemp()) {
    this.temperature = 25
  }
  return (this.save_mode === 'off') ? this.save_mode = 'on' : this.save_mode = 'off';
};

Thermostat.prototype.reset_temperature = function() {
  this.temperature = 20;
};

Thermostat.prototype.colour = function() {
  if (this.temperature < this.greenTemperature) {
    return 'text--green';
  }
  return (this.temperature < this.orangeTemperature) ? 'text--orange' : 'text--red';
};


Thermostat.prototype._saveModeIsOff = function() {
  return this.save_mode === 'on' && this.temperature === this.maximumOffTemperature
};

Thermostat.prototype._saveModeIsOn = function() {
  return this.save_mode === 'off' && this.temperature === this.maximumOnTemperature
};

Thermostat.prototype._belowMinimumTemp = function() {
  return this.temperature <= this.minimumTemperature;
};

Thermostat.prototype._aboveMaximumOffTemp = function() {
  return this.temperature > this.maximumOffTemperature;
};





