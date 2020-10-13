"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.construct = construct;
exports.componentDidMount = componentDidMount;
exports.componentDidUpdate = componentDidUpdate;
exports.componentWillUnmount = componentWillUnmount;

var _lodash = _interopRequireDefault(require("lodash"));

/* global google */

/* eslint-disable no-param-reassign */
function rdcUncontrolledAndControlledProps(acc, value, key) {
  if (_lodash.default.has(acc.prevProps, key)) {
    var match = key.match(/^default(\S+)/);

    if (match) {
      var unprefixedKey = _lodash.default.lowerFirst(match[1]);

      if (!_lodash.default.has(acc.nextProps, unprefixedKey)) {
        acc.nextProps[unprefixedKey] = acc.prevProps[key];
      }
    } else {
      acc.nextProps[key] = acc.prevProps[key];
    }
  }

  return acc;
}

function applyUpdaterToNextProps(updaterMap, prevProps, nextProps, instance) {
  _lodash.default.forEach(updaterMap, function (fn, key) {
    var nextValue = nextProps[key];

    if (nextValue !== prevProps[key]) {
      fn(instance, nextValue);
    }
  });
}

function construct(propTypes, updaterMap, prevProps, instance) {
  var _$reduce = _lodash.default.reduce(propTypes, rdcUncontrolledAndControlledProps, {
    nextProps: {},
    prevProps: prevProps
  }),
      nextProps = _$reduce.nextProps;

  applyUpdaterToNextProps(updaterMap, {
    /* empty prevProps for construct */
  }, nextProps, instance);
}

function componentDidMount(component, instance, eventMap) {
  registerEvents(component, instance, eventMap);
}

function componentDidUpdate(component, instance, eventMap, updaterMap, prevProps) {
  component.unregisterAllEvents();
  applyUpdaterToNextProps(updaterMap, prevProps, component.props, instance);
  registerEvents(component, instance, eventMap);
}

function componentWillUnmount(component) {
  component.unregisterAllEvents();
}

function registerEvents(component, instance, eventMap) {
  var registeredList = _lodash.default.reduce(eventMap, function (acc, googleEventName, onEventName) {
    if (_lodash.default.isFunction(component.props[onEventName])) {
      acc.push(google.maps.event.addListener(instance, googleEventName, component.props[onEventName]));
    }

    return acc;
  }, []);

  component.unregisterAllEvents = _lodash.default.bind(_lodash.default.forEach, null, registeredList, unregisterEvent);
}

function unregisterEvent(registered) {
  google.maps.event.removeListener(registered);
}