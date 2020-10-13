"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withScriptjs = withScriptjs;
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _lodash = _interopRequireDefault(require("lodash"));

var _invariant = _interopRequireDefault(require("invariant"));

var _canUseDom = _interopRequireDefault(require("can-use-dom"));

var _recompose = require("recompose");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var LOADING_STATE_NONE = "NONE";
var LOADING_STATE_BEGIN = "BEGIN";
var LOADING_STATE_LOADED = "LOADED";

function withScriptjs(BaseComponent) {
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
        loadingState: LOADING_STATE_NONE
      };
      _this.isUnmounted = false;
      _this.handleLoaded = _lodash.default.bind(_this.handleLoaded, (0, _assertThisInitialized2.default)(_this));
      return _this;
    }

    (0, _createClass2.default)(Container, [{
      key: "handleLoaded",
      value: function handleLoaded() {
        if (this.isUnmounted) {
          return;
        }

        this.setState({
          loadingState: LOADING_STATE_LOADED
        });
      }
    }, {
      key: "componentWillMount",
      value: function componentWillMount() {
        var _this$props = this.props,
            loadingElement = _this$props.loadingElement,
            googleMapURL = _this$props.googleMapURL;
        (0, _invariant.default)(!!loadingElement && !!googleMapURL, "Required props loadingElement or googleMapURL is missing. You need to provide both of them.");
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var loadingState = this.state.loadingState;

        if (loadingState !== LOADING_STATE_NONE || !_canUseDom.default) {
          return;
        }

        this.setState({
          loadingState: LOADING_STATE_BEGIN
        }); // Don't load scriptjs as a dependency since we do not want this module be used on server side.
        // eslint-disable-next-line global-require

        var scriptjs = require("scriptjs");

        var googleMapURL = this.props.googleMapURL;
        scriptjs(googleMapURL, this.handleLoaded);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.isUnmounted = true;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            loadingElement = _this$props2.loadingElement,
            googleMapURL = _this$props2.googleMapURL,
            restProps = (0, _objectWithoutProperties2.default)(_this$props2, ["loadingElement", "googleMapURL"]);
        var loadingState = this.state.loadingState;

        if (loadingState === LOADING_STATE_LOADED) {
          return factory(restProps);
        } else {
          return loadingElement;
        }
      }
    }]);
    return Container;
  }(_react.default.PureComponent);

  Container.displayName = "withScriptjs(".concat((0, _recompose.getDisplayName)(BaseComponent), ")");
  Container.propTypes = {
    loadingElement: _propTypes.default.node.isRequired,
    googleMapURL: _propTypes.default.string.isRequired
  };
  return Container;
}

var _default = withScriptjs;
exports.default = _default;