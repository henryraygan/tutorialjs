var Tutorial = (function() {
  const _start = () => {
    document.body.classList.add("run-steps");
  };

  const _stop = () => {
    document.body.classList.remove("run-steps");
    _resetLayer();
  };

  const _getActiveElement = el => {
    const obj = el.getBoundingClientRect();
    const layer = { x: obj.x, y: obj.y, width: obj.width, height: obj.height };
    return layer;
  };

  const _getPositionTooltip = el => {
    const _el = el.getBoundingClientRect(),
      _position = { x: _el.x, y: _el.y };
    return _position;
  };

  const _setPositionLayer = el => {
    const pos = _getActiveElement(el);
    const layer = document.getElementsByClassName("is-step-layer");
    layer[0].style.top = `${pos.y}px`;
    layer[0].style.left = `${pos.x}px`;
    layer[0].style.width = `${pos.width}px`;
    layer[0].style.height = `${pos.height}px`;
  };

  const _resetLayer = () => {
    const layer = document.getElementsByClassName("is-step-layer");
    layer[0].style.top = "0";
    layer[0].style.left = "0";
    layer[0].style.width = "0";
    layer[0].style.height = "0";
  };

  const _setPositionTooltip = el => {
    const pos = _getPositionTooltip(el);
    const tooltip = document.getElementsByClassName("is-step-tooltip");
    tooltip[0].style.top = `0`;
    tooltip[0].style.left = `0`;
  };

  const _setMessageTooltip = message => {
    document.getElementById("is-step-message").innerHTML = message;
  };

  const _getStepLength = () => {
    const query = document.querySelectorAll(".is-step");
    const forRemoves = [...query];
    return forRemoves.length;
  };

  const _removeAllClass = () => {
    const query = document.querySelectorAll(".is-step-active");
    const forRemoves = [...query];
    forRemoves.map(removeIn => {
      removeIn.classList.remove("is-step-active");
    });
  };

  _getElementStep = currentStep =>
    document.getElementById(`step-${currentStep}`);

  _addClass = currentStep => {
    document
      .getElementById(`step-${currentStep}`)
      .classList.add("is-step-active");
  };

  _createTooltip = currentStep => {
    const el = getElementStep(currentStep);
    _setMessageTooltip(el.getAttribute("data-message"));
    _setPositionTooltip(el);
    _setPositionLayer(el);
    _addClass(currentStep);
  };

  let currentStep = 0;
  let stepLength = 0;

  _nextStep = () => {
    _removeAllClass();
    currentStep++;
    if (currentStep > stepLength) {
      stop();
    } else {
      checkStep(currentStep);
      createTooltip(currentStep);
    }
  };

  _prevStep = () => {
    _removeAllClass();
    console.log(currentStep - 1);
    if (currentStep - 1 > 0) {
      currentStep--;
      createTooltip(currentStep);
    } else {
    }
  };

  const createTutorial = () => {
    console.log("tutorial is init");

    const parent = document.getElementById("tutorial-steps");

    const mask = document.createElement("div");
    mask.classList.add("is-step-mask");

    const layer = document.createElement("div");
    layer.classList.add("is-step-layer");

    const tooltip = document.createElement("div");
    tooltip.classList.add("is-step-tooltip");

    const message = document.createElement("div");
    message.classList.add("is-step-message");

    const controls = document.createElement("div");
    controls.classList.add("controls");

    const btnPrev = document.createElement("BUTTON");
    btnPrev.id = "prev";
    btnPrev.onclick = prevStep();

    const btnNext = document.createElement("BUTTON");
    btnNext.id = "next";
    btnNext.onclick = nextStep();

    controls.appendChild(btnPrev);
    controls.appendChild(btnNext);

    tooltip.appendChild(message);
    tooltip.appendChild(controls);

    parent.appendChild(layer);
    parent.appendChild(mask);
    parent.appendChild(tooltip);
  };

  const initTutorial = () => {
    currentStep = 1;
    stepLength = _getStepLength();
    _start();
    _createTooltip(currentStep);
  };

  return {
    initTutorial,
    createTutorial
  };
})();
