const ofSidepanel = f => state => {
  return f(state.documents || {});
};

export const getData = ofSidepanel(s => s.data);
export const isLoaded = ofSidepanel(s => s.loaded);
