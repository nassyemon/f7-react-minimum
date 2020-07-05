const ofToast = (f) => (state) => f(state.toast || {});

export const isVisible = ofToast((s) => s.visible);
export const getMessage = ofToast((s) => s.message);
export const getType = ofToast((s) => s.type);
