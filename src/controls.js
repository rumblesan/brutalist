
export function initControls(three) {
  const state = {
    moveForward: false,
    moveBackwars: false,
    moveLeft: false,
    moveRight: false,
    canJump: false,
    velocity: new three.Vector3(),
  };
  state.velocity.x = 0;
  state.velocity.y = 0;
  state.velocity.z = 0;
  document.addEventListener('keydown', (e) => onKeyDown(e, state), false);
  document.addEventListener('keyup', (e) => onKeyUp(e, state), false);
  return state;
}

function onKeyDown(e, state) {
  switch (e.keyCode) {
  case 38: // up
  case 87: // w
    state.moveForward = true;
    break;
  case 37: // left
  case 65: // a
    state.moveLeft = true;
    break;
  case 40: // down
  case 83: // s
    state.moveBackward = true;
    break;
  case 39: // right
  case 68: // d
    state.moveRight = true;
    break;
  /*
  case 32: // space
    if (state.canJump === true) velocity.y += 350;
    canJump = false;
    break;
  */
  }
}

function onKeyUp(e, state) {
  switch(e.keyCode) {
  case 38: // up
  case 87: // w
    state.moveForward = false;
    break;
  case 37: // left
  case 65: // a
    state.moveLeft = false;
    break;
  case 40: // down
  case 83: // s
    state.moveBackward = false;
    break;
  case 39: // right
  case 68: // d
    state.moveRight = false;
    break;
  }
}


export function updateControls(clock, viewcontrols, controls) {
  const delta = clock.getDelta();
  const walkingSpeed = 200.0;

  controls.velocity.x -= controls.velocity.x * 10.0 * delta;
  controls.velocity.z -= controls.velocity.z * 10.0 * delta;

  if (controls.moveForward) controls.velocity.z -= walkingSpeed * delta;
  if (controls.moveBackward) controls.velocity.z += walkingSpeed * delta;
  if (controls.moveLeft) controls.velocity.x -= walkingSpeed * delta;
  if (controls.moveRight) controls.velocity.x += walkingSpeed * delta;

  viewcontrols.getObject().translateX(controls.velocity.x * delta);
  viewcontrols.getObject().translateY(controls.velocity.y * delta);
  viewcontrols.getObject().translateZ(controls.velocity.z * delta);

}
