import { Tutorial } from "./modules/tutorial";

Tutorial.createTutorial();


window.onload = () => {
  document.getElementById('is-step-presentation').classList.add('show')
}


if(document.body.classList.contains('run-steps')) {
  window.onresize = () => {
    Tutorial.updatePosition();
  };
}

document.getElementById("init").addEventListener("click", () => {
  document.getElementById('is-step-presentation').classList.remove('show')
  if(!Tutorial.checkTutorial()) {
    Tutorial.initTutorial();
  }
});


document.getElementById("omit").addEventListener("click", () => {
  Tutorial.omitTutorial();
})