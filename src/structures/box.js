
import checks from '../images/checks.png';

export function createBox(three) {

  const geometry = new three.BoxGeometry(400, 40, 400, 50, 50, 50);
  geometry.translate(-400, 20, -400);

  var texture = three.ImageUtils.loadTexture(checks);
  texture.wrapS = texture.wrapT = three.RepeatWrapping;
  texture.repeat.set(640, 640);

  const material = new three.MeshBasicMaterial({ color: 0xffffff, map: texture });
  return new three.Mesh(geometry, material);
}
