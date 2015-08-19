$(document).ready(function() {
  $(".getWeather").click(function() {

    var city = $("input:text").val();
    weatherInfo(city);
    displayCity(city);
  });


  function weatherInfo(city) {
    $.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&mode=json&units=metric&cnt=10", function(weather_info) {
      console.log(weather_info);
      showWeather(weather_info);
      showTemperature(weather_info);
    });
  }

  function showWeather(weather_info) {
    $(".weather").html(weather_info.list[0].weather[0].description)
  };

  function showTemperature(weather_info) {
    $(".city_temperature").html(Math.round(weather_info.list[0].temp.day));
  };

  function displayCity(city) {
    $('.city_display').html(city);
  };


  $('input:text').keypress(function(event) {
    if (event.keyCode == 13) {
      $('input:submit').click();
      $('input:text').val('');
    }
  });

});


