"use strict";

var _deut = _interopRequireDefault(require("./deut"));

var _buildings = _interopRequireDefault(require("../models/buildings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Deut mine informations should be correctly return when', function () {
  it('Level 30 is given and universe speed is 5 and average temperature is 37', function () {
    var mine = _buildings["default"][3].base;
    var crystalMine = (0, _deut["default"])(mine, 30, 37, 5);
    expect(crystalMine).toEqual({
      production: 31721,
      energy: 10469,
      metal: 28762658,
      crystal: 9587552,
      deuterium: 0
    });
  });
  it('Level 32 is given and universe speed is 5 and average temperature is 138', function () {
    var mine = _buildings["default"][3].base;
    var crystalMine = (0, _deut["default"])(mine, 31, -138, 5);
    expect(crystalMine).toEqual({
      production: 56882,
      energy: 11900,
      metal: 43143988,
      crystal: 14381329,
      deuterium: 0
    });
  });
});