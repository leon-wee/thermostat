$(document).ready(function() {
  var thermostat = new Thermostat();

  var getTemp = function() {
    $.getJSON("/temperature/" + thermostat.temperature, function(result) {
      $('span').html(result.temperature);
      thermostat.temperature = parseInt(result.temperature);
      temperatureColour();
    });
  };


  //{current_temp: thermostat.temperature});

  var sendTemp = function() {
    $.post('/temperature', {current_temp: thermostat.temperature});
  };

   // var getTemp = function() {
   //   $.getJSON("/temperature" , function(result) {
   //     $("span").text(result.temperature);
   //       thermostat.temperature = parseInt(result.temperature);
   //       temperatureColour();
   //   });
   // }


  function temperatureColour() {
    $('span').removeClass().addClass(thermostat.colour());
  };

  function update() {
    $('span').html(thermostat.temperature);
    temperatureColour();
  };



  getTemp();
  // sendTemp();
  // temperatureColour();


  // function update() {
  //   sendTemp();
  //   getTemp();
  // };

  // function displaysTemperature() {
  //   $('span').html(thermostat.temperature);
  // };

  // update();

  // getCurrentTemperature();

  $('.plus').click(function() {
    thermostat.up();
    update();
    sendTemp();
  });

  $('.minus').click(function() {
    thermostat.down();
    update();
    sendTemp();
  });

  $('.reset').click(function() {
    thermostat.reset_temperature();
    update();
    sendTemp();
  });

  $('.power').click(function() {
    thermostat.change_save_mode();
    update();
    sendTemp();
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