const ofDetail = (f) => (state) => f(state.detail || {});

export const getData = ofDetail((s) => s.data);
export const isLoaded = ofDetail((s) => s.loaded);
export const isLoading = ofDetail((s) => s.loading);
