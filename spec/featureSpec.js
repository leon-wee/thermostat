describe('Thermostat',function(){
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

  it('expects the city to be displayed', function() {
    // spyOn($, "getJSON")
    // $('input:text').val('London');
    // // var event = jQuery.Event("keypress");
    // // event.which = 13;
    // // $('input:text').trigger(event);
    // $('.getWeather').click();
    // expect($.getJSON).toHaveBeenCalled();
    // expect('.weather').toContainText('London');
    $('.city').val('London');
    $('.getWeather').click();
    // runs(function() {
    //   flag = false;
    //   value = 0;
    //   intId = setInterval(function() {
    //     console.log(value);
    //     if (++value == 3) { clearInterval(intId); flag = true; }
    //   }, 500);
    // });

    // waitsFor(function() {
    //   return flag;
    // }, "The Value should be incremented", 5000);

    // runs(function() {
    //   expect(value).toEqual(4); //this will fail
    // });
    expect('.city_display').toContainText('London');
  });



});