"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InfoBox = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _canUseDom = _interopRequireDefault(require("can-use-dom"));

var _invariant = _interopRequireDefault(require("invariant"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../../utils/MapChildHelper");

var _constants = require("../../constants");

var _InfoBox$contextTypes;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * A wrapper around `InfoBox`
 *
 * @see http://htmlpreview.github.io/?https://github.com/googlemaps/v3-utility-library/blob/master/infobox/docs/reference.html
 */
var InfoBox = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(InfoBox, _React$PureComponent);

  var _super = _createSuper(InfoBox);

  function InfoBox() {
    var _this;

    (0, _classCallCheck2.default)(this, InfoBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = (0, _defineProperty2.default)({}, _constants.INFO_BOX, null);
    return _this;
  }

  (0, _createClass2.default)(InfoBox, [{
    key: "componentWillMount",

    /*
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoBox
     */
    value: function componentWillMount() {
      if (!_canUseDom.default || this.state[_constants.INFO_BOX]) {
        return;
      }

      var _require = require(
      /* "google-maps-infobox" uses "google" as a global variable. Since we don't
      * have "google" on the server, we can not use it in server-side rendering.
      * As a result, we import "google-maps-infobox" here to prevent an error on
      * a isomorphic server.
      */
      "google-maps-infobox"),
          GoogleMapsInfobox = _require.InfoBox;

      var infoBox = new GoogleMapsInfobox();
      (0, _MapChildHelper.construct)(InfoBox.propTypes, updaterMap, this.props, infoBox);
      infoBox.setMap(this.context[_constants.MAP]);
      this.setState((0, _defineProperty2.default)({}, _constants.INFO_BOX, infoBox));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.INFO_BOX], eventMap);
      var content = document.createElement("div");

      _reactDom.default.unstable_renderSubtreeIntoContainer(this, _react.default.Children.only(this.props.children), content);

      this.state[_constants.INFO_BOX].setContent(content);

      open(this.state[_constants.INFO_BOX], this.context[_constants.ANCHOR]);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.INFO_BOX], eventMap, updaterMap, prevProps);

      if (this.props.children !== prevProps.children) {
        _reactDom.default.unstable_renderSubtreeIntoContainer(this, _react.default.Children.only(this.props.children), this.state[_constants.INFO_BOX].getContent());
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _MapChildHelper.componentWillUnmount)(this);
      var infoBox = this.state[_constants.INFO_BOX];

      if (infoBox) {
        if (infoBox.getContent()) {
          _reactDom.default.unmountComponentAtNode(infoBox.getContent());
        }

        infoBox.setMap(null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return false;
    }
    /**
     *
     * @type LatLng
     */

  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.state[_constants.INFO_BOX].getPosition();
    }
    /**
     *
     * @type boolean
     */

  }, {
    key: "getVisible",
    value: function getVisible() {
      return this.state[_constants.INFO_BOX].getVisible();
    }
    /**
     *
     * @type number
     */

  }, {
    key: "getZIndex",
    value: function getZIndex() {
      return this.state[_constants.INFO_BOX].getZIndex();
    }
  }]);
  return InfoBox;
}(_react.default.PureComponent);

exports.InfoBox = InfoBox;
InfoBox.propTypes = {
  /**
   * @type InfoBoxOptions
   */
  defaultOptions: _propTypes.default.any,

  /**
   * @type LatLng|LatLngLiteral
   */
  defaultPosition: _propTypes.default.any,

  /**
   * @type boolean
   */
  defaultVisible: _propTypes.default.bool,

  /**
   * @type number
   */
  defaultZIndex: _propTypes.default.number,

  /**
   * @type InfoBoxOptions
   */
  options: _propTypes.default.any,

  /**
   * @type LatLng|LatLngLiteral
   */
  position: _propTypes.default.any,

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
InfoBox.contextTypes = (_InfoBox$contextTypes = {}, (0, _defineProperty2.default)(_InfoBox$contextTypes, _constants.MAP, _propTypes.default.object), (0, _defineProperty2.default)(_InfoBox$contextTypes, _constants.ANCHOR, _propTypes.default.object), _InfoBox$contextTypes);
var _default = InfoBox;
exports.default = _default;

var open = function open(infoBox, anchor) {
  if (anchor) {
    infoBox.open(infoBox.getMap(), anchor);
  } else if (infoBox.getPosition()) {
    infoBox.open(infoBox.getMap());
  } else {
    (0, _invariant.default)(false, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoBox>.");
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
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible);
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex);
  }
};