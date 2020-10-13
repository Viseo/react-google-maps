"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StandaloneSearchBox = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _invariant = _interopRequireDefault(require("invariant"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../../utils/MapChildHelper");

var _constants = require("../../constants");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * A wrapper around `google.maps.places.SearchBox` without the map
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
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _invariant.default)(google.maps.places, "Did you include \"libraries=places\" in the URL?");

      var element = _reactDom.default.findDOMNode(this);
      /*
       * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#SearchBox
       */


      var searchBox = new google.maps.places.SearchBox(element.querySelector('input') || element);
      (0, _MapChildHelper.construct)(SearchBox.propTypes, updaterMap, this.props, searchBox);
      (0, _MapChildHelper.componentDidMount)(this, searchBox, eventMap);
      this.setState((0, _defineProperty2.default)({}, _constants.SEARCH_BOX, searchBox));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.SEARCH_BOX], eventMap, updaterMap, prevProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _MapChildHelper.componentWillUnmount)(this);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.Children.only(this.props.children);
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

SearchBox.displayName = "StandaloneSearchBox";
SearchBox.propTypes = {
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
var StandaloneSearchBox = SearchBox;
exports.StandaloneSearchBox = StandaloneSearchBox;
var _default = StandaloneSearchBox;
exports.default = _default;
var eventMap = {
  onPlacesChanged: "places_changed"
};
var updaterMap = {
  bounds: function bounds(instance, _bounds) {
    instance.setBounds(_bounds);
  }
};