"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BicyclingLayer = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * A wrapper around `google.maps.BicyclingLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#BicyclingLayer
 */
var BicyclingLayer = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(BicyclingLayer, _React$PureComponent);

  var _super = _createSuper(BicyclingLayer);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#BicyclingLayer
   */
  function BicyclingLayer(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, BicyclingLayer);
    _this = _super.call(this, props, context);
    var bicyclingLayer = new google.maps.BicyclingLayer();
    (0, _MapChildHelper.construct)(BicyclingLayer.propTypes, updaterMap, _this.props, bicyclingLayer);
    bicyclingLayer.setMap(_this.context[_constants.MAP]);
    _this.state = (0, _defineProperty2.default)({}, _constants.BICYCLING_LAYER, bicyclingLayer);
    return _this;
  }

  (0, _createClass2.default)(BicyclingLayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.BICYCLING_LAYER], eventMap);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.BICYCLING_LAYER], eventMap, updaterMap, prevProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _MapChildHelper.componentWillUnmount)(this);
      var bicyclingLayer = this.state[_constants.BICYCLING_LAYER];

      if (bicyclingLayer) {
        bicyclingLayer.setMap(null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return false;
    }
  }]);
  return BicyclingLayer;
}(_react.default.PureComponent);

exports.BicyclingLayer = BicyclingLayer;
BicyclingLayer.propTypes = {};
BicyclingLayer.contextTypes = (0, _defineProperty2.default)({}, _constants.MAP, _propTypes.default.object);
var _default = BicyclingLayer;
exports.default = _default;
var eventMap = {};
var updaterMap = {};