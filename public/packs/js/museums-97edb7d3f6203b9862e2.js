/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/museums.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/museums.js":
/*!*****************************************!*\
  !*** ./app/javascript/packs/museums.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'mapbox-gl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
 // elements
// const paragraph = document.querySelector('p');
// display map

var showMap = function showMap(coordinates) {
  !(function webpackMissingModule() { var e = new Error("Cannot find module 'mapbox-gl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).accessToken = 'pk.eyJ1IjoiY2FlMjI0IiwiYSI6ImNrd2x5MXZyeDA2Z2YydW8yYzh1ZWF0bDIifQ.mpwuLzHJ0OQINNb38nlgAw';
  var map = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'mapbox-gl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: coordinates,
    zoom: 12
  });
  new !(function webpackMissingModule() { var e = new Error("Cannot find module 'mapbox-gl'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).Marker().setLngLat(coordinates).addTo(map);
};

var submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  var coordinates = document.querySelector('#text').value;
  var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/museum.json?types=poi&proximity=-74.70850,40.78375&limit=5&access_token=pk.eyJ1IjoiY2FlMjI0IiwiYSI6ImNrd2x5MXZyeDA2Z2YydW8yYzh1ZWF0bDIifQ.mpwuLzHJ0OQINNb38nlgAw";
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data); // paragraph.insertAdjacentHTML('beforeend', `<span id="coordinates">[${coordinates}]</span>`);
    // showMap(coordinates);
  });
});
fetch(url).then(function (response) {
  return response.json();
}).then(function (data) {
  console.log(data.features);
  console.log(data);
});

/***/ })

/******/ });
//# sourceMappingURL=museums-97edb7d3f6203b9862e2.js.map