
import checks from '../images/checks.png';

export function createFloor(three) {
  const geometry = new three.PlaneGeometry(2000, 2000, 5, 5);
  geometry.applyMatrix(new three.Matrix4().makeRotationX(- Math.PI/2));
  var texture = three.ImageUtils.loadTexture(checks);
  texture.wrapS = texture.wrapT = three.RepeatWrapping;
  texture.repeat.set(64, 64);
  const material = new three.MeshBasicMaterial({ color: 0xffffff, map: texture });
  return new three.Mesh(geometry, material);
}
