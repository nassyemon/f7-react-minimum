const ofPicture = f => state => {
  return f(state.picture || {});
};
export const getPictures = ofPicture(s => s.pictures);
