"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MarkerWithLabel = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _markerwithlabel = _interopRequireDefault(require("markerwithlabel"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _MapChildHelper = require("../../utils/MapChildHelper");

var _constants = require("../../constants");

var _MarkerWithLabel$cont;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * A wrapper around `MarkerWithLabel`
 *
 * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
 */
var MarkerWithLabel = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(MarkerWithLabel, _React$PureComponent);

  var _super = _createSuper(MarkerWithLabel);

  /*
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  function MarkerWithLabel(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, MarkerWithLabel);
    _this = _super.call(this, props, context);
    var NativeMarkerWithLabel = (0, _markerwithlabel.default)(google.maps);
    var markerWithLabel = new NativeMarkerWithLabel();
    (0, _MapChildHelper.construct)(MarkerWithLabel.propTypes, updaterMap, _this.props, markerWithLabel);
    var markerClusterer = _this.context[_constants.MARKER_CLUSTERER];

    if (markerClusterer) {
      markerClusterer.addMarker(markerWithLabel, !!_this.props.noRedraw);
    } else {
      markerWithLabel.setMap(_this.context[_constants.MAP]);
    }

    _this.state = (0, _defineProperty2.default)({}, _constants.MARKER_WITH_LABEL, markerWithLabel);
    return _this;
  }

  (0, _createClass2.default)(MarkerWithLabel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.MARKER_WITH_LABEL], eventMap);
      var container = document.createElement("div");

      _reactDom.default.unstable_renderSubtreeIntoContainer(this, _react.default.Children.only(this.props.children), container);

      this.state[_constants.MARKER_WITH_LABEL].set("labelContent", container);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.MARKER_WITH_LABEL], eventMap, updaterMap, prevProps);

      if (this.props.children !== prevProps.children) {
        _reactDom.default.unstable_renderSubtreeIntoContainer(this, _react.default.Children.only(this.props.children), this.state[_constants.MARKER_WITH_LABEL].get("labelContent"));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _MapChildHelper.componentWillUnmount)(this);
      var markerWithLabel = this.state[_constants.MARKER_WITH_LABEL];

      if (markerWithLabel) {
        var markerClusterer = this.context[_constants.MARKER_CLUSTERER];

        if (markerClusterer) {
          markerClusterer.removeMarker(markerWithLabel, !!this.props.noRedraw);
        }

        if (markerWithLabel.get("labelContent")) {
          _reactDom.default.unmountComponentAtNode(markerWithLabel.get("labelContent"));
        }

        markerWithLabel.setMap(null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return false;
    }
    /**
     * 
     * @type Animation optional
     * @public 
     */

  }, {
    key: "getAnimation",
    value: function getAnimation() {
      return this.state[_constants.MARKER_WITH_LABEL].getAnimation();
    }
    /**
     * 
     * @type boolean
     * @public 
     */

  }, {
    key: "getClickable",
    value: function getClickable() {
      return this.state[_constants.MARKER_WITH_LABEL].getClickable();
    }
    /**
     * 
     * @type string
     * @public 
     */

  }, {
    key: "getCursor",
    value: function getCursor() {
      return this.state[_constants.MARKER_WITH_LABEL].getCursor();
    }
    /**
     * 
     * @type boolean
     * @public 
     */

  }, {
    key: "getDraggable",
    value: function getDraggable() {
      return this.state[_constants.MARKER_WITH_LABEL].getDraggable();
    }
    /**
     * 
     * @type string|Icon|Symbol
     * @public 
     */

  }, {
    key: "getIcon",
    value: function getIcon() {
      return this.state[_constants.MARKER_WITH_LABEL].getIcon();
    }
    /**
     * 
     * @type MarkerLabel
     * @public 
     */

  }, {
    key: "getLabel",
    value: function getLabel() {
      return this.state[_constants.MARKER_WITH_LABEL].getLabel();
    }
    /**
     * 
     * @type number
     * @public 
     */

  }, {
    key: "getOpacity",
    value: function getOpacity() {
      return this.state[_constants.MARKER_WITH_LABEL].getOpacity();
    }
    /**
     * 
     * @type LatLng optional
     * @public 
     */

  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.state[_constants.MARKER_WITH_LABEL].getPosition();
    }
    /**
     * 
     * @type MarkerShape
     * @public 
     */

  }, {
    key: "getShape",
    value: function getShape() {
      return this.state[_constants.MARKER_WITH_LABEL].getShape();
    }
    /**
     * 
     * @type string
     * @public 
     */

  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.state[_constants.MARKER_WITH_LABEL].getTitle();
    }
    /**
     * 
     * @type boolean
     * @public 
     */

  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.state[_constants.MARKER_WITH_LABEL].getVisible();
    }
    /**
     * 
     * @type number
     * @public 
     */

  }, {
    key: "getZIndex",
    value: function getZIndex() {
      return this.state[_constants.MARKER_WITH_LABEL].getZIndex();
    }
  }]);
  return MarkerWithLabel;
}(_react.default.PureComponent);

exports.MarkerWithLabel = MarkerWithLabel;
MarkerWithLabel.propTypes = {
  /**
   * It will be `MarkerWithLabel#labelContent`.
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  children: _propTypes.default.node,

  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelAnchor: _propTypes.default.object,

  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelClass: _propTypes.default.string,

  /**
   * For `MarkerWithLabel`. This is for native JS style object, so you may
   * expect some React shorthands for inline styles not working here.
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelStyle: _propTypes.default.object,

  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelVisible: _propTypes.default.bool,

  /**
   * For the 2nd argument of `MarkerCluster#addMarker`
   * @see https://github.com/mikesaidani/marker-clusterer-plus
   */
  noRedraw: _propTypes.default.bool,

  /**
   * @type Animationoptional
   */
  defaultAnimation: _propTypes.default.any,

  /**
   * @type boolean
   */
  defaultClickable: _propTypes.default.bool,

  /**
   * @type string
   */
  defaultCursor: _propTypes.default.string,

  /**
   * @type booleanoptional
   */
  defaultDraggable: _propTypes.default.any,

  /**
   * @type string|Icon|Symbol
   */
  defaultIcon: _propTypes.default.any,

  /**
   * @type string|MarkerLabel
   */
  defaultLabel: _propTypes.default.any,

  /**
   * @type number
   */
  defaultOpacity: _propTypes.default.number,

  /**
   * @type MarkerOptions
   */
  defaultOptions: _propTypes.default.any,

  /**
   * @type LatLng|LatLngLiteraloptional
   */
  defaultPosition: _propTypes.default.any,

  /**
   * @type MarkerShape
   */
  defaultShape: _propTypes.default.any,

  /**
   * @type string
   */
  defaultTitle: _propTypes.default.string,

  /**
   * @type boolean
   */
  defaultVisible: _propTypes.default.bool,

  /**
   * @type number
   */
  defaultZIndex: _propTypes.default.number,

  /**
   * @type Animationoptional
   */
  animation: _propTypes.default.any,

  /**
   * @type boolean
   */
  clickable: _propTypes.default.bool,

  /**
   * @type string
   */
  cursor: _propTypes.default.string,

  /**
   * @type booleanoptional
   */
  draggable: _propTypes.default.any,

  /**
   * @type string|Icon|Symbol
   */
  icon: _propTypes.default.any,

  /**
   * @type string|MarkerLabel
   */
  label: _propTypes.default.any,

  /**
   * @type number
   */
  opacity: _propTypes.default.number,

  /**
   * @type MarkerOptions
   */
  options: _propTypes.default.any,

  /**
   * @type LatLng|LatLngLiteraloptional
   */
  position: _propTypes.default.any,

  /**
   * @type MarkerShape
   */
  shape: _propTypes.default.any,

  /**
   * @type string
   */
  title: _propTypes.default.string,

  /**
   * @type boolean
   */
  visible: _propTypes.default.bool,

  /**
   * @type number
   */
  zIndex: _propTypes.default.number,

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
  onAnimationChanged: _propTypes.default.func,

  /**
   * function
   */
  onClick: _propTypes.default.func,

  /**
   * function
   */
  onClickableChanged: _propTypes.default.func,

  /**
   * function
   */
  onCursorChanged: _propTypes.default.func,

  /**
   * function
   */
  onDrag: _propTypes.default.func,

  /**
   * function
   */
  onDraggableChanged: _propTypes.default.func,

  /**
   * function
   */
  onFlatChanged: _propTypes.default.func,

  /**
   * function
   */
  onIconChanged: _propTypes.default.func,

  /**
   * function
   */
  onPositionChanged: _propTypes.default.func,

  /**
   * function
   */
  onShapeChanged: _propTypes.default.func,

  /**
   * function
   */
  onTitleChanged: _propTypes.default.func,

  /**
   * function
   */
  onVisibleChanged: _propTypes.default.func,

  /**
   * function
   */
  onZindexChanged: _propTypes.default.func
};
MarkerWithLabel.defaultProps = {
  labelVisible: true
};
MarkerWithLabel.contextTypes = (_MarkerWithLabel$cont = {}, (0, _defineProperty2.default)(_MarkerWithLabel$cont, _constants.MAP, _propTypes.default.object), (0, _defineProperty2.default)(_MarkerWithLabel$cont, _constants.MARKER_CLUSTERER, _propTypes.default.object), _MarkerWithLabel$cont);
var _default = MarkerWithLabel;
exports.default = _default;
var eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onAnimationChanged: "animation_changed",
  onClick: "click",
  onClickableChanged: "clickable_changed",
  onCursorChanged: "cursor_changed",
  onDrag: "drag",
  onDraggableChanged: "draggable_changed",
  onFlatChanged: "flat_changed",
  onIconChanged: "icon_changed",
  onPositionChanged: "position_changed",
  onShapeChanged: "shape_changed",
  onTitleChanged: "title_changed",
  onVisibleChanged: "visible_changed",
  onZindexChanged: "zindex_changed"
};
var updaterMap = {
  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelAnchor: function labelAnchor(instance, _labelAnchor) {
    instance.set("labelAnchor", _labelAnchor);
  },

  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelClass: function labelClass(instance, _labelClass) {
    instance.set("labelClass", _labelClass);
  },

  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelStyle: function labelStyle(instance, _labelStyle) {
    instance.set("labelStyle", _labelStyle);
  },

  /**
   * For `MarkerWithLabel`
   * @see https://cdn.rawgit.com/googlemaps/v3-utility-library/master/markerwithlabel/src/markerwithlabel.js
   */
  labelVisible: function labelVisible(instance, _labelVisible) {
    instance.set("labelVisible", _labelVisible);
  },
  animation: function animation(instance, _animation) {
    instance.setAnimation(_animation);
  },
  clickable: function clickable(instance, _clickable) {
    instance.setClickable(_clickable);
  },
  cursor: function cursor(instance, _cursor) {
    instance.setCursor(_cursor);
  },
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable);
  },
  icon: function icon(instance, _icon) {
    instance.setIcon(_icon);
  },
  label: function label(instance, _label) {
    instance.setLabel(_label);
  },
  opacity: function opacity(instance, _opacity) {
    instance.setOpacity(_opacity);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  position: function position(instance, _position) {
    instance.setPosition(_position);
  },
  shape: function shape(instance, _shape) {
    instance.setShape(_shape);
  },
  title: function title(instance, _title) {
    instance.setTitle(_title);
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex);
  }
};