"use strict";

var _tutorial = require("./modules/tutorial");

_tutorial.Tutorial.createTutorial();

window.onload = function () {
  document.getElementById('is-step-presentation').classList.add('show');
};

if (document.body.classList.contains('run-steps')) {
  window.onresize = function () {
    _tutorial.Tutorial.updatePosition();
  };
}

document.getElementById("init").addEventListener("click", function () {
  document.getElementById('is-step-presentation').classList.remove('show');

  if (!_tutorial.Tutorial.checkTutorial()) {
    _tutorial.Tutorial.initTutorial();
  }
});
document.getElementById("omit").addEventListener("click", function () {
  _tutorial.Tutorial.omitTutorial();
});