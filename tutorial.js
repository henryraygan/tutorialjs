var Tutorial = (d => {
  const _start = () => {
    d.body.classList.add("run-steps");
  };


  const _setCookie = (name, value, days) => {
    var d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  const _getCookie = name => {
    var name = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  const _stop = () => {
    d.body.classList.remove("run-steps");
    _resetLayer();
  };

  const _getActiveElement = el => {
    const obj = el.getBoundingClientRect(),
      layer = {
        x: obj.x,
        y: obj.y,
        width: obj.width,
        height: obj.height
      };
    console.log(obj);
    return layer;
  };

  const _getPositionTooltip = el => {
    const _el = el.getBoundingClientRect(),
      _position = {
        x: _el.left,
        y: _el.top + _el.height + 10
      };
    return _position;
  };

  _setCurrentStep = currentStep => {
    document.documentElement.style.setProperty("--step", `'${currentStep}'`);
  };

  const _setPositionLayer = el => {
    const pos = _getActiveElement(el);
    const layer = d.getElementsByClassName("is-step-layer");
    layer[0].style.top = `${pos.y}px`;
    layer[0].style.left = `${pos.x}px`;
    layer[0].style.width = `${pos.width}px`;
    layer[0].style.height = `${pos.height}px`;
  };

  const _resetLayer = () => {
    const layer = d.getElementsByClassName("is-step-layer");
    layer[0].style.top = "0";
    layer[0].style.left = "0";
    layer[0].style.width = "0";
    layer[0].style.height = "0";
  };

  const _setPositionTooltip = el => {
    const pos = _getPositionTooltip(el);
    const tooltip = d.getElementsByClassName("is-step-tooltip");
    console.log(el.offsetLeft);
    console.log(el.offsetTop);
    console.log(pos.x, pos.y);
    console.log(pos.left, pos.right);
    tooltip[0].style.top = `${pos.y}px`;
    tooltip[0].style.left = `${pos.x}px`;
  };

  const _setMessageTooltip = currentStep => {
    const message = _getMessageElement(currentStep),
      title = _getTitleElement(currentStep);

    document.querySelectorAll("#is-step-message .title")[0].innerHTML = title;
    document.querySelectorAll("#is-step-message .message")[0].innerHTML = message;
  };

  const _getStepLength = () => {
    const query = d.querySelectorAll(".is-step");
    const forRemoves = [...query];
    return forRemoves.length;
  };

  const _removeAllClass = () => {
    const query = d.querySelectorAll(".is-step-active");
    const forRemoves = [...query];
    forRemoves.map(removeIn => {
      removeIn.classList.remove("is-step-active");
    });
  };

  _getElementStep = currentStep => d.getElementById(`step-${currentStep}`);

  _getMessageElement = currentStep =>
    d.getElementById(`step-${currentStep}`).getAttribute("data-message");

  _getTitleElement = currentStep =>
    d.getElementById(`step-${currentStep}`).getAttribute("data-title");

  _addClass = currentStep => {
    document
      .getElementById(`step-${currentStep}`)
      .classList.add("is-step-active");
  };

  _showPrevButton = isActive => {
    if (!isActive) {
      d.getElementById("prev").style.display = "none";
    } else {
      d.getElementById("prev").style.display = "inline-block";
    }
  };

  _createTooltip = currentStep => {
    const el = _getElementStep(currentStep);
    _setMessageTooltip(currentStep);
    _setPositionTooltip(el);
    _setPositionLayer(el);
    _addClass(currentStep);
    _setCurrentStep(currentStep);
  };

  let currentStep = 0;
  let stepLength = 0;
  let isShowPrev = false;

  _nextStep = () => {
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

  _prevStep = () => {
    _removeAllClass();
    console.log(currentStep - 1);
    if (currentStep - 1 > 0) {
      currentStep--;
      _showPrevButton(currentStep - 1);
      _createTooltip(currentStep);
    }
  };

  updatePosition = () => {
    const el = _getElementStep(currentStep);
    _setPositionTooltip(el);
    _setPositionLayer(el);
  };

  const createTutorial = () => {
    console.log("tutorial is init");

    const parent = d.body;

    const mask = d.createElement("div");
    const layer = d.createElement("div");
    const tooltip = d.createElement("div");
    const message = d.createElement("div");
    const controls = d.createElement("div");
    const btnPrev = d.createElement("BUTTON");
    const btnNext = d.createElement("BUTTON");
    const tPrev = document.createTextNode("prev");
    const tNext = document.createTextNode("next");

    mask.classList.add("is-step-mask");
    layer.classList.add("is-step-layer");
    tooltip.classList.add("is-step-tooltip");
    message.id = "is-step-message";
    controls.classList.add("controls");
    btnPrev.id = "prev";
    btnNext.id = "next";

    btnPrev.appendChild(tPrev);
    btnNext.appendChild(tNext);
    btnNext.addEventListener("click", () => {
      _nextStep();
    });
    btnPrev.addEventListener("click", () => {
      _prevStep();
    });

    const messageHTML = document.createElement("SPAN"),
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

  const initTutorial = () => {
    currentStep = 1;
    stepLength = _getStepLength();
    _start();
    _createTooltip(currentStep);
    _showPrevButton(false);
  };

  const changeStateTutorial = (state) => {
    if(state) {
      _setCookie('tutorial', true, 10);
    } else {
      _setCookie('tutorial', false, 10);
    }
  }


  return {
    initTutorial,
    createTutorial,
    updatePosition,
    changeStateTutorial
  };
})(document);

Tutorial.createTutorial();

window.onresize = () => {
  Tutorial.updatePosition();
};

document.getElementById("init").addEventListener("click", () => {
  Tutorial.initTutorial();
});


