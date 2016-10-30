
function checkForPointerLock() {
  return 'pointerLockElement' in document || 
         'mozPointerLockElement' in document || 
         'webkitPointerLockElement' in document;
}

export function initPointerLock(three, element, camera) {

  let viewcontrols = null;
  
  if (checkForPointerLock()) {

    viewcontrols = new three.PointerLockControls(camera);

    var pointerlockchange = function () {
      if (document.pointerLockElement === element ||
          document.mozPointerLockElement === element ||
          document.webkitPointerLockElement === element) {
        viewcontrols.enabled = true;
      } else {
        viewcontrols.enabled = false;
      }
    };

    var pointerlockerror = function () {
      element.innerHTML = 'PointerLock Error';
    };

    document.addEventListener('pointerlockchange', pointerlockchange, false);
    document.addEventListener('mozpointerlockchange', pointerlockchange, false);
    document.addEventListener('webkitpointerlockchange', pointerlockchange, false);

    document.addEventListener('pointerlockerror', pointerlockerror, false);
    document.addEventListener('mozpointerlockerror', pointerlockerror, false);
    document.addEventListener('webkitpointerlockerror', pointerlockerror, false);

    var requestPointerLock = function() {
      element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
      element.requestPointerLock();
    };
    element.addEventListener('click', requestPointerLock, false);
  } else {
    element.innerHTML = 'Bad browser; No pointer lock';
  }

  return viewcontrols;
}
