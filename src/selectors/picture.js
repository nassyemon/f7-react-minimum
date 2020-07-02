const ofPicture = (f) => (state) => f(state.picture || {});
export const getPictures = ofPicture((s) => s.pictures);

export const getLastPicture = ofPicture((s) =>
  s.pictures?.length > 0 ? s.pictures[0] : null
);
