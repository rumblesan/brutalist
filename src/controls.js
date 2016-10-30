
export function initControls() {
  const state = {
    moveForward: false,
    moveBackwars: false,
    moveLeft: false,
    moveRight: false,
    canJump: false
  };
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


export function updateControls(clock, avatar, viewcontrols, controls) {
  const delta = clock.getDelta();

  avatar.velocity.x -= avatar.velocity.x * 10.0 * delta;
  avatar.velocity.z -= avatar.velocity.z * 10.0 * delta;

  if (controls.moveForward) avatar.velocity.z -= avatar.walkingSpeed * delta;
  if (controls.moveBackward) avatar.velocity.z += avatar.walkingSpeed * delta;
  if (controls.moveLeft) avatar.velocity.x -= avatar.walkingSpeed * delta;
  if (controls.moveRight) avatar.velocity.x += avatar.walkingSpeed * delta;

  viewcontrols.getObject().translateX(avatar.velocity.x * delta);
  viewcontrols.getObject().translateY(avatar.velocity.y * delta);
  viewcontrols.getObject().translateZ(avatar.velocity.z * delta);

}
