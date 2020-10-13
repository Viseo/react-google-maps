"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DrawingManager = void 0;

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
 * A wrapper around `google.maps.drawing.DrawingManager`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
 */
var DrawingManager = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(DrawingManager, _React$PureComponent);

  var _super = _createSuper(DrawingManager);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#DrawingManager
   */
  function DrawingManager(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, DrawingManager);
    _this = _super.call(this, props, context);
    (0, _invariant.default)(google.maps.drawing, "Did you include \"libraries=drawing\" in the URL?");
    var drawingManager = new google.maps.drawing.DrawingManager();
    (0, _MapChildHelper.construct)(DrawingManager.propTypes, updaterMap, _this.props, drawingManager);
    drawingManager.setMap(_this.context[_constants.MAP]);
    _this.state = (0, _defineProperty2.default)({}, _constants.DRAWING_MANAGER, drawingManager);
    return _this;
  }

  (0, _createClass2.default)(DrawingManager, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.DRAWING_MANAGER], eventMap);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.DRAWING_MANAGER], eventMap, updaterMap, prevProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _MapChildHelper.componentWillUnmount)(this);
      var drawingManager = this.state[_constants.DRAWING_MANAGER];

      if (drawingManager) {
        drawingManager.setMap(null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return false;
    }
    /**
     * Returns the `DrawingManager`'s drawing mode.
     * @type OverlayType optional
     * @public 
     */

  }, {
    key: "getDrawingMode",
    value: function getDrawingMode() {
      return this.state[_constants.DRAWING_MANAGER].getDrawingMode();
    }
  }]);
  return DrawingManager;
}(_react.default.PureComponent);

exports.DrawingManager = DrawingManager;
DrawingManager.propTypes = {
  /**
   * @type OverlayTypeoptional
   */
  defaultDrawingMode: _propTypes.default.any,

  /**
   * @type DrawingManagerOptions
   */
  defaultOptions: _propTypes.default.any,

  /**
   * @type OverlayTypeoptional
   */
  drawingMode: _propTypes.default.any,

  /**
   * @type DrawingManagerOptions
   */
  options: _propTypes.default.any,

  /**
   * function
   */
  onCircleComplete: _propTypes.default.func,

  /**
   * function
   */
  onMarkerComplete: _propTypes.default.func,

  /**
   * function
   */
  onOverlayComplete: _propTypes.default.func,

  /**
   * function
   */
  onPolygonComplete: _propTypes.default.func,

  /**
   * function
   */
  onPolylineComplete: _propTypes.default.func,

  /**
   * function
   */
  onRectangleComplete: _propTypes.default.func
};
DrawingManager.contextTypes = (0, _defineProperty2.default)({}, _constants.MAP, _propTypes.default.object);
var _default = DrawingManager;
exports.default = _default;
var eventMap = {
  onCircleComplete: "circlecomplete",
  onMarkerComplete: "markercomplete",
  onOverlayComplete: "overlaycomplete",
  onPolygonComplete: "polygoncomplete",
  onPolylineComplete: "polylinecomplete",
  onRectangleComplete: "rectanglecomplete"
};
var updaterMap = {
  drawingMode: function drawingMode(instance, _drawingMode) {
    instance.setDrawingMode(_drawingMode);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  }
};