"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Rectangle = void 0;

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
 * A wrapper around `google.maps.Rectangle`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
 */
var Rectangle = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(Rectangle, _React$PureComponent);

  var _super = _createSuper(Rectangle);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
   */
  function Rectangle(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, Rectangle);
    _this = _super.call(this, props, context);
    var rectangle = new google.maps.Rectangle();
    (0, _MapChildHelper.construct)(Rectangle.propTypes, updaterMap, _this.props, rectangle);
    rectangle.setMap(_this.context[_constants.MAP]);
    _this.state = (0, _defineProperty2.default)({}, _constants.RECTANGLE, rectangle);
    return _this;
  }

  (0, _createClass2.default)(Rectangle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.RECTANGLE], eventMap);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.RECTANGLE], eventMap, updaterMap, prevProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _MapChildHelper.componentWillUnmount)(this);
      var rectangle = this.state[_constants.RECTANGLE];

      if (rectangle) {
        rectangle.setMap(null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return false;
    }
    /**
     * Returns the bounds of this rectangle.
     * @type LatLngBounds
     * @public 
     */

  }, {
    key: "getBounds",
    value: function getBounds() {
      return this.state[_constants.RECTANGLE].getBounds();
    }
    /**
     * Returns whether this rectangle can be dragged by the user.
     * @type boolean
     * @public 
     */

  }, {
    key: "getDraggable",
    value: function getDraggable() {
      return this.state[_constants.RECTANGLE].getDraggable();
    }
    /**
     * Returns whether this rectangle can be edited by the user.
     * @type boolean
     * @public 
     */

  }, {
    key: "getEditable",
    value: function getEditable() {
      return this.state[_constants.RECTANGLE].getEditable();
    }
    /**
     * Returns whether this rectangle is visible on the map.
     * @type boolean
     * @public 
     */

  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.state[_constants.RECTANGLE].getVisible();
    }
  }]);
  return Rectangle;
}(_react.default.PureComponent);

exports.Rectangle = Rectangle;
Rectangle.propTypes = {
  /**
   * @type LatLngBounds|LatLngBoundsLiteral
   */
  defaultBounds: _propTypes.default.any,

  /**
   * @type boolean
   */
  defaultDraggable: _propTypes.default.bool,

  /**
   * @type boolean
   */
  defaultEditable: _propTypes.default.bool,

  /**
   * @type RectangleOptions
   */
  defaultOptions: _propTypes.default.any,

  /**
   * @type boolean
   */
  defaultVisible: _propTypes.default.bool,

  /**
   * @type LatLngBounds|LatLngBoundsLiteral
   */
  bounds: _propTypes.default.any,

  /**
   * @type boolean
   */
  draggable: _propTypes.default.bool,

  /**
   * @type boolean
   */
  editable: _propTypes.default.bool,

  /**
   * @type RectangleOptions
   */
  options: _propTypes.default.any,

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
  onBoundsChanged: _propTypes.default.func,

  /**
   * function
   */
  onClick: _propTypes.default.func,

  /**
   * function
   */
  onDrag: _propTypes.default.func
};
Rectangle.contextTypes = (0, _defineProperty2.default)({}, _constants.MAP, _propTypes.default.object);
var _default = Rectangle;
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
  onBoundsChanged: "bounds_changed",
  onClick: "click",
  onDrag: "drag"
};
var updaterMap = {
  bounds: function bounds(instance, _bounds) {
    instance.setBounds(_bounds);
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
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  }
};