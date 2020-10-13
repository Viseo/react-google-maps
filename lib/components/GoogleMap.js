"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GoogleMap = exports.Map = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _invariant = _interopRequireDefault(require("invariant"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MapChildHelper = require("../utils/MapChildHelper");

var _constants = require("../constants");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * A wrapper around `google.maps.Map`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
 */
var Map = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(Map, _React$PureComponent);

  var _super = _createSuper(Map);

  (0, _createClass2.default)(Map, [{
    key: "fitBounds",

    /**
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
     * @public 
     */
    value: function fitBounds() {
      var _this$context$MAP;

      return (_this$context$MAP = this.context[_constants.MAP]).fitBounds.apply(_this$context$MAP, arguments);
    }
    /**
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
     * @public 
     */

  }, {
    key: "panBy",
    value: function panBy() {
      var _this$context$MAP2;

      return (_this$context$MAP2 = this.context[_constants.MAP]).panBy.apply(_this$context$MAP2, arguments);
    }
    /**
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
     * @public 
     */

  }, {
    key: "panTo",
    value: function panTo() {
      var _this$context$MAP3;

      return (_this$context$MAP3 = this.context[_constants.MAP]).panTo.apply(_this$context$MAP3, arguments);
    }
    /**
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
     * @public 
     */

  }, {
    key: "panToBounds",
    value: function panToBounds() {
      var _this$context$MAP4;

      return (_this$context$MAP4 = this.context[_constants.MAP]).panToBounds.apply(_this$context$MAP4, arguments);
    }
    /*
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
     */

  }]);

  function Map(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, Map);
    _this = _super.call(this, props, context);
    (0, _invariant.default)(!!_this.context[_constants.MAP], "Did you wrap <GoogleMap> component with withGoogleMap() HOC?");
    (0, _MapChildHelper.construct)(GoogleMap.propTypes, updaterMap, _this.props, _this.context[_constants.MAP]);
    return _this;
  }

  (0, _createClass2.default)(Map, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _MapChildHelper.componentDidMount)(this, this.context[_constants.MAP], eventMap);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      (0, _MapChildHelper.componentDidUpdate)(this, this.context[_constants.MAP], eventMap, updaterMap, prevProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _MapChildHelper.componentWillUnmount)(this);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/_react.default.createElement("div", null, children);
    }
    /**
     * Returns the lat/lng bounds of the current viewport. If more than one copy of the world is visible, the bounds range in longitude from -180 to 180 degrees inclusive. If the map is not yet initialized (i.e. the mapType is still null), or center and zoom have not been set then the result is `null` or `undefined`.
     * @type LatLngBounds
     * @public 
     */

  }, {
    key: "getBounds",
    value: function getBounds() {
      return this.context[_constants.MAP].getBounds();
    }
    /**
     * Returns the position displayed at the center of the map. Note that this `LatLng` object is _not_ wrapped. See `[LatLng](#LatLng)` for more information.
     * @type LatLng
     * @public 
     */

  }, {
    key: "getCenter",
    value: function getCenter() {
      return this.context[_constants.MAP].getCenter();
    }
    /**
     * Returns the clickability of the map icons. A map icon represents a point of interest, also known as a POI. If the returned value is true, then the icons are clickable on the map.
     * @type boolean
     * @public 
     */

  }, {
    key: "getClickableIcons",
    value: function getClickableIcons() {
      return this.context[_constants.MAP].getClickableIcons();
    }
    /**
     * 
     * @type Element
     * @public 
     */

  }, {
    key: "getDiv",
    value: function getDiv() {
      return this.context[_constants.MAP].getDiv();
    }
    /**
     * Returns the compass heading of aerial imagery. The heading value is measured in degrees (clockwise) from cardinal direction North.
     * @type number
     * @public 
     */

  }, {
    key: "getHeading",
    value: function getHeading() {
      return this.context[_constants.MAP].getHeading();
    }
    /**
     * 
     * @type MapTypeId|string
     * @public 
     */

  }, {
    key: "getMapTypeId",
    value: function getMapTypeId() {
      return this.context[_constants.MAP].getMapTypeId();
    }
    /**
     * Returns the current `Projection`. If the map is not yet initialized (i.e. the mapType is still null) then the result is null. Listen to `projection_changed` and check its value to ensure it is not null.
     * @type Projection
     * @public 
     */

  }, {
    key: "getProjection",
    value: function getProjection() {
      return this.context[_constants.MAP].getProjection();
    }
    /**
     * Returns the default `StreetViewPanorama` bound to the map, which may be a default panorama embedded within the map, or the panorama set using `setStreetView()`. Changes to the map's `streetViewControl` will be reflected in the display of such a bound panorama.
     * @type StreetViewPanorama
     * @public 
     */

  }, {
    key: "getStreetView",
    value: function getStreetView() {
      return this.context[_constants.MAP].getStreetView();
    }
    /**
     * Returns the current angle of incidence of the map, in degrees from the viewport plane to the map plane. The result will be `0` for imagery taken directly overhead or `45` for 45° imagery. 45° imagery is only available for `satellite` and `hybrid` map types, within some locations, and at some zoom levels. **Note:** This method does not return the value set by `setTilt`. See `setTilt` for details.
     * @type number
     * @public 
     */

  }, {
    key: "getTilt",
    value: function getTilt() {
      return this.context[_constants.MAP].getTilt();
    }
    /**
     * 
     * @type number
     * @public 
     */

  }, {
    key: "getZoom",
    value: function getZoom() {
      return this.context[_constants.MAP].getZoom();
    }
  }]);
  return Map;
}(_react.default.PureComponent);

exports.Map = Map;
Map.displayName = "GoogleMap";
Map.propTypes = {
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapTypeRegistry
   * @type Array<[id:string, mapType:MapType|*]>
   */
  defaultExtraMapTypes: _propTypes.default.arrayOf(_propTypes.default.arrayOf(_propTypes.default.any)),

  /**
   * @type LatLng|LatLngLiteral
   */
  defaultCenter: _propTypes.default.any,

  /**
   * @type boolean
   */
  defaultClickableIcons: _propTypes.default.bool,

  /**
   * @type number
   */
  defaultHeading: _propTypes.default.number,

  /**
   * @type MapTypeId|string
   */
  defaultMapTypeId: _propTypes.default.any,

  /**
   * @type MapOptions
   */
  defaultOptions: _propTypes.default.any,

  /**
   * @type StreetViewPanorama
   */
  defaultStreetView: _propTypes.default.any,

  /**
   * @type number
   */
  defaultTilt: _propTypes.default.number,

  /**
   * @type number
   */
  defaultZoom: _propTypes.default.number,

  /**
   * @type LatLng|LatLngLiteral
   */
  center: _propTypes.default.any,

  /**
   * @type boolean
   */
  clickableIcons: _propTypes.default.bool,

  /**
   * @type number
   */
  heading: _propTypes.default.number,

  /**
   * @type MapTypeId|string
   */
  mapTypeId: _propTypes.default.any,

  /**
   * @type MapOptions
   */
  options: _propTypes.default.any,

  /**
   * @type StreetViewPanorama
   */
  streetView: _propTypes.default.any,

  /**
   * @type number
   */
  tilt: _propTypes.default.number,

  /**
   * @type number
   */
  zoom: _propTypes.default.number,

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
  onMapTypeIdChanged: _propTypes.default.func,

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
  onRightClick: _propTypes.default.func,

  /**
   * function
   */
  onTilesLoaded: _propTypes.default.func,

  /**
   * function
   */
  onBoundsChanged: _propTypes.default.func,

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
  onHeadingChanged: _propTypes.default.func,

  /**
   * function
   */
  onIdle: _propTypes.default.func,

  /**
   * function
   */
  onProjectionChanged: _propTypes.default.func,

  /**
   * function
   */
  onTiltChanged: _propTypes.default.func,

  /**
   * function
   */
  onZoomChanged: _propTypes.default.func
};
Map.contextTypes = (0, _defineProperty2.default)({}, _constants.MAP, _propTypes.default.object);
var GoogleMap = Map;
exports.GoogleMap = GoogleMap;
var _default = Map;
exports.default = _default;
var eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMapTypeIdChanged: "maptypeid_changed",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onRightClick: "rightclick",
  onTilesLoaded: "tilesloaded",
  onBoundsChanged: "bounds_changed",
  onCenterChanged: "center_changed",
  onClick: "click",
  onDrag: "drag",
  onHeadingChanged: "heading_changed",
  onIdle: "idle",
  onProjectionChanged: "projection_changed",
  onTiltChanged: "tilt_changed",
  onZoomChanged: "zoom_changed"
};
var updaterMap = {
  extraMapTypes: function extraMapTypes(instance, extra) {
    extra.forEach(function (it) {
      var _instance$mapTypes;

      return (_instance$mapTypes = instance.mapTypes).set.apply(_instance$mapTypes, (0, _toConsumableArray2.default)(it));
    });
  },
  center: function center(instance, _center) {
    instance.setCenter(_center);
  },
  clickableIcons: function clickableIcons(instance, _clickableIcons) {
    instance.setClickableIcons(_clickableIcons);
  },
  heading: function heading(instance, _heading) {
    instance.setHeading(_heading);
  },
  mapTypeId: function mapTypeId(instance, _mapTypeId) {
    instance.setMapTypeId(_mapTypeId);
  },
  options: function options(instance, _options) {
    instance.setOptions(_options);
  },
  streetView: function streetView(instance, _streetView) {
    instance.setStreetView(_streetView);
  },
  tilt: function tilt(instance, _tilt) {
    instance.setTilt(_tilt);
  },
  zoom: function zoom(instance, _zoom) {
    instance.setZoom(_zoom);
  }
};