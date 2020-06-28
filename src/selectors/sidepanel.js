const ofSidepanel = f => state => {
  return f(state.sidepanel || {});
};

export const isOpen = ofSidepanel(s => s.open);
