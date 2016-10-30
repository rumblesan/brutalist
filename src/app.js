
import {initControls, updateControls} from './controls';
import {initPointerLock} from './pointerlock';

export const init = (three, element) => {

  const scene = new three.Scene();
  const camera = new three.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  const renderer = new three.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  camera.position.y = 200;
  camera.position.z = 100;

  element.appendChild(renderer.domElement);

  const keycontrols = initControls(three, camera);

  const viewcontrols = initPointerLock(three, document.body, camera);

  scene.add(viewcontrols.getObject());

  const app = {
    scene, camera, renderer, keycontrols, viewcontrols
  };

  return app;
};

export const run = (app) => {

  const render = () => {
    requestAnimationFrame(render);
    app.renderer.render(app.scene, app.camera);
    updateControls(app.viewcontrols, app.keycontrols);
  };

  render();
};