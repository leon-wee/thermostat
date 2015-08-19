var thermostat = new Thermostat();


var temperature = document.getElementsByTagName('span')[0];

var update = function() {
  temperature.innerHTML = thermostat.temperature;
  temperatureColor();
}

var temperatureColor = function() {
  temperature.classList.remove(temperature.className);
  temperature.classList.add(thermostat.colour());
}

update();

var up = document.getElementsByTagName('button')[0];
up.onclick = function up() {
  thermostat.up();
  update();
};

var down = document.getElementsByTagName('button')[1];
down.onclick = function() {
  thermostat.down();
  update();
};

var reset = document.getElementsByTagName('button')[2];
reset.onclick = function() {
  thermostat.reset_temperature();
  update();
};

var power_save = document.getElementsByTagName('button')[3];
power_save.onclick = function() {
  thermostat.change_save_mode();
  update();
};