"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GroundOverlay = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _warning = _interopRequireDefault(require("warning"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * A wrapper around `google.maps.GroundOverlay`
 *
 * @see https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
 */
var GroundOverlay = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(GroundOverlay, _React$PureComponent);

  var _super = _createSuper(GroundOverlay);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#GroundOverlay
   */
  function GroundOverlay(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, GroundOverlay);
    _this = _super.call(this, props, context);
    (0, _warning.default)(!props.url || !props.bounds, "\nFor GroundOveray, url and bounds are passed in to constructor and are immutable\n after iinstantiated. This is the behavior of Google Maps JavaScript API v3 (\n See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay)\n Hence, use the corresponding two props provided by `react-google-maps`.\n They're prefixed with _default_ (defaultUrl, defaultBounds).\n\n In some cases, you'll need the GroundOverlay component to reflect the changes\n of url and bounds. You can leverage the React's key property to remount the\n component. Typically, just `key={url}` would serve your need.\n See https://github.com/tomchentw/react-google-maps/issues/655\n");
    var groundOverlay = new google.maps.GroundOverlay(props.defaultUrl || props.url, props.defaultBounds || props.bounds);
    (0, _MapChildHelper.construct)(GroundOverlay.propTypes, updaterMap, _this.props, groundOverlay);
    groundOverlay.setMap(_this.context[_constants.MAP]);
    _this.state = (0, _defineProperty2.default)({}, _constants.GROUND_LAYER, groundOverlay);
    return _this;
  }

  (0, _createClass2.default)(GroundOverlay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.GROUND_LAYER], eventMap);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.GROUND_LAYER], eventMap, updaterMap, prevProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _MapChildHelper.componentWillUnmount)(this);
      var GroundOverlay = this.state[_constants.GROUND_LAYER];

      if (GroundOverlay) {
        GroundOverlay.setMap(null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return false;
    }
    /**
     * Gets the `LatLngBounds` of this overlay.
     * @type LatLngBounds
     * @public 
     */

  }, {
    key: "getBounds",
    value: function getBounds() {
      return this.state[_constants.GROUND_LAYER].getBounds();
    }
    /**
     * Returns the opacity of this ground overlay.
     * @type number
     * @public 
     */

  }, {
    key: "getOpacity",
    value: function getOpacity() {
      return this.state[_constants.GROUND_LAYER].getOpacity();
    }
    /**
     * Gets the url of the projected image.
     * @type string
     * @public 
     */

  }, {
    key: "getUrl",
    value: function getUrl() {
      return this.state[_constants.GROUND_LAYER].getUrl();
    }
  }]);
  return GroundOverlay;
}(_react.default.PureComponent);

exports.GroundOverlay = GroundOverlay;
GroundOverlay.propTypes = {
  /**
   * @type string
   */
  defaultUrl: _propTypes.default.string
  /* v10.0.0 .isRequired */
  ,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
   */
  defaultBounds: _propTypes.default.object
  /* v10.0.0 .isRequired */
  ,

  /**
   * @type string
   * @deprecated use `defaultUrl` instead. It will be removed in v10.0.0
   */
  url: _propTypes.default.string,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
   * @deprecated use `defaultBounds` instead. It will be removed in v10.0.0
   */
  bounds: _propTypes.default.object,

  /**
   * @type number
   */
  defaultOpacity: _propTypes.default.number,

  /**
   * @type number
   */
  opacity: _propTypes.default.number,

  /**
   * function
   */
  onDblClick: _propTypes.default.func,

  /**
   * function
   */
  onClick: _propTypes.default.func
};
GroundOverlay.contextTypes = (0, _defineProperty2.default)({}, _constants.MAP, _propTypes.default.object);
var _default = GroundOverlay;
exports.default = _default;
var eventMap = {
  onDblClick: "dblclick",
  onClick: "click"
};
var updaterMap = {
  opacity: function opacity(instance, _opacity) {
    instance.setOpacity(_opacity);
  }
};