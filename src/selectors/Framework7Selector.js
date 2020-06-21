const ofHistory = (f) => (state) => {
    return f(state.framework7?.routing?.history || {});
  }
  export const getHistoryMain = ofHistory(s => s.main);
  