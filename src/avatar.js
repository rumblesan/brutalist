
export const init = (three, width, height, walkingSpeed) => {

  const velocity = new three.Vector3(0, 0, 0);

  return {
    width,
    height,
    walkingSpeed,
    velocity
  };
};
