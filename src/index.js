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
  console.log('click on button init')
});


document.getElementById("omit").addEventListener("click", () => {
  Tutorial.omitTutorial();
})