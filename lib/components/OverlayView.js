"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.OverlayView = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _lodash = _interopRequireDefault(require("lodash"));

var _invariant = _interopRequireDefault(require("invariant"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _OverlayViewHelper = require("../utils/OverlayViewHelper");

var _constants = require("../constants");

var _OverlayView$contextT;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * A wrapper around `google.maps.OverlayView`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
 */
var OverlayView = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(OverlayView, _React$PureComponent);

  var _super = _createSuper(OverlayView);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  function OverlayView(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, OverlayView);
    _this = _super.call(this, props, context);
    var overlayView = new google.maps.OverlayView(); // You must implement three methods: onAdd(), draw(), and onRemove().

    overlayView.onAdd = _lodash.default.bind(_this.onAdd, (0, _assertThisInitialized2.default)(_this));
    overlayView.draw = _lodash.default.bind(_this.draw, (0, _assertThisInitialized2.default)(_this));
    overlayView.onRemove = _lodash.default.bind(_this.onRemove, (0, _assertThisInitialized2.default)(_this));
    _this.onPositionElement = _lodash.default.bind(_this.onPositionElement, (0, _assertThisInitialized2.default)(_this)); // You must call setMap() with a valid Map object to trigger the call to
    // the onAdd() method and setMap(null) in order to trigger the onRemove() method.

    overlayView.setMap(_this.context[_constants.MAP]);
    _this.state = (0, _defineProperty2.default)({}, _constants.OVERLAY_VIEW, overlayView);
    return _this;
  }

  (0, _createClass2.default)(OverlayView, [{
    key: "onAdd",
    value: function onAdd() {
      this.containerElement = document.createElement("div");
      this.containerElement.style.position = "absolute";
    }
  }, {
    key: "draw",
    value: function draw() {
      var mapPaneName = this.props.mapPaneName;
      (0, _invariant.default)(!!mapPaneName, "OverlayView requires either props.mapPaneName or props.defaultMapPaneName but got %s", mapPaneName); // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapPanes

      var mapPanes = this.state[_constants.OVERLAY_VIEW].getPanes();

      mapPanes[mapPaneName].appendChild(this.containerElement);

      _reactDom.default.unstable_renderSubtreeIntoContainer(this, _react.default.Children.only(this.props.children), this.containerElement, this.onPositionElement);
    }
  }, {
    key: "onPositionElement",
    value: function onPositionElement() {
      // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapCanvasProjection
      var mapCanvasProjection = this.state[_constants.OVERLAY_VIEW].getProjection();

      var offset = _objectSpread({
        x: 0,
        y: 0
      }, (0, _OverlayViewHelper.getOffsetOverride)(this.containerElement, this.props));

      var layoutStyles = (0, _OverlayViewHelper.getLayoutStyles)(mapCanvasProjection, offset, this.props);

      _lodash.default.assign(this.containerElement.style, layoutStyles);
    }
  }, {
    key: "onRemove",
    value: function onRemove() {
      this.containerElement.parentNode.removeChild(this.containerElement);

      _reactDom.default.unmountComponentAtNode(this.containerElement);

      this.containerElement = null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.OVERLAY_VIEW], eventMap);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.OVERLAY_VIEW], eventMap, updaterMap, prevProps);

      _lodash.default.delay(this.state[_constants.OVERLAY_VIEW].draw);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _MapChildHelper.componentWillUnmount)(this);
      var overlayView = this.state[_constants.OVERLAY_VIEW];

      if (overlayView) {
        overlayView.setMap(null); // You must implement three methods: onAdd(), draw(), and onRemove().

        overlayView.onAdd = null;
        overlayView.draw = null;
        overlayView.onRemove = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return false;
    }
    /**
     * Returns the panes in which this OverlayView can be rendered. The panes are not initialized until `onAdd` is called by the API.
     * @type MapPanes optional
     * @public 
     */

  }, {
    key: "getPanes",
    value: function getPanes() {
      return this.state[_constants.OVERLAY_VIEW].getPanes();
    }
    /**
     * Returns the `MapCanvasProjection` object associated with this `OverlayView`. The projection is not initialized until `onAdd` is called by the API.
     * @type MapCanvasProjection
     * @public 
     */

  }, {
    key: "getProjection",
    value: function getProjection() {
      return this.state[_constants.OVERLAY_VIEW].getProjection();
    }
  }]);
  return OverlayView;
}(_react.default.PureComponent);

exports.OverlayView = OverlayView;
OverlayView.FLOAT_PANE = "floatPane";
OverlayView.MAP_PANE = "mapPane";
OverlayView.MARKER_LAYER = "markerLayer";
OverlayView.OVERLAY_LAYER = "overlayLayer";
OverlayView.OVERLAY_MOUSE_TARGET = "overlayMouseTarget";
OverlayView.propTypes = {
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  mapPaneName: _propTypes.default.string,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  position: _propTypes.default.object,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  bounds: _propTypes.default.object,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  children: _propTypes.default.node.isRequired,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  getPixelPositionOffset: _propTypes.default.func
};
OverlayView.contextTypes = (_OverlayView$contextT = {}, (0, _defineProperty2.default)(_OverlayView$contextT, _constants.MAP, _propTypes.default.object), (0, _defineProperty2.default)(_OverlayView$contextT, _constants.ANCHOR, _propTypes.default.object), _OverlayView$contextT);
var _default = OverlayView;
exports.default = _default;
var eventMap = {};
var updaterMap = {};