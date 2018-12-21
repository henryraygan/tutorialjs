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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tutorial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tutorial */ \"./src/modules/tutorial.js\");\n\n_modules_tutorial__WEBPACK_IMPORTED_MODULE_0__[\"Tutorial\"].create();\n\nif (document.body.classList.contains('run-steps')) {\n  window.onresize = function () {\n    _modules_tutorial__WEBPACK_IMPORTED_MODULE_0__[\"Tutorial\"].updatePosition();\n  };\n}\n\ndocument.getElementById(\"init\").addEventListener(\"click\", function () {\n  _modules_tutorial__WEBPACK_IMPORTED_MODULE_0__[\"Tutorial\"].init();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/tutorial.js":
/*!*********************************!*\
  !*** ./src/modules/tutorial.js ***!
  \*********************************/
/*! exports provided: Tutorial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tutorial\", function() { return Tutorial; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar Tutorial = function (d) {\n  var _start = function _start() {\n    d.body.classList.add(\"run-steps\");\n  };\n\n  var _setCookie = function _setCookie(name, value, days) {\n    var d = new Date();\n    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);\n    var expires = \"expires=\" + d.toUTCString();\n    document.cookie = name + \"=\" + value + \";\" + expires + \";path=/\";\n  };\n\n  var _getCookie = function _getCookie(name) {\n    var name = name + \"=\";\n    var decodedCookie = decodeURIComponent(document.cookie);\n    var ca = decodedCookie.split(';');\n\n    for (var i = 0; i < ca.length; i++) {\n      var c = ca[i];\n\n      while (c.charAt(0) == ' ') {\n        c = c.substring(1);\n      }\n\n      if (c.indexOf(name) == 0) {\n        return c.substring(name.length, c.length);\n      }\n    }\n\n    return \"\";\n  };\n\n  var _stop = function _stop() {\n    d.body.classList.remove(\"run-steps\");\n\n    _resetLayer();\n  };\n\n  var _getActiveElement = function _getActiveElement(el) {\n    var obj = el.getBoundingClientRect(),\n        layer = {\n      x: obj.x,\n      y: obj.y,\n      width: obj.width,\n      height: obj.height\n    };\n    return layer;\n  };\n\n  var _getPositionTooltip = function _getPositionTooltip(el) {\n    var e = document.body,\n        i = document.documentElement,\n        n = window.pageYOffset || i.scrollTop || e.scrollTop,\n        o = window.pageXOffset || i.scrollLeft || e.scrollLeft,\n        s = el.getBoundingClientRect();\n    var _position = {\n      top: Math.abs(s.x != 0 ? s.top + n + s.height : s.top + n - s.height * 3),\n      width: Math.abs(s.width),\n      height: Math.abs(s.height),\n      left: Math.abs(s.left + o)\n    };\n    console.log(_position);\n    console.log(s);\n    return _position; // const _el = el.getBoundingClientRect(),\n    //   _position = {\n    //     x: _el.left,\n    //     y: _el.top + _el.height + 10\n    //   };\n    // return _position;\n  };\n\n  var _setCurrentStep = function _setCurrentStep(currentStep) {\n    document.documentElement.style.setProperty(\"--step\", \"'\".concat(currentStep, \"'\"));\n  };\n\n  var _setPositionLayer = function _setPositionLayer(el) {\n    var pos = _getActiveElement(el);\n\n    var layer = d.getElementsByClassName(\"is-step-layer\");\n    layer[0].style.top = \"\".concat(Math.abs(pos.y), \"px\");\n    layer[0].style.left = \"\".concat(Math.abs(pos.x), \"px\");\n    layer[0].style.width = \"\".concat(Math.abs(pos.width), \"px\");\n    layer[0].style.height = \"\".concat(Math.abs(pos.height), \"px\");\n  };\n\n  var _resetLayer = function _resetLayer() {\n    var layer = d.getElementsByClassName(\"is-step-layer\");\n    layer[0].style.top = \"0\";\n    layer[0].style.left = \"0\";\n    layer[0].style.width = \"0\";\n    layer[0].style.height = \"0\";\n  };\n\n  var _scrollIn = function _scrollIn(id, d, del) {\n    var TIMER_SCROLL;\n\n    function scroll(id, d, del) {\n      // Scroll the element.\n      id.scrollLeft += d; // Perform a delay before recursing this function again.\n\n      TIMER_SCROLL = setTimeout(\"scroll('\" + id + \"',\" + d + \", \" + del + \");\", del);\n    }\n  };\n\n  var _setPositionTooltip = function _setPositionTooltip(el) {\n    var pos = _getPositionTooltip(el);\n\n    var tooltip = d.getElementsByClassName(\"is-step-tooltip\")[0];\n    tooltip.style.top = \"\".concat(pos.top, \"px\");\n    tooltip.style.left = \"\".concat(pos.left, \"px\");\n    tooltip.style.marginTop = \"20px\";\n  };\n\n  var _setMessageTooltip = function _setMessageTooltip(currentStep) {\n    var message = _getMessageElement(currentStep),\n        title = _getTitleElement(currentStep);\n\n    document.querySelectorAll(\"#is-step-message .title\")[0].innerHTML = title;\n    document.querySelectorAll(\"#is-step-message .message\")[0].innerHTML = message;\n  };\n\n  var _getStepLength = function _getStepLength() {\n    var query = d.querySelectorAll(\".is-step\");\n\n    var forRemoves = _toConsumableArray(query);\n\n    return forRemoves.length;\n  };\n\n  var _removeAllClass = function _removeAllClass() {\n    var query = d.querySelectorAll(\".is-step-active\");\n\n    var forRemoves = _toConsumableArray(query);\n\n    forRemoves.map(function (removeIn) {\n      removeIn.classList.remove(\"is-step-active\");\n    });\n  };\n\n  var _getElementStep = function _getElementStep(currentStep) {\n    return d.getElementById(\"step-\".concat(currentStep));\n  };\n\n  var _getMessageElement = function _getMessageElement(currentStep) {\n    return d.getElementById(\"step-\".concat(currentStep)).getAttribute(\"data-message\");\n  };\n\n  var _getTitleElement = function _getTitleElement(currentStep) {\n    return d.getElementById(\"step-\".concat(currentStep)).getAttribute(\"data-title\");\n  };\n\n  var _addClass = function _addClass(currentStep) {\n    document.getElementById(\"step-\".concat(currentStep)).classList.add(\"is-step-active\");\n  };\n\n  var _showPrevButton = function _showPrevButton(isActive) {\n    if (!isActive) {\n      d.getElementById(\"prev\").style.display = \"none\";\n    } else {\n      d.getElementById(\"prev\").style.display = \"inline-block\";\n    }\n  };\n\n  var _createTooltip = function _createTooltip(currentStep) {\n    var el = _getElementStep(currentStep);\n\n    _setMessageTooltip(currentStep);\n\n    _setPositionTooltip(el);\n\n    _setPositionLayer(el);\n\n    _addClass(currentStep);\n\n    _setCurrentStep(currentStep);\n  };\n\n  var currentStep = 0;\n  var stepLength = 0;\n  var isShowPrev = false;\n\n  var _nextStep = function _nextStep() {\n    _removeAllClass();\n\n    currentStep++;\n\n    if (currentStep > stepLength) {\n      _stop();\n    } else {\n      _showPrevButton(true);\n\n      _createTooltip(currentStep);\n    }\n  };\n\n  var _prevStep = function _prevStep() {\n    _removeAllClass();\n\n    console.log(currentStep - 1);\n\n    if (currentStep - 1 > 0) {\n      currentStep--;\n\n      _showPrevButton(currentStep - 1);\n\n      _createTooltip(currentStep);\n    }\n  };\n\n  var updatePosition = function updatePosition() {\n    var el = _getElementStep(currentStep);\n\n    _setPositionTooltip(el);\n\n    _setPositionLayer(el);\n  };\n\n  var create = function create() {\n    console.log(\"tutorial is init\");\n    var parent = d.body;\n    var mask = d.createElement(\"div\");\n    var layer = d.createElement(\"div\");\n    var tooltip = d.createElement(\"div\");\n    var message = d.createElement(\"div\");\n    var controls = d.createElement(\"div\");\n    var btnPrev = d.createElement(\"BUTTON\");\n    var btnNext = d.createElement(\"BUTTON\");\n    var tPrev = document.createTextNode(\"prev\");\n    var tNext = document.createTextNode(\"next\");\n    mask.classList.add(\"is-step-mask\");\n    layer.classList.add(\"is-step-layer\");\n    tooltip.classList.add(\"is-step-tooltip\");\n    message.id = \"is-step-message\";\n    controls.classList.add(\"controls\");\n    btnPrev.id = \"prev\";\n    btnNext.id = \"next\";\n    btnPrev.appendChild(tPrev);\n    btnNext.appendChild(tNext);\n    btnNext.addEventListener(\"click\", function () {\n      _nextStep();\n    });\n    btnPrev.addEventListener(\"click\", function () {\n      _prevStep();\n    });\n    var messageHTML = document.createElement(\"SPAN\"),\n        titleHTML = document.createElement(\"SPAN\");\n    titleHTML.setAttribute(\"class\", \"title\");\n    messageHTML.setAttribute(\"class\", \"message\");\n    message.appendChild(titleHTML);\n    message.appendChild(messageHTML);\n    controls.appendChild(btnPrev);\n    controls.appendChild(btnNext);\n    tooltip.appendChild(message);\n    tooltip.appendChild(controls);\n    parent.appendChild(layer);\n    parent.appendChild(mask);\n    parent.appendChild(tooltip);\n  };\n\n  var init = function init() {\n    currentStep = 1;\n    stepLength = _getStepLength();\n\n    _start();\n\n    _createTooltip(currentStep);\n\n    _showPrevButton(false);\n  };\n\n  var changeStateTutorial = function changeStateTutorial(state) {\n    if (state) {\n      _setCookie('tutorial', true, 10);\n    } else {\n      _setCookie('tutorial', false, 10);\n    }\n  };\n\n  var checkTutorial = function checkTutorial() {\n    return _getCookie('tutorial');\n  };\n\n  var omitTutorial = function omitTutorial() {\n    changeStateTutorial(false);\n  };\n\n  return {\n    init: init,\n    create: create,\n    updatePosition: updatePosition,\n    changeStateTutorial: changeStateTutorial,\n    checkTutorial: checkTutorial,\n    omitTutorial: omitTutorial\n  };\n}(document);\n\n//# sourceURL=webpack:///./src/modules/tutorial.js?");

/***/ })

/******/ });