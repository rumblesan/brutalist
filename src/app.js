
import {initControls, updateControls} from './controls';
import {initPointerLock} from './pointerlock';
import * as Avatar from './avatar';

export const init = (three, element, width, height) => {

  const scene = new three.Scene();
  const camera = new three.PerspectiveCamera(
    75,
    width / height,
    1,
    10000
  );
  const renderer = new three.WebGLRenderer();
  renderer.setSize(width, height);

  element.appendChild(renderer.domElement);

  const keycontrols = initControls();

  const viewcontrols = initPointerLock(three, document.body, camera);

  scene.add(viewcontrols.getObject());

  const clock = new three.Clock();

  const avatar = Avatar.init(three, 40, 180, 400);

  camera.position.y = avatar.height;

  const app = {
    scene, camera, renderer,
    clock,
    keycontrols, viewcontrols,
    avatar
  };

  return app;
};

export const run = (three, app) => {

  const raycaster = new three.Raycaster();

  const render = () => {
    requestAnimationFrame(render);
    app.renderer.render(app.scene, app.camera);
    updateControls(app.clock, app.avatar, app.viewcontrols, app.keycontrols);
    raycaster.set(app.camera.position, new three.Vector3(0, -1, 0));
    const intersects = raycaster.intersectObjects(app.scene.children);
    console.log(intersects.map((o) => o.distance));
  };

  render();
};
