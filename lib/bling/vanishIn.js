'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils/utils');

var vanishIn = {
  '0%': {
    opacity: 0,
    transformOrigin: '50% 50%',
    transform: (0, _utils.scale)(2, 2),
    filter: (0, _utils.blur)('90px')
  },
  '100%': {
    opacity: 1,
    transformOrigin: '50% 50%',
    transform: (0, _utils.scale)(1, 1),
    filter: (0, _utils.blur)('0px')
  }
};
exports.default = vanishIn;