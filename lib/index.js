'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (CodeMirror, opts = {}) {
  opts = _extends({ theme: 'default' }, opts);
  class Code extends _react2.default.Component {

    render() {
      const { className, children } = this.props;
      const language = className.split('-')[1] || '';
      const value = children[0] || '';
      const props = { value, inline: true, language, theme: opts.theme, codeMirror: CodeMirror };

      return _react2.default.createElement(_reactCodemirrorRunmode2.default, props);
    }
  }

  Code.propTypes = {
    className: _propTypes2.default.string,
    children: _propTypes2.default.node
  };
  return Code;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCodemirrorRunmode = require('react-codemirror-runmode');

var _reactCodemirrorRunmode2 = _interopRequireDefault(_reactCodemirrorRunmode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];