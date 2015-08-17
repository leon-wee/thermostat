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

var temperature = document.getElementById('temperature');
temperature.innerHTML = thermostat.temperature;
temperature.style.color = thermostat.colour();

var up = document.getElementById('up');
up.onclick = function up() {
  thermostat.up();
  temperature.innerHTML = thermostat.temperature;
  temperature.style.color = thermostat.colour();
};

var down = document.getElementById('down');
down.onclick = function() {
  thermostat.down();
  temperature.innerHTML = thermostat.temperature;
  temperature.style.color = thermostat.colour();
};

var reset = document.getElementById('reset');
reset.onclick = function() {
  thermostat.reset_temperature();
  temperature.innerHTML = thermostat.temperature;
  temperature.style.color = thermostat.colour();
};

var power_save = document.getElementById('mode')
mode.onchange = function() {
  thermostat.change_save_mode();
};