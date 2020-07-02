const ofSidepanel = (f) => (state) => f(state.sidepanel || {});

export const isOpen = ofSidepanel((s) => s.open);
