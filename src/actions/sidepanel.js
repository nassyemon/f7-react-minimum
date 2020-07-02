import { createAction } from "redux-actions";

export const TOGGLE_SIDEPANEL = "TOGGLE_SIDEPANEL";
export const CLOSE_SIDEPANEL = "CLOSE_SIDEPANEL";
export const OPEN_SIDEPANEL = "OPEN_SIDEPANEL";

export const toggleSidepanel = createAction(TOGGLE_SIDEPANEL);

export const openSidePanel = createAction(OPEN_SIDEPANEL);
export const closeSidepanel = createAction(CLOSE_SIDEPANEL);
