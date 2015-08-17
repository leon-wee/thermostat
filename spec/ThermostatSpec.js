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

  describe('default saving mode', function() {
    it('is off', function() {
      expect(thermostat.save_mode).toEqual('off')
    });
  });

  describe('change save mode', function() {
    it('switches save mode to on if off', function() {
      thermostat.save_mode = 'off'
      thermostat.change_save_mode()
      expect(thermostat.save_mode).toEqual('on')
    });
  });

  describe('change save mode', function() {
    it('switches save mode to off if on', function() {
      thermostat.save_mode = 'on'
      thermostat.change_save_mode()
      expect(thermostat.save_mode).toEqual('off')
    });
  });

  describe('maximum temperature', function() {
    it('when save mode is on', function() {
      thermostat.save_mode = 'on'
      thermostat.temperature = 25
      thermostat.up()
      expect(thermostat.temperature).toEqual(25)
    });
  });

  describe('maximum temperature', function() {
    it('when save mode is off', function() {
      thermostat.save_mode = 'off'
      thermostat.temperature = 32
      thermostat.up()
      expect(thermostat.temperature).toEqual(32)
    });
  });


});