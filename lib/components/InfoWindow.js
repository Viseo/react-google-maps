"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InfoWindow = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _invariant = _interopRequireDefault(require("invariant"));

var _canUseDom = _interopRequireDefault(require("can-use-dom"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

var _InfoWindow$contextTy;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * A wrapper around `google.maps.InfoWindow`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
 */
var InfoWindow = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(InfoWindow, _React$PureComponent);

  var _super = _createSuper(InfoWindow);

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
   */
  function InfoWindow(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, InfoWindow);
    _this = _super.call(this, props, context);
    var infoWindow = new google.maps.InfoWindow();
    (0, _MapChildHelper.construct)(InfoWindow.propTypes, updaterMap, _this.props, infoWindow);
    infoWindow.setMap(_this.context[_constants.MAP]);
    _this.state = (0, _defineProperty2.default)({}, _constants.INFO_WINDOW, infoWindow);
    return _this;
  }

  (0, _createClass2.default)(InfoWindow, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom.default || this.containerElement) {
        return;
      }

      if (_react.default.version.match(/^16/)) {
        this.containerElement = document.createElement("div");
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.INFO_WINDOW], eventMap);

      if (_react.default.version.match(/^16/)) {
        this.state[_constants.INFO_WINDOW].setContent(this.containerElement);

        open(this.state[_constants.INFO_WINDOW], this.context[_constants.ANCHOR]);
        return;
      }

      var content = document.createElement("div");

      /*#__PURE__*/
      _reactDom.default.createPortal(_react.default.Children.only(this.props.children), content);

      this.state[_constants.INFO_WINDOW].setContent(content);

      open(this.state[_constants.INFO_WINDOW], this.context[_constants.ANCHOR]);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.INFO_WINDOW], eventMap, updaterMap, prevProps);

      if (_react.default.version.match(/^16/)) {
        return;
      }

      if (this.props.children !== prevProps.children) {
        /*#__PURE__*/
        _reactDom.default.createPortal(_react.default.Children.only(this.props.children), this.state[_constants.INFO_WINDOW].getContent());
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _MapChildHelper.componentWillUnmount)(this);
      var infoWindow = this.state[_constants.INFO_WINDOW];

      if (infoWindow) {
        if (!_react.default.version.match(/^16/) && infoWindow.getContent()) {
          _reactDom.default.unmountComponentAtNode(infoWindow.getContent());
        }

        infoWindow.setMap(null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (_react.default.version.match(/^16/)) {
        return /*#__PURE__*/_reactDom.default.createPortal(_react.default.Children.only(this.props.children), this.containerElement);
      }

      return false;
    }
    /**
     * 
     * @type LatLng
     * @public 
     */

  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.state[_constants.INFO_WINDOW].getPosition();
    }
    /**
     * 
     * @type number
     * @public 
     */

  }, {
    key: "getZIndex",
    value: function getZIndex() {
      return this.state[_constants.INFO_WINDOW].getZIndex();
    }
  }]);
  return InfoWindow;
}(_react.default.PureComponent);

exports.InfoWindow = InfoWindow;
InfoWindow.propTypes = {
  /**
   * @type InfoWindowOptions
   */
  defaultOptions: _propTypes.default.any,

  /**
   * @type LatLng|LatLngLiteral
   */
  defaultPosition: _propTypes.default.any,

  /**
   * @type number
   */
  defaultZIndex: _propTypes.default.number,

  /**
   * @type InfoWindowOptions
   */
  options: _propTypes.default.any,

  /**
   * @type LatLng|LatLngLiteral
   */
  position: _propTypes.default.any,

  /**
   * @type number
   */
  zIndex: _propTypes.default.number,

  /**
   * function
   */
  onCloseClick: _propTypes.default.func,

  /**
   * function
   */
  onDomReady: _propTypes.default.func,

  /**
   * function
   */
  onContentChanged: _propTypes.default.func,

  /**
   * function
   */
  onPositionChanged: _propTypes.default.func,

  /**
   * function
   */
  onZindexChanged: _propTypes.default.func
};
InfoWindow.contextTypes = (_InfoWindow$contextTy = {}, (0, _defineProperty2.default)(_InfoWindow$contextTy, _constants.MAP, _propTypes.default.object), (0, _defineProperty2.default)(_InfoWindow$contextTy, _constants.ANCHOR, _propTypes.default.object), _InfoWindow$contextTy);
var _default = InfoWindow;
exports.default = _default;

var open = function open(infoWindow, anchor) {
  if (anchor) {
    infoWindow.open(infoWindow.getMap(), anchor);
  } else if (infoWindow.getPosition()) {
    infoWindow.open(infoWindow.getMap());
  } else {
    (0, _invariant.default)(false, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.");
  }
};

var eventMap = {
  onCloseClick: "closeclick",
  onDomReady: "domready",
  onContentChanged: "content_changed",
  onPositionChanged: "position_changed",
  onZindexChanged: "zindex_changed"
};
var updaterMap = {
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  position: function position(instance, _position) {
    instance.setPosition(_position);
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex);
  }
};