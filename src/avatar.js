
export const init = (three, height, walkingSpeed) => {

  const velocity = new three.Vector3(0, 0, 0);

  return {
    height,
    walkingSpeed,
    velocity
  };
};
