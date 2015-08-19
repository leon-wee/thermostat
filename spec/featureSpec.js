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

});