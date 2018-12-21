"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tutorial = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var Tutorial = function (d) {
  var _start = function _start() {
    d.body.classList.add("run-steps");
  };

  var _setCookie = function _setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };

  var _getCookie = function _getCookie(name) {
    var name = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }

    return "";
  };

  var _stop = function _stop() {
    d.body.classList.remove("run-steps");

    _resetLayer();
  };

  var _getActiveElement = function _getActiveElement(el) {
    var obj = el.getBoundingClientRect(),
        layer = {
      x: obj.x,
      y: obj.y,
      width: obj.width,
      height: obj.height
    };
    console.log(obj);
    return layer;
  };

  var _getPositionTooltip = function _getPositionTooltip(el) {
    var _el = el.getBoundingClientRect(),
        _position = {
      x: _el.left,
      y: _el.top + _el.height + 10
    };

    return _position;
  };

  _setCurrentStep = function _setCurrentStep(currentStep) {
    document.documentElement.style.setProperty("--step", "'".concat(currentStep, "'"));
  };

  var _setPositionLayer = function _setPositionLayer(el) {
    var pos = _getActiveElement(el);

    var layer = d.getElementsByClassName("is-step-layer");
    layer[0].style.top = "".concat(pos.y, "px");
    layer[0].style.left = "".concat(pos.x, "px");
    layer[0].style.width = "".concat(pos.width, "px");
    layer[0].style.height = "".concat(pos.height, "px");
  };

  var _resetLayer = function _resetLayer() {
    var layer = d.getElementsByClassName("is-step-layer");
    layer[0].style.top = "0";
    layer[0].style.left = "0";
    layer[0].style.width = "0";
    layer[0].style.height = "0";
  };

  var _setPositionTooltip = function _setPositionTooltip(el) {
    var pos = _getPositionTooltip(el);

    var tooltip = d.getElementsByClassName("is-step-tooltip");
    console.log(el.offsetLeft);
    console.log(el.offsetTop);
    console.log(pos.x, pos.y);
    console.log(pos.left, pos.right);
    tooltip[0].style.top = "".concat(pos.y, "px");
    tooltip[0].style.left = "".concat(pos.x, "px");
  };

  var _setMessageTooltip = function _setMessageTooltip(currentStep) {
    var message = _getMessageElement(currentStep),
        title = _getTitleElement(currentStep);

    document.querySelectorAll("#is-step-message .title")[0].innerHTML = title;
    document.querySelectorAll("#is-step-message .message")[0].innerHTML = message;
  };

  var _getStepLength = function _getStepLength() {
    var query = d.querySelectorAll(".is-step");

    var forRemoves = _toConsumableArray(query);

    return forRemoves.length;
  };

  var _removeAllClass = function _removeAllClass() {
    var query = d.querySelectorAll(".is-step-active");

    var forRemoves = _toConsumableArray(query);

    forRemoves.map(function (removeIn) {
      removeIn.classList.remove("is-step-active");
    });
  };

  _getElementStep = function _getElementStep(currentStep) {
    return d.getElementById("step-".concat(currentStep));
  };

  _getMessageElement = function _getMessageElement(currentStep) {
    return d.getElementById("step-".concat(currentStep)).getAttribute("data-message");
  };

  _getTitleElement = function _getTitleElement(currentStep) {
    return d.getElementById("step-".concat(currentStep)).getAttribute("data-title");
  };

  _addClass = function _addClass(currentStep) {
    document.getElementById("step-".concat(currentStep)).classList.add("is-step-active");
  };

  _showPrevButton = function _showPrevButton(isActive) {
    if (!isActive) {
      d.getElementById("prev").style.display = "none";
    } else {
      d.getElementById("prev").style.display = "inline-block";
    }
  };

  _createTooltip = function _createTooltip(currentStep) {
    var el = _getElementStep(currentStep);

    _setMessageTooltip(currentStep);

    _setPositionTooltip(el);

    _setPositionLayer(el);

    _addClass(currentStep);

    _setCurrentStep(currentStep);
  };

  var currentStep = 0;
  var stepLength = 0;
  var isShowPrev = false;

  _nextStep = function _nextStep() {
    _removeAllClass();

    currentStep++;

    if (currentStep > stepLength) {
      console.log(currentStep, stepLength, "hola");

      _stop();
    } else {
      _showPrevButton(true);

      _createTooltip(currentStep);
    }
  };

  _prevStep = function _prevStep() {
    _removeAllClass();

    console.log(currentStep - 1);

    if (currentStep - 1 > 0) {
      currentStep--;

      _showPrevButton(currentStep - 1);

      _createTooltip(currentStep);
    }
  };

  updatePosition = function updatePosition() {
    var el = _getElementStep(currentStep);

    _setPositionTooltip(el);

    _setPositionLayer(el);
  };

  var createTutorial = function createTutorial() {
    console.log("tutorial is init");
    var parent = d.body;
    var mask = d.createElement("div");
    var layer = d.createElement("div");
    var tooltip = d.createElement("div");
    var message = d.createElement("div");
    var controls = d.createElement("div");
    var btnPrev = d.createElement("BUTTON");
    var btnNext = d.createElement("BUTTON");
    var tPrev = document.createTextNode("prev");
    var tNext = document.createTextNode("next");
    mask.classList.add("is-step-mask");
    layer.classList.add("is-step-layer");
    tooltip.classList.add("is-step-tooltip");
    message.id = "is-step-message";
    controls.classList.add("controls");
    btnPrev.id = "prev";
    btnNext.id = "next";
    btnPrev.appendChild(tPrev);
    btnNext.appendChild(tNext);
    btnNext.addEventListener("click", function () {
      _nextStep();
    });
    btnPrev.addEventListener("click", function () {
      _prevStep();
    });
    var messageHTML = document.createElement("SPAN"),
        titleHTML = document.createElement("SPAN");
    titleHTML.setAttribute("class", "title");
    messageHTML.setAttribute("class", "message");
    message.appendChild(titleHTML);
    message.appendChild(messageHTML);
    controls.appendChild(btnPrev);
    controls.appendChild(btnNext);
    tooltip.appendChild(message);
    tooltip.appendChild(controls);
    parent.appendChild(layer);
    parent.appendChild(mask);
    parent.appendChild(tooltip);
  };

  var initTutorial = function initTutorial() {
    currentStep = 1;
    stepLength = _getStepLength();

    _start();

    _createTooltip(currentStep);

    _showPrevButton(false);
  };

  var changeStateTutorial = function changeStateTutorial(state) {
    if (state) {
      _setCookie('tutorial', true, 10);
    } else {
      _setCookie('tutorial', false, 10);
    }
  };

  var checkTutorial = function checkTutorial() {
    return _getCookie('tutorial');
  };

  var omitTutorial = function omitTutorial() {
    changeStateTutorial(false);
  };

  return {
    initTutorial: initTutorial,
    createTutorial: createTutorial,
    updatePosition: updatePosition,
    changeStateTutorial: changeStateTutorial,
    checkTutorial: checkTutorial,
    omitTutorial: omitTutorial
  };
}(document);

exports.Tutorial = Tutorial;