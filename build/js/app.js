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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./header.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header__WEBPACK_IMPORTED_MODULE_0__);\n\n_header__WEBPACK_IMPORTED_MODULE_0___default.a.initEvents();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanM/OWE3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcblxuSGVhZGVyLmluaXRFdmVudHMoKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./header.js":
/*!*******************!*\
  !*** ./header.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var burgerTrigger = document.querySelector('.js-burger-trigger');\nvar userinfoTrigger = document.querySelector('.js-userinfo-trigger');\nvar burgerMenu = document.querySelector('.js-burger-menu');\nvar userInfo = document.querySelector('.js-userinfo');\nvar userInfoClose = document.querySelector('.js-userinfo-close');\n\nvar handleBurgerTriggerClick = function handleBurgerTriggerClick(e) {\n  e.preventDefault();\n  burgerMenu.classList.toggle('is-active');\n  burgerTrigger.classList.toggle('is-active');\n};\n\nvar handleUserinfoTriggerClick = function handleUserinfoTriggerClick(e) {\n  e.preventDefault();\n  userInfo.classList.toggle('is-active');\n};\n\nvar handleUserinfoCloseClick = function handleUserinfoCloseClick(e) {\n  e.preventDefault();\n  userInfo.classList.toggle('is-active');\n};\n\nfunction initEvents() {\n  burgerTrigger.addEventListener('click', handleBurgerTriggerClick);\n  userinfoTrigger.addEventListener('click', handleUserinfoTriggerClick);\n  userInfoClose.addEventListener('click', handleUserinfoCloseClick);\n}\n\nmodule.exports = {\n  initEvents: initEvents\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWFkZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWFkZXIuanM/N2MyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidXJnZXJUcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWJ1cmdlci10cmlnZ2VyJyk7XG5jb25zdCB1c2VyaW5mb1RyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdXNlcmluZm8tdHJpZ2dlcicpO1xuY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1idXJnZXItbWVudScpO1xuY29uc3QgdXNlckluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdXNlcmluZm8nKTtcbmNvbnN0IHVzZXJJbmZvQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdXNlcmluZm8tY2xvc2UnKTtcblxuY29uc3QgaGFuZGxlQnVyZ2VyVHJpZ2dlckNsaWNrID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBidXJnZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICBidXJnZXJUcmlnZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xufTtcblxuY29uc3QgaGFuZGxlVXNlcmluZm9UcmlnZ2VyQ2xpY2sgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHVzZXJJbmZvLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xufTtcblxuY29uc3QgaGFuZGxlVXNlcmluZm9DbG9zZUNsaWNrID0gKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB1c2VySW5mby5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbn07XG5cbmZ1bmN0aW9uIGluaXRFdmVudHMoKSB7XG4gIGJ1cmdlclRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVCdXJnZXJUcmlnZ2VyQ2xpY2spO1xuICB1c2VyaW5mb1RyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVVc2VyaW5mb1RyaWdnZXJDbGljayk7XG4gIHVzZXJJbmZvQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVVc2VyaW5mb0Nsb3NlQ2xpY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgaW5pdEV2ZW50cyB9O1xuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./header.js\n");

/***/ })

/******/ });