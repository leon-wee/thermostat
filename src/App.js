var thermostat = new Thermostat();

// TemperatureColour = function() {
//   if (thermostat.temperature < 18) {
//     temperature.style.color = thermostat.colour();
//   }

//   else if (thermostat.temperature < 25) {
//     temperature.style.color = thermostat.colour();
//   }

//   else {
//     temperature.style.color = thermostat.colour();
//   }
// }

var temperature = document.getElementsByTagName('span')[0];
temperature.innerHTML = thermostat.temperature;
temperature.style.color = thermostat.colour();

var up = document.getElementsByTagName('button')[0];
up.onclick = function up() {
  thermostat.up();
  temperature.innerHTML = thermostat.temperature;
  temperature.style.color = thermostat.colour();
};

var down = document.getElementsByTagName('button')[1];
down.onclick = function() {
  thermostat.down();
  temperature.innerHTML = thermostat.temperature;
  temperature.style.color = thermostat.colour();
};

var reset = document.getElementsByTagName('button')[2];
reset.onclick = function() {
  thermostat.reset_temperature();
  temperature.innerHTML = thermostat.temperature;
  temperature.style.color = thermostat.colour();
};

var power_save = document.getElementsByTagName('button')[3];
power_save.onclick = function() {
  thermostat.change_save_mode();
  temperature.innerHTML = thermostat.temperature;
};