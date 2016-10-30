/* global THREE */

import './three/vendor/PointerLockControls';
import './index.html';

import {createFloor} from './structures/floor';

import {init, run} from './app';


const app = init(THREE, document.body);

if (app !== null) {
  
  app.scene.add(createFloor(THREE));

  run(app);

}
