"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HeatmapLayer = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _invariant = _interopRequireDefault(require("invariant"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../../utils/MapChildHelper");

var _constants = require("../../constants");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * A wrapper around `google.maps.visualization.HeatmapLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
 */
var HeatmapLayer = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(HeatmapLayer, _React$PureComponent);

  var _super = _createSuper(HeatmapLayer);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#HeatmapLayer
   */
  function HeatmapLayer(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, HeatmapLayer);
    _this = _super.call(this, props, context);
    (0, _invariant.default)(google.maps.visualization, "Did you include \"libraries=visualization\" in the URL?");
    var heatmapLayer = new google.maps.visualization.HeatmapLayer();
    (0, _MapChildHelper.construct)(HeatmapLayer.propTypes, updaterMap, _this.props, heatmapLayer);
    heatmapLayer.setMap(_this.context[_constants.MAP]);
    _this.state = (0, _defineProperty2.default)({}, _constants.HEATMAP_LAYER, heatmapLayer);
    return _this;
  }

  (0, _createClass2.default)(HeatmapLayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.HEATMAP_LAYER], eventMap);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.HEATMAP_LAYER], eventMap, updaterMap, prevProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _MapChildHelper.componentWillUnmount)(this);
      var heatmapLayer = this.state[_constants.HEATMAP_LAYER];

      if (heatmapLayer) {
        heatmapLayer.setMap(null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return false;
    }
    /**
     * Returns the data points currently displayed by this heatmap.
     * @type MVCArray<LatLng|WeightedLocation>
     * @public 
     */

  }, {
    key: "getData",
    value: function getData() {
      return this.state[_constants.HEATMAP_LAYER].getData();
    }
  }]);
  return HeatmapLayer;
}(_react.default.PureComponent);

exports.HeatmapLayer = HeatmapLayer;
HeatmapLayer.propTypes = {
  /**
   * @type MVCArray<LatLng|WeightedLocation>|Array<LatLng|WeightedLocation>
   */
  defaultData: _propTypes.default.any,

  /**
   * @type HeatmapLayerOptions
   */
  defaultOptions: _propTypes.default.any,

  /**
   * @type MVCArray<LatLng|WeightedLocation>|Array<LatLng|WeightedLocation>
   */
  data: _propTypes.default.any,

  /**
   * @type HeatmapLayerOptions
   */
  options: _propTypes.default.any
};
HeatmapLayer.contextTypes = (0, _defineProperty2.default)({}, _constants.MAP, _propTypes.default.object);
var _default = HeatmapLayer;
exports.default = _default;
var eventMap = {};
var updaterMap = {
  data: function data(instance, _data) {
    instance.setData(_data);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  }
};