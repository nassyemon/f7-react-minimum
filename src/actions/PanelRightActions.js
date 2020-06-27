import { navigateTo, goBack } from "framework7-redux";

import { goToForm } from "./FormActions";
import { goToAbout } from "./AboutActions";

export const openPanelRight = () => navigateTo("/panel-right/");
export const closePanelRight = () => goBack();

export const goToAboutPageFromRightPanel = () => {
  return dispatch => {
    dispatch(closePanelRight());
    dispatch(goToAbout());
  };
};

export const goToFormPageFromRightPanel = () => {
  return dispatch => {
    dispatch(closePanelRight());
    dispatch(goToForm());
  };
};
