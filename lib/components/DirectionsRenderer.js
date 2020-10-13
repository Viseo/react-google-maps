"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DirectionsRenderer = void 0;

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
 * A wrapper around `google.maps.DirectionsRenderer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
 */
var DirectionsRenderer = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(DirectionsRenderer, _React$PureComponent);

  var _super = _createSuper(DirectionsRenderer);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
   */
  function DirectionsRenderer(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, DirectionsRenderer);
    _this = _super.call(this, props, context);
    var directionsRenderer = new google.maps.DirectionsRenderer();
    (0, _MapChildHelper.construct)(DirectionsRenderer.propTypes, updaterMap, _this.props, directionsRenderer);
    directionsRenderer.setMap(_this.context[_constants.MAP]);
    _this.state = (0, _defineProperty2.default)({}, _constants.DIRECTIONS_RENDERER, directionsRenderer);
    return _this;
  }

  (0, _createClass2.default)(DirectionsRenderer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.DIRECTIONS_RENDERER], eventMap);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.DIRECTIONS_RENDERER], eventMap, updaterMap, prevProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _MapChildHelper.componentWillUnmount)(this);
      var directionsRenderer = this.state[_constants.DIRECTIONS_RENDERER];

      if (directionsRenderer) {
        directionsRenderer.setMap(null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return false;
    }
    /**
     * Returns the renderer's current set of directions.
     * @type DirectionsResult
     * @public 
     */

  }, {
    key: "getDirections",
    value: function getDirections() {
      return this.state[_constants.DIRECTIONS_RENDERER].getDirections();
    }
    /**
     * Returns the panel `<div>` in which the `DirectionsResult` is rendered.
     * @type Node
     * @public 
     */

  }, {
    key: "getPanel",
    value: function getPanel() {
      return this.state[_constants.DIRECTIONS_RENDERER].getPanel();
    }
    /**
     * Returns the current (zero-based) route index in use by this `DirectionsRenderer` object.
     * @type number
     * @public 
     */

  }, {
    key: "getRouteIndex",
    value: function getRouteIndex() {
      return this.state[_constants.DIRECTIONS_RENDERER].getRouteIndex();
    }
  }]);
  return DirectionsRenderer;
}(_react.default.PureComponent);

exports.DirectionsRenderer = DirectionsRenderer;
DirectionsRenderer.propTypes = {
  /**
   * @type DirectionsResult
   */
  defaultDirections: _propTypes.default.any,

  /**
   * @type DirectionsRendererOptions
   */
  defaultOptions: _propTypes.default.any,

  /**
   * @type Node
   */
  defaultPanel: _propTypes.default.any,

  /**
   * @type number
   */
  defaultRouteIndex: _propTypes.default.number,

  /**
   * @type DirectionsResult
   */
  directions: _propTypes.default.any,

  /**
   * @type DirectionsRendererOptions
   */
  options: _propTypes.default.any,

  /**
   * @type Node
   */
  panel: _propTypes.default.any,

  /**
   * @type number
   */
  routeIndex: _propTypes.default.number,

  /**
   * function
   */
  onDirectionsChanged: _propTypes.default.func
};
DirectionsRenderer.contextTypes = (0, _defineProperty2.default)({}, _constants.MAP, _propTypes.default.object);
var _default = DirectionsRenderer;
exports.default = _default;
var eventMap = {
  onDirectionsChanged: "directions_changed"
};
var updaterMap = {
  directions: function directions(instance, _directions) {
    instance.setDirections(_directions);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  panel: function panel(instance, _panel) {
    instance.setPanel(_panel);
  },
  routeIndex: function routeIndex(instance, _routeIndex) {
    instance.setRouteIndex(_routeIndex);
  }
};