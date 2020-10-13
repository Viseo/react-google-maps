"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MarkerClusterer = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _markerClustererPlus = _interopRequireDefault(require("marker-clusterer-plus"));

var _MapChildHelper = require("../../utils/MapChildHelper");

var _constants = require("../../constants");

var _MarkerClusterer$chil;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * A wrapper around `MarkerClusterer`
 *
 * @see https://github.com/mahnunchik/markerclustererplus/blob/master/docs/reference.html
 */
var MarkerClusterer = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2.default)(MarkerClusterer, _React$PureComponent);

  var _super = _createSuper(MarkerClusterer);

  /*
   * @see https://github.com/mahnunchik/markerclustererplus/blob/master/docs/reference.html
   */
  function MarkerClusterer(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, MarkerClusterer);
    _this = _super.call(this, props, context);
    var markerClusterer = new _markerClustererPlus.default();
    (0, _MapChildHelper.construct)(MarkerClusterer.propTypes, updaterMap, _this.props, markerClusterer);
    markerClusterer.setMap(_this.context[_constants.MAP]);
    _this.state = (0, _defineProperty2.default)({}, _constants.MARKER_CLUSTERER, markerClusterer);
    return _this;
  }

  (0, _createClass2.default)(MarkerClusterer, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _ref;

      var markerClusterer = this.state[_constants.MARKER_CLUSTERER];
      return _ref = {}, (0, _defineProperty2.default)(_ref, _constants.ANCHOR, markerClusterer), (0, _defineProperty2.default)(_ref, _constants.MARKER_CLUSTERER, markerClusterer), _ref;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _MapChildHelper.componentDidMount)(this, this.state[_constants.MARKER_CLUSTERER], eventMap);

      if (this.props.fitMarkers) {
        this.fitToMarkers();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      (0, _MapChildHelper.componentDidUpdate)(this, this.state[_constants.MARKER_CLUSTERER], eventMap, updaterMap, prevProps);

      this.state[_constants.MARKER_CLUSTERER].repaint();

      var _this$props = this.props,
          fitMarkers = _this$props.fitMarkers,
          children = _this$props.children;
      var prevFitMarkers = prevProps.fitMarkers,
          prevChildren = prevProps.children;

      if (fitMarkers) {
        if (prevFitMarkers !== fitMarkers || children !== prevChildren) {
          this.fitToMarkers();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _MapChildHelper.componentWillUnmount)(this);
      var markerClusterer = this.state[_constants.MARKER_CLUSTERER];

      if (markerClusterer) {
        markerClusterer.setMap(null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/_react.default.createElement("div", null, children);
    }
  }, {
    key: "fitToMarkers",
    value: function fitToMarkers() {
      var clusterer = this.state[_constants.MARKER_CLUSTERER];
      var map = this.context[_constants.MAP];
      var markers = clusterer.getMarkers();

      if (!markers.length) {
        return;
      }

      var bounds = new google.maps.LatLngBounds();
      markers.forEach(function (m) {
        return bounds.extend(m.getPosition());
      });
      map.fitBounds(bounds);
      map.panToBounds(bounds);
    }
  }]);
  return MarkerClusterer;
}(_react.default.PureComponent);

exports.MarkerClusterer = MarkerClusterer;
MarkerClusterer.propTypes = {
  /**
   * @type boolean
   */
  defaultAverageCenter: _propTypes.default.bool,

  /**
   * @type number
   */
  defaultBatchSizeIE: _propTypes.default.number,

  /**
   * @type number
   */
  defaultBatchSize: _propTypes.default.number,

  /**
   * @type function
   */
  defaultCalculator: _propTypes.default.func,

  /**
   * @type string
   */
  defaultClusterClass: _propTypes.default.string,

  /**
   * @type boolean
   */
  defaultEnableRetinaIcons: _propTypes.default.bool,

  /**
   * @type number
   */
  defaultGridSize: _propTypes.default.number,

  /**
   * @type boolean
   */
  defaultIgnoreHidden: _propTypes.default.bool,

  /**
   * @type string
   */
  defaultImageExtension: _propTypes.default.string,

  /**
   * @type string
   */
  defaultImagePath: _propTypes.default.string,

  /**
   * @type Array
   */
  defaultImageSizes: _propTypes.default.array,

  /**
   * @type number
   */
  defaultMaxZoom: _propTypes.default.number,

  /**
   * @type number
   */
  defaultMinimumClusterSize: _propTypes.default.number,

  /**
   * @type Array
   */
  defaultStyles: _propTypes.default.array,

  /**
   * @type string
   */
  defaultTitle: _propTypes.default.string,

  /**
   * @type boolean
   */
  defaultZoomOnClick: _propTypes.default.bool,

  /**
   * @type boolean
   */
  averageCenter: _propTypes.default.bool,

  /**
   * @type number
   */
  batchSizeIE: _propTypes.default.number,

  /**
   * @type number
   */
  batchSize: _propTypes.default.number,

  /**
   * @type function
   */
  calculator: _propTypes.default.func,

  /**
   * @type string
   */
  clusterClass: _propTypes.default.string,

  /**
   * @type boolean
   */
  enableRetinaIcons: _propTypes.default.bool,

  /**
   * @type boolean
   */
  fitMarkers: _propTypes.default.bool,

  /**
   * @type number
   */
  gridSize: _propTypes.default.number,

  /**
   * @type boolean
   */
  ignoreHidden: _propTypes.default.bool,

  /**
   * @type string
   */
  imageExtension: _propTypes.default.string,

  /**
   * @type string
   */
  imagePath: _propTypes.default.string,

  /**
   * @type Array
   */
  imageSizes: _propTypes.default.array,

  /**
   * @type number
   */
  maxZoom: _propTypes.default.number,

  /**
   * @type number
   */
  minimumClusterSize: _propTypes.default.number,

  /**
   * @type Array
   */
  styles: _propTypes.default.array,

  /**
   * @type string
   */
  title: _propTypes.default.string,

  /**
   * @type boolean
   */
  zoomOnClick: _propTypes.default.bool,

  /**
   * function
   */
  onClick: _propTypes.default.func,

  /**
   * function
   */
  onClusteringBegin: _propTypes.default.func,

  /**
   * function
   */
  onClusteringEnd: _propTypes.default.func,

  /**
   * function
   */
  onMouseOut: _propTypes.default.func,

  /**
   * function
   */
  onMouseOver: _propTypes.default.func
};
MarkerClusterer.contextTypes = (0, _defineProperty2.default)({}, _constants.MAP, _propTypes.default.object);
MarkerClusterer.childContextTypes = (_MarkerClusterer$chil = {}, (0, _defineProperty2.default)(_MarkerClusterer$chil, _constants.ANCHOR, _propTypes.default.object), (0, _defineProperty2.default)(_MarkerClusterer$chil, _constants.MARKER_CLUSTERER, _propTypes.default.object), _MarkerClusterer$chil);
var _default = MarkerClusterer;
exports.default = _default;
var eventMap = {
  onClick: "click",
  onClusteringBegin: "clusteringbegin",
  onClusteringEnd: "clusteringend",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover"
};
var updaterMap = {
  averageCenter: function averageCenter(instance, _averageCenter) {
    instance.setAverageCenter(_averageCenter);
  },
  batchSizeIE: function batchSizeIE(instance, _batchSizeIE) {
    instance.setBatchSizeIE(_batchSizeIE);
  },
  batchSize: function batchSize(instance, _batchSize) {
    instance.setBatchSize(_batchSize);
  },
  calculator: function calculator(instance, _calculator) {
    instance.setCalculator(_calculator);
  },
  clusterClass: function clusterClass(instance, _clusterClass) {
    instance.setClusterClass(_clusterClass);
  },
  enableRetinaIcons: function enableRetinaIcons(instance, _enableRetinaIcons) {
    instance.setEnableRetinaIcons(_enableRetinaIcons);
  },
  gridSize: function gridSize(instance, _gridSize) {
    instance.setGridSize(_gridSize);
  },
  ignoreHidden: function ignoreHidden(instance, _ignoreHidden) {
    instance.setIgnoreHidden(_ignoreHidden);
  },
  imageExtension: function imageExtension(instance, _imageExtension) {
    instance.setImageExtension(_imageExtension);
  },
  imagePath: function imagePath(instance, _imagePath) {
    instance.setImagePath(_imagePath);
  },
  imageSizes: function imageSizes(instance, _imageSizes) {
    instance.setImageSizes(_imageSizes);
  },
  maxZoom: function maxZoom(instance, _maxZoom) {
    instance.setMaxZoom(_maxZoom);
  },
  minimumClusterSize: function minimumClusterSize(instance, _minimumClusterSize) {
    instance.setMinimumClusterSize(_minimumClusterSize);
  },
  styles: function styles(instance, _styles) {
    instance.setStyles(_styles);
  },
  title: function title(instance, _title) {
    instance.setTitle(_title);
  },
  zoomOnClick: function zoomOnClick(instance, _zoomOnClick) {
    instance.setZoomOnClick(_zoomOnClick);
  }
};