$(document).ready(function() {
  var thermostat = new Thermostat();

  function temperatureColour() {
    $('span').removeClass().addClass(thermostat.colour());
  };


  function update() {
    $('span').html(thermostat.temperature);
    temperatureColour();
  };

  update();

  $('.plus').click(function() {
    thermostat.up();
    update();
  });

  $('.minus').click(function() {
    thermostat.down();
    update();
  });

  $('.reset').click(function() {
    thermostat.reset_temperature();
    update();
  });

  $('.power').click(function() {
    thermostat.change_save_mode();
    update();
  });

  // $('span').html(thermostat.temperature)




});