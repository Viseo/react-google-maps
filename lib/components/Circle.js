"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Circle = void 0;

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
 * A wrapper around `google.maps.Circle`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
 */
var Circle = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(Circle, _React$PureComponent);

  var _super = _createSuper(Circle);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
   */
  function Circle(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, Circle);
    _this = _super.call(this, props, context);
    var circle = new google.maps.Circle();
    (0, _MapChildHelper.construct)(Circle.propTypes, updaterMap, _this.props, circle);
    circle.setMap(_this.context[_constants.MAP]);
    _this.state = (0, _defineProperty2.default)({}, _constants.CIRCLE, circle);
    return _this;
  }

  (0, _createClass2.default)(Circle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.CIRCLE], eventMap);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.CIRCLE], eventMap, updaterMap, prevProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _MapChildHelper.componentWillUnmount)(this);
      var circle = this.state[_constants.CIRCLE];

      if (circle) {
        circle.setMap(null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return false;
    }
    /**
     * Gets the `LatLngBounds` of this Circle.
     * @type LatLngBounds
     * @public 
     */

  }, {
    key: "getBounds",
    value: function getBounds() {
      return this.state[_constants.CIRCLE].getBounds();
    }
    /**
     * Returns the center of this circle.
     * @type LatLng
     * @public 
     */

  }, {
    key: "getCenter",
    value: function getCenter() {
      return this.state[_constants.CIRCLE].getCenter();
    }
    /**
     * Returns whether this circle can be dragged by the user.
     * @type boolean
     * @public 
     */

  }, {
    key: "getDraggable",
    value: function getDraggable() {
      return this.state[_constants.CIRCLE].getDraggable();
    }
    /**
     * Returns whether this circle can be edited by the user.
     * @type boolean
     * @public 
     */

  }, {
    key: "getEditable",
    value: function getEditable() {
      return this.state[_constants.CIRCLE].getEditable();
    }
    /**
     * Returns the radius of this circle (in meters).
     * @type number
     * @public 
     */

  }, {
    key: "getRadius",
    value: function getRadius() {
      return this.state[_constants.CIRCLE].getRadius();
    }
    /**
     * Returns whether this circle is visible on the map.
     * @type boolean
     * @public 
     */

  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.state[_constants.CIRCLE].getVisible();
    }
  }]);
  return Circle;
}(_react.default.PureComponent);

exports.Circle = Circle;
Circle.propTypes = {
  /**
   * @type LatLng|LatLngLiteral
   */
  defaultCenter: _propTypes.default.any,

  /**
   * @type boolean
   */
  defaultDraggable: _propTypes.default.bool,

  /**
   * @type boolean
   */
  defaultEditable: _propTypes.default.bool,

  /**
   * @type CircleOptions
   */
  defaultOptions: _propTypes.default.any,

  /**
   * @type number
   */
  defaultRadius: _propTypes.default.number,

  /**
   * @type boolean
   */
  defaultVisible: _propTypes.default.bool,

  /**
   * @type LatLng|LatLngLiteral
   */
  center: _propTypes.default.any,

  /**
   * @type boolean
   */
  draggable: _propTypes.default.bool,

  /**
   * @type boolean
   */
  editable: _propTypes.default.bool,

  /**
   * @type CircleOptions
   */
  options: _propTypes.default.any,

  /**
   * @type number
   */
  radius: _propTypes.default.number,

  /**
   * @type boolean
   */
  visible: _propTypes.default.bool,

  /**
   * function
   */
  onDblClick: _propTypes.default.func,

  /**
   * function
   */
  onDragEnd: _propTypes.default.func,

  /**
   * function
   */
  onDragStart: _propTypes.default.func,

  /**
   * function
   */
  onMouseDown: _propTypes.default.func,

  /**
   * function
   */
  onMouseMove: _propTypes.default.func,

  /**
   * function
   */
  onMouseOut: _propTypes.default.func,

  /**
   * function
   */
  onMouseOver: _propTypes.default.func,

  /**
   * function
   */
  onMouseUp: _propTypes.default.func,

  /**
   * function
   */
  onRightClick: _propTypes.default.func,

  /**
   * function
   */
  onCenterChanged: _propTypes.default.func,

  /**
   * function
   */
  onClick: _propTypes.default.func,

  /**
   * function
   */
  onDrag: _propTypes.default.func,

  /**
   * function
   */
  onRadiusChanged: _propTypes.default.func
};
Circle.contextTypes = (0, _defineProperty2.default)({}, _constants.MAP, _propTypes.default.object);
var _default = Circle;
exports.default = _default;
var eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onCenterChanged: "center_changed",
  onClick: "click",
  onDrag: "drag",
  onRadiusChanged: "radius_changed"
};
var updaterMap = {
  center: function center(instance, _center) {
    instance.setCenter(_center);
  },
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable);
  },
  editable: function editable(instance, _editable) {
    instance.setEditable(_editable);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  radius: function radius(instance, _radius) {
    instance.setRadius(_radius);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  }
};