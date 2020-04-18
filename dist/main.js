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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_formHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/formHandler */ \"./src/client/js/formHandler.js\");\n/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/base.scss */ \"./src/client/styles/base.scss\");\n/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_base_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/footer.scss */ \"./src/client/styles/footer.scss\");\n/* harmony import */ var _styles_footer_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/header.scss */ \"./src/client/styles/header.scss\");\n/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_header_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_resets_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/resets.scss */ \"./src/client/styles/resets.scss\");\n/* harmony import */ var _styles_resets_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_resets_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_form_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/form.scss */ \"./src/client/styles/form.scss\");\n/* harmony import */ var _styles_form_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_form_scss__WEBPACK_IMPORTED_MODULE_5__);\n\r\nalert = \"i do exist\"\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/client/index.js?");

/***/ }),

/***/ "./src/client/js/formHandler.js":
/*!**************************************!*\
  !*** ./src/client/js/formHandler.js ***!
  \**************************************/
/*! exports provided: handleSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleSubmit\", function() { return handleSubmit; });\nfunction handleSubmit(event) {\n    event.preventDefault()\n\n    // check what text was put into the form field\n    let formText = document.getElementById('name').value\n    checkForName(formText)\n\n    console.log(\"::: Form Submitted :::\")\n    fetch('http://localhost:8080/test')\n        .then(res => res.json())\n        .then(function(res) {\n            document.getElementById('results').innerHTML = res.message\n        })\n\n}\n\n//# sourceURL=webpack:///./src/client/js/formHandler.js?");

/***/ }),

/***/ "./src/client/styles/base.scss":
/*!*************************************!*\
  !*** ./src/client/styles/base.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:5)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> body {\\n|     display: flex;\\n|     flex-direction: column;\");\n\n//# sourceURL=webpack:///./src/client/styles/base.scss?");

/***/ }),

/***/ "./src/client/styles/footer.scss":
/*!***************************************!*\
  !*** ./src/client/styles/footer.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/client/styles/footer.scss?");

/***/ }),

/***/ "./src/client/styles/form.scss":
/*!*************************************!*\
  !*** ./src/client/styles/form.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:5)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> form {\\n|     border: 1px solid #545454;\\n|     border-radius: 3px;\");\n\n//# sourceURL=webpack:///./src/client/styles/form.scss?");

/***/ }),

/***/ "./src/client/styles/header.scss":
/*!***************************************!*\
  !*** ./src/client/styles/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// header {\n//     display: flex;\n//     justify-content: space-between;\n//     padding: 10px 40px;\n// }\n\n//# sourceURL=webpack:///./src/client/styles/header.scss?");

/***/ }),

/***/ "./src/client/styles/resets.scss":
/*!***************************************!*\
  !*** ./src/client/styles/resets.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (6:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| */\\n| \\n> * {\\n|     box-sizing: border-box;\\n| }\");\n\n//# sourceURL=webpack:///./src/client/styles/resets.scss?");

/***/ })

/******/ });