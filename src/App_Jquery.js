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

  $(".getWeather").click(function() {

    var city = $("input:text").val();
    weatherInfo(city);
    displayCity(city);
  });


  function weatherInfo(city) {
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ city + "&mode=json&units=metric", function(weather_info) {
      console.log(weather_info);
      showWeather(weather_info);
      showTemperature(weather_info);
    });
  }

  function showWeather(weather_info) {
    $(".weather").html(weather_info.weather[0].description)
  };

  function showTemperature(weather_info) {
    $(".city_temperature").html(Math.round(weather_info.main.temp) + '&#8451');
  };

  function displayCity(city) {
    $('.city_display').html(city);
  };


  $('input:text').keypress(function(event) {
    if (event.keyCode == 13) {
      $('.getWeather').click();
      $('input:text').val('');
    }
  });

  // function getCurrentTemperature() {
  //   $.getJSON("http://localhost:9292/temperature/" + thermostat.temperature, function(remoteTemperature) {
  //     console.log(remoteTemperature);
  //   });
  // }



});