"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SearchBox = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _lodash = _interopRequireDefault(require("lodash"));

var _invariant = _interopRequireDefault(require("invariant"));

var _canUseDom = _interopRequireDefault(require("can-use-dom"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../../utils/MapChildHelper");

var _constants = require("../../constants");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * A wrapper around `google.maps.places.SearchBox` on the map
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
 */
var SearchBox = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(SearchBox, _React$PureComponent);

  var _super = _createSuper(SearchBox);

  function SearchBox() {
    var _this;

    (0, _classCallCheck2.default)(this, SearchBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = (0, _defineProperty2.default)({}, _constants.SEARCH_BOX, null);
    return _this;
  }

  (0, _createClass2.default)(SearchBox, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!_canUseDom.default || this.containerElement) {
        return;
      }

      (0, _invariant.default)(google.maps.places, "Did you include \"libraries=places\" in the URL?");
      this.containerElement = document.createElement("div");
      this.handleRenderChildToContainerElement();

      if (_react.default.version.match(/^16/)) {
        return;
      }

      this.handleInitializeSearchBox();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var searchBox = this.state[_constants.SEARCH_BOX];

      if (_react.default.version.match(/^16/)) {
        searchBox = this.handleInitializeSearchBox();
      }

      (0, _MapChildHelper.componentDidMount)(this, searchBox, eventMap);
      this.handleMountAtControlPosition();
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProp) {
      if (this.props.controlPosition !== nextProp.controlPosition) {
        this.handleUnmountAtControlPosition();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.SEARCH_BOX], eventMap, updaterMap, prevProps);

      if (this.props.children !== prevProps.children) {
        this.handleRenderChildToContainerElement();
      }

      if (this.props.controlPosition !== prevProps.controlPosition) {
        this.handleMountAtControlPosition();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _MapChildHelper.componentWillUnmount)(this);
      this.handleUnmountAtControlPosition();

      if (_react.default.version.match(/^16/)) {
        return;
      }

      if (this.containerElement) {
        _reactDom.default.unmountComponentAtNode(this.containerElement);

        this.containerElement = null;
      }
    }
  }, {
    key: "handleInitializeSearchBox",
    value: function handleInitializeSearchBox() {
      /*
       * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
       */
      var searchBox = new google.maps.places.SearchBox(this.containerElement.querySelector('input'));
      (0, _MapChildHelper.construct)(SearchBox.propTypes, updaterMap, this.props, searchBox);
      this.setState((0, _defineProperty2.default)({}, _constants.SEARCH_BOX, searchBox));
      return searchBox;
    }
  }, {
    key: "handleRenderChildToContainerElement",
    value: function handleRenderChildToContainerElement() {
      if (_react.default.version.match(/^16/)) {
        return;
      }

      _reactDom.default.unstable_renderSubtreeIntoContainer(this, _react.default.Children.only(this.props.children), this.containerElement);
    }
  }, {
    key: "handleMountAtControlPosition",
    value: function handleMountAtControlPosition() {
      if (isValidControlPosition(this.props.controlPosition)) {
        this.mountControlIndex = -1 + this.context[_constants.MAP].controls[this.props.controlPosition].push(this.containerElement.firstChild);
      }
    }
  }, {
    key: "handleUnmountAtControlPosition",
    value: function handleUnmountAtControlPosition() {
      if (isValidControlPosition(this.props.controlPosition)) {
        var child = this.context[_constants.MAP].controls[this.props.controlPosition].removeAt(this.mountControlIndex);

        if (child !== undefined) {
          this.containerElement.appendChild(child);
        }
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
     * Returns the bounds to which query predictions are biased.
     * @type LatLngBounds
     * @public 
     */

  }, {
    key: "getBounds",
    value: function getBounds() {
      return this.state[_constants.SEARCH_BOX].getBounds();
    }
    /**
     * Returns the query selected by the user, or `null` if no places have been found yet, to be used with `places_changed` event.
     * @type Array<PlaceResult>
     * @public 
     */

  }, {
    key: "getPlaces",
    value: function getPlaces() {
      return this.state[_constants.SEARCH_BOX].getPlaces();
    }
  }]);
  return SearchBox;
}(_react.default.PureComponent);

exports.SearchBox = SearchBox;
SearchBox.propTypes = {
  /**
   * Where to put `<SearchBox>` inside a `<GoogleMap>`
   *
   * @example google.maps.ControlPosition.TOP_LEFT
   * @type number
   */
  controlPosition: _propTypes.default.number,

  /**
   * @type LatLngBounds|LatLngBoundsLiteral
   */
  defaultBounds: _propTypes.default.any,

  /**
   * @type LatLngBounds|LatLngBoundsLiteral
   */
  bounds: _propTypes.default.any,

  /**
   * function
   */
  onPlacesChanged: _propTypes.default.func
};
SearchBox.contextTypes = (0, _defineProperty2.default)({}, _constants.MAP, _propTypes.default.object);
var _default = SearchBox;
exports.default = _default;
var isValidControlPosition = _lodash.default.isNumber;
var eventMap = {
  onPlacesChanged: "places_changed"
};
var updaterMap = {
  bounds: function bounds(instance, _bounds) {
    instance.setBounds(_bounds);
  }
};