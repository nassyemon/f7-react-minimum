const ofDocuments = (f) => (state) => f(state.documents || {});

export const getData = ofDocuments((s) => s.data);
export const isLoaded = ofDocuments((s) => s.loaded);
export const isLoading = ofDocuments((s) => s.loading);
