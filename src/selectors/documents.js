const ofSidepanel = (f) => (state) => f(state.documents || {});

export const getData = ofSidepanel((s) => s.data);
export const isLoaded = ofSidepanel((s) => s.loaded);
export const isLoading = ofSidepanel((s) => s.loading);
