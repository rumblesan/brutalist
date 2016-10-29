/* global THREE */

import './PointerLockControls';

import {createFloor} from './floor';
import {initPointerLock} from './pointerlock';
import {initControls, updateControls} from './controls';

import './index.html';


const init = (three, element) => {

  const scene = new three.Scene();
  const camera = new three.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  const renderer = new three.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight); // 

  camera.position.y = 200;
  camera.position.z = 100;

  element.appendChild(renderer.domElement);

  const app = {
    scene, camera, renderer
  };

  return app;
};

const app = init(THREE, document.body);

if (app !== null) {
  
  const controls = initControls(THREE, app.camera);

  const viewcontrols = initPointerLock(THREE, document.body, app);

  app.scene.add(createFloor(THREE));

  app.scene.add(viewcontrols.getObject());


  const render = () => {
    requestAnimationFrame(render);
    app.renderer.render(app.scene, app.camera);
    updateControls(viewcontrols, controls);
  };
  render();

}
