import { Tutorial } from "./modules/Tutorial";

require('./css/tutorial.css')
require('./css/index.css')

Tutorial.create();

if(document.body.classList.contains('run-steps')) {
  window.onresize = () => {
    Tutorial.updatePosition();
  };
}
document.getElementById("init").addEventListener("click", () => {
  Tutorial.init()
});