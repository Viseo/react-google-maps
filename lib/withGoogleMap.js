"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withGoogleMap = withGoogleMap;
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _lodash = _interopRequireDefault(require("lodash"));

var _warning = _interopRequireDefault(require("warning"));

var _invariant = _interopRequireDefault(require("invariant"));

var _recompose = require("recompose");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _constants = require("./constants");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function withGoogleMap(BaseComponent) {
  var factory = /*#__PURE__*/_react.default.createFactory(BaseComponent);

  var Container = /*#__PURE__*/function (_React$PureComponent) {
    (0, _inherits2.default)(Container, _React$PureComponent);

    var _super = _createSuper(Container);

    function Container() {
      var _this;

      (0, _classCallCheck2.default)(this, Container);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.state = {
        map: null
      };
      _this.handleComponentMount = _lodash.default.bind(_this.handleComponentMount, (0, _assertThisInitialized2.default)(_this));
      return _this;
    }

    (0, _createClass2.default)(Container, [{
      key: "getChildContext",
      value: function getChildContext() {
        return (0, _defineProperty2.default)({}, _constants.MAP, this.state.map);
      }
    }, {
      key: "componentWillMount",
      value: function componentWillMount() {
        var _this$props = this.props,
            containerElement = _this$props.containerElement,
            mapElement = _this$props.mapElement;
        (0, _invariant.default)(!!containerElement && !!mapElement, "Required props containerElement or mapElement is missing. You need to provide both of them.\n The `google.maps.Map` instance will be initialized on mapElement and it's wrapped by containerElement.\nYou need to provide both of them since Google Map requires the DOM to have height when initialized.");
      }
    }, {
      key: "handleComponentMount",
      value: function handleComponentMount(node) {
        if (this.state.map || node === null) {
          return;
        }

        (0, _warning.default)("undefined" !== typeof google, "Make sure you've put a <script> tag in your <head> element to load Google Maps JavaScript API v3.\n If you're looking for built-in support to load it for you, use the \"async/ScriptjsLoader\" instead.\n See https://github.com/tomchentw/react-google-maps/pull/168"); // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map

        var map = new google.maps.Map(node);
        this.setState({
          map: map
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            containerElement = _this$props2.containerElement,
            mapElement = _this$props2.mapElement,
            restProps = (0, _objectWithoutProperties2.default)(_this$props2, ["containerElement", "mapElement"]);
        var map = this.state.map;

        if (map) {
          return /*#__PURE__*/_react.default.cloneElement(containerElement, {}, /*#__PURE__*/_react.default.cloneElement(mapElement, {
            ref: this.handleComponentMount
          }), /*#__PURE__*/_react.default.createElement("div", null, factory(restProps)));
        } else {
          return /*#__PURE__*/_react.default.cloneElement(containerElement, {}, /*#__PURE__*/_react.default.cloneElement(mapElement, {
            ref: this.handleComponentMount
          }), /*#__PURE__*/_react.default.createElement("div", null));
        }
      }
    }]);
    return Container;
  }(_react.default.PureComponent);

  Container.displayName = "withGoogleMap(".concat((0, _recompose.getDisplayName)(BaseComponent), ")");
  Container.propTypes = {
    containerElement: _propTypes.default.node.isRequired,
    mapElement: _propTypes.default.node.isRequired
  };
  Container.childContextTypes = (0, _defineProperty2.default)({}, _constants.MAP, _propTypes.default.object);
  return Container;
}

var _default = withGoogleMap;
exports.default = _default;