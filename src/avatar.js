
export const init = (three, height, walkingspeed) => {

  const velocity = new three.Vector3(0, 0, 0);

  return {
    height,
    walkingspeed,
    velocity
  };
};
