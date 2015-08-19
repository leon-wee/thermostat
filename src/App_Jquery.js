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

  // $('span').html(thermostat.temperature)




});