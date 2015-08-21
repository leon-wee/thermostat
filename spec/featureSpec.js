describe('Thermostat feature tests',function(){
var thermostat = new Thermostat();

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index2.html');
    $.holdReady(false);
  });

  it('displays default temperature', function(){
    expect('span').toContainText(thermostat.temperature);
  });

  it('increases temperature', function() {
    $('.plus').click();
    expect('span').toContainText(thermostat.temperature + 1)
  });

  it('decreases temperature', function() {
    $('.minus').click();
    expect('span').toContainText(thermostat.temperature - 1)
  });

  it('resets', function() {
    $('.plus').click();
    $('.reset').click();
    expect('span').toContainText(20)
  });

  it('maximum temperature is 25 when off', function() {
    for (var i = 0; i < 7; i++) {
      $('.plus').click();
    }
    expect('span').toContainText(25)
  });

  it('maximum temperature is 32 when on', function() {
    $('.power').click();
    for(var i = 0; i < 15; i++) {
      $('.plus').click();
    }
    expect('span').toContainText(32)
  });

  it('minimum temperature is 10', function() {
    for(var i = 0; i < 13; i++) {
      $('.minus').click();
    }
    expect('span').toContainText(10)
  });

  it('starts default color orange', function() {
    expect('span').toHaveClass("text--orange");
  });

  it('changes color to green', function() {
    for(var i = 0; i < 5; i++) {
      $('.minus').click();
    }
    expect('span').toHaveClass("text--green");
  });

  it('changes color to red', function() {
    for(var i = 0; i < 7; i++) {
      $('.plus').click();
    }
    expect('span').toHaveClass("text--red");
  });

  describe('should call weather API', function() {
    it('expects the city to be displayed', function() {
      $('.city').val('London');
      $('.getWeather').click();
      expect($('.city_display').html()).toEqual('London');
    });

    it('specifying response when you need it', function() {
      spyOn($, "getJSON").and.callFake(function(url, callback) {
        callback({"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],"main":{"temp":20.28,"pressure":1021,"humidity":77,"temp_min":18,"temp_max":22.22}});
      });
      $('.city').val('London');
      $('.getWeather').click();
      expect($.getJSON).toHaveBeenCalled();
      expect($('.weather').html()).toEqual('light intensity drizzle');
    });

    it('should display city temperature from API', function() {
      spyOn($, "getJSON").and.callFake(function(url, callback) {
        // callback( {"main":{"temp": 20}, "weather": [{}]} );
        callback({"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],"main":{"temp":20.28,"pressure":1021,"humidity":77,"temp_min":18,"temp_max":22.22}});
      });
      $('.city').val('London');
      $('.getWeather').click();
      expect($.getJSON).toHaveBeenCalled();
      expect('.city_temperature').toContainText(20);
    });

  });





});