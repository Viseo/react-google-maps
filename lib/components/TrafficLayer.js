"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TrafficLayer = void 0;

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
 * A wrapper around `google.maps.TrafficLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#TrafficLayer
 */
var TrafficLayer = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(TrafficLayer, _React$PureComponent);

  var _super = _createSuper(TrafficLayer);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#TrafficLayer
   */
  function TrafficLayer(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, TrafficLayer);
    _this = _super.call(this, props, context);
    var trafficLayer = new google.maps.TrafficLayer();
    (0, _MapChildHelper.construct)(TrafficLayer.propTypes, updaterMap, _this.props, trafficLayer);
    trafficLayer.setMap(_this.context[_constants.MAP]);
    _this.state = (0, _defineProperty2.default)({}, _constants.TRAFFIC_LAYER, trafficLayer);
    return _this;
  }

  (0, _createClass2.default)(TrafficLayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.TRAFFIC_LAYER], eventMap);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.TRAFFIC_LAYER], eventMap, updaterMap, prevProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _MapChildHelper.componentWillUnmount)(this);
      var trafficLayer = this.state[_constants.TRAFFIC_LAYER];

      if (trafficLayer) {
        trafficLayer.setMap(null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return false;
    }
  }]);
  return TrafficLayer;
}(_react.default.PureComponent);

exports.TrafficLayer = TrafficLayer;
TrafficLayer.propTypes = {
  /**
   * @type TrafficLayerOptions
   */
  defaultOptions: _propTypes.default.any,

  /**
   * @type TrafficLayerOptions
   */
  options: _propTypes.default.any
};
TrafficLayer.contextTypes = (0, _defineProperty2.default)({}, _constants.MAP, _propTypes.default.object);
var _default = TrafficLayer;
exports.default = _default;
var eventMap = {};
var updaterMap = {
  options: function options(instance, _options) {
    instance.setOptions(_options);
  }
};