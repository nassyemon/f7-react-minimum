const ofDocuments = (f) => (state) => f(state.documents || {});

export const getData = ofDocuments((s) => s.data);
export const isLoaded = ofDocuments((s) => s.loaded);
export const isLoading = ofDocuments((s) => s.loading);
export const isDeleting = ofDocuments((s) => s.deleting);
export const getSeleted = ofDocuments((s) => s.selected);
export const getMergedData = ofDocuments(({ data, selected }) => {
  if (!Array.isArray(data)) {
    return data;
  }
  return data.map((d) => ({ ...d, selected: selected.indexOf(d.id) > -1 }));
});
