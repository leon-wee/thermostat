describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('thermostat starts at', function() {
    it('20 degrees', function() {
      expect(thermostat.temperature).toEqual(20)
    });
  });

  describe('thermostat', function() {
    it('temperature will increment by 1', function() {
      thermostat.up()
      expect(thermostat.temperature).toEqual(21)
    });
  });

  describe('thermostat', function() {
    it('temperature will decrease by 1', function() {
      thermostat.down()
      expect(thermostat.temperature).toEqual(19)
    });
  });

  describe('thermostat', function() {
    it('temperature will not go below 10', function() {
      thermostat.temperature = 10
      thermostat.down()
      expect(thermostat.temperature).toEqual(10)
    });
  });


});