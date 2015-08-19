$(document).ready(function() {
  var thermostat = new Thermostat();

  function update() {
    $('span').html(thermostat.temperature);
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
  });

  // $('span').html(thermostat.temperature)




});