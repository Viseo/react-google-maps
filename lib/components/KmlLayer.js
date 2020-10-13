"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.KmlLayer = void 0;

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
 * A wrapper around `google.maps.KmlLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
 */
var KmlLayer = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(KmlLayer, _React$PureComponent);

  var _super = _createSuper(KmlLayer);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
   */
  function KmlLayer(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, KmlLayer);
    _this = _super.call(this, props, context);
    var kmlLayer = new google.maps.KmlLayer();
    (0, _MapChildHelper.construct)(KmlLayer.propTypes, updaterMap, _this.props, kmlLayer);
    kmlLayer.setMap(_this.context[_constants.MAP]);
    _this.state = (0, _defineProperty2.default)({}, _constants.KML_LAYER, kmlLayer);
    return _this;
  }

  (0, _createClass2.default)(KmlLayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.KML_LAYER], eventMap);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.KML_LAYER], eventMap, updaterMap, prevProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _MapChildHelper.componentWillUnmount)(this);
      var kmlLayer = this.state[_constants.KML_LAYER];

      if (kmlLayer) {
        kmlLayer.setMap(null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return false;
    }
    /**
     * Get the default viewport for the layer being displayed.
     * @type LatLngBounds
     * @public 
     */

  }, {
    key: "getDefaultViewport",
    value: function getDefaultViewport() {
      return this.state[_constants.KML_LAYER].getDefaultViewport();
    }
    /**
     * Get the metadata associated with this layer, as specified in the layer markup.
     * @type KmlLayerMetadata
     * @public 
     */

  }, {
    key: "getMetadata",
    value: function getMetadata() {
      return this.state[_constants.KML_LAYER].getMetadata();
    }
    /**
     * Get the status of the layer, set once the requested document has loaded.
     * @type KmlLayerStatus
     * @public 
     */

  }, {
    key: "getStatus",
    value: function getStatus() {
      return this.state[_constants.KML_LAYER].getStatus();
    }
    /**
     * Gets the URL of the KML file being displayed.
     * @type string
     * @public 
     */

  }, {
    key: "getUrl",
    value: function getUrl() {
      return this.state[_constants.KML_LAYER].getUrl();
    }
    /**
     * Gets the z-index of the KML Layer.
     * @type number
     * @public 
     */

  }, {
    key: "getZIndex",
    value: function getZIndex() {
      return this.state[_constants.KML_LAYER].getZIndex();
    }
  }]);
  return KmlLayer;
}(_react.default.PureComponent);

exports.KmlLayer = KmlLayer;
KmlLayer.propTypes = {
  /**
   * @type KmlLayerOptions
   */
  defaultOptions: _propTypes.default.any,

  /**
   * @type string
   */
  defaultUrl: _propTypes.default.string,

  /**
   * @type number
   */
  defaultZIndex: _propTypes.default.number,

  /**
   * @type KmlLayerOptions
   */
  options: _propTypes.default.any,

  /**
   * @type string
   */
  url: _propTypes.default.string,

  /**
   * @type number
   */
  zIndex: _propTypes.default.number,

  /**
   * function
   */
  onDefaultViewportChanged: _propTypes.default.func,

  /**
   * function
   */
  onClick: _propTypes.default.func,

  /**
   * function
   */
  onStatusChanged: _propTypes.default.func
};
KmlLayer.contextTypes = (0, _defineProperty2.default)({}, _constants.MAP, _propTypes.default.object);
var _default = KmlLayer;
exports.default = _default;
var eventMap = {
  onDefaultViewportChanged: "defaultviewport_changed",
  onClick: "click",
  onStatusChanged: "status_changed"
};
var updaterMap = {
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  url: function url(instance, _url) {
    instance.setUrl(_url);
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex);
  }
};