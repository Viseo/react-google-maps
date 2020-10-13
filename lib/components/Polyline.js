"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Polyline = void 0;

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
 * A wrapper around `google.maps.Polyline`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
 */
var Polyline = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(Polyline, _React$PureComponent);

  var _super = _createSuper(Polyline);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
   */
  function Polyline(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, Polyline);
    _this = _super.call(this, props, context);
    var polyline = new google.maps.Polyline();
    (0, _MapChildHelper.construct)(Polyline.propTypes, updaterMap, _this.props, polyline);
    polyline.setMap(_this.context[_constants.MAP]);
    _this.state = (0, _defineProperty2.default)({}, _constants.POLYLINE, polyline);
    return _this;
  }

  (0, _createClass2.default)(Polyline, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.POLYLINE], eventMap);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.POLYLINE], eventMap, updaterMap, prevProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _MapChildHelper.componentWillUnmount)(this);
      var polyline = this.state[_constants.POLYLINE];

      if (polyline) {
        polyline.setMap(null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return false;
    }
    /**
     * Returns whether this shape can be dragged by the user.
     * @type boolean
     * @public 
     */

  }, {
    key: "getDraggable",
    value: function getDraggable() {
      return this.state[_constants.POLYLINE].getDraggable();
    }
    /**
     * Returns whether this shape can be edited by the user.
     * @type boolean
     * @public 
     */

  }, {
    key: "getEditable",
    value: function getEditable() {
      return this.state[_constants.POLYLINE].getEditable();
    }
    /**
     * Retrieves the path.
     * @type MVCArray<LatLng>
     * @public 
     */

  }, {
    key: "getPath",
    value: function getPath() {
      return this.state[_constants.POLYLINE].getPath();
    }
    /**
     * Returns whether this poly is visible on the map.
     * @type boolean
     * @public 
     */

  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.state[_constants.POLYLINE].getVisible();
    }
  }]);
  return Polyline;
}(_react.default.PureComponent);

exports.Polyline = Polyline;
Polyline.propTypes = {
  /**
   * @type boolean
   */
  defaultDraggable: _propTypes.default.bool,

  /**
   * @type boolean
   */
  defaultEditable: _propTypes.default.bool,

  /**
   * @type PolylineOptions
   */
  defaultOptions: _propTypes.default.any,

  /**
   * @type MVCArray<LatLng>|Array<LatLng|LatLngLiteral>
   */
  defaultPath: _propTypes.default.any,

  /**
   * @type boolean
   */
  defaultVisible: _propTypes.default.bool,

  /**
   * @type boolean
   */
  draggable: _propTypes.default.bool,

  /**
   * @type boolean
   */
  editable: _propTypes.default.bool,

  /**
   * @type PolylineOptions
   */
  options: _propTypes.default.any,

  /**
   * @type MVCArray<LatLng>|Array<LatLng|LatLngLiteral>
   */
  path: _propTypes.default.any,

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
  onClick: _propTypes.default.func,

  /**
   * function
   */
  onDrag: _propTypes.default.func
};
Polyline.contextTypes = (0, _defineProperty2.default)({}, _constants.MAP, _propTypes.default.object);
var _default = Polyline;
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
  onClick: "click",
  onDrag: "drag"
};
var updaterMap = {
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable);
  },
  editable: function editable(instance, _editable) {
    instance.setEditable(_editable);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  path: function path(instance, _path) {
    instance.setPath(_path);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  }
};