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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/map.js */ \"./src/js/map.js\");\n/* harmony import */ var _js_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_map_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_show_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/show-menu.js */ \"./src/js/show-menu.js\");\n/* harmony import */ var _js_show_menu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_show_menu_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/slider.js */ \"./src/js/slider.js\");\n/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_slider_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function initMap() {\n\t\t  var mid = {lat: 59.938885, lng: 30.3232};\n\t\t  var markPosition = {lat: 59.938785, lng: 30.3232};\n\t\t  var map = new google.maps.Map(\n\t\t      document.getElementById('map'), {zoom: 16.7, center: mid});\n\t\t  if(window.innerWidth < 768) {\n\t\t  \tvar icon = \"../img/map-pin.min.png\";\n\t\t  } else {\n\t\t  \tvar icon = \"../img/map-pin.png\";\n\t\t  \tvar mid = {lat: 59.938775, lng: 30.323105}; \n\t\t  }\n\n\t\t  var marker = new google.maps.Marker({\n\t\t  \t  position: markPosition,\n\t\t  \t  map: map,\n\t\t  \t  title: 'Cat_energy',\n\t\t\t  icon: icon\n\t\t });\n\t\t}\ngoogle.maps.event.addDomListener(window, \"load\", initMap);\n\n//# sourceURL=webpack:///./src/js/map.js?");

/***/ }),

/***/ "./src/js/show-menu.js":
/*!*****************************!*\
  !*** ./src/js/show-menu.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var navMain = document.querySelector('.header__nav');\r\nvar navToggle = document.querySelector('.header__toggle');\r\n\r\nnavMain.classList.remove('header__nav--nojs');\r\n\r\nnavToggle.addEventListener('click', function () {\r\n\tif (navMain.classList.contains('header__nav--closed')) {\r\n\t\tnavMain.classList.remove('header__nav--closed');\r\n\t\tnavMain.classList.add('header__nav--opened');\r\n\t} else {\r\n\t\tnavMain.classList.add('header__nav--closed');\r\n\t\tnavMain.classList.remove('header__nav--opened');\r\n\t}\r\n});\n\n//# sourceURL=webpack:///./src/js/show-menu.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var divisor = document.getElementById(\"divisor\"),\r\n\tslider = document.getElementById(\"slider\");\r\n\r\n\r\nconsole.log('1');\r\n\r\nfunction moveDivisor() { \r\n\tdivisor.style.width = -(slider.value+\"%\");\r\n\tconsole.log('2');\r\n}\r\n\r\nslider.addEventListener('input', moveDivisor);\r\n\r\n// console.log(moreDvisor());\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/slider.js?");

/***/ })

/******/ });