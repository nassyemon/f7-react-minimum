import HomeContainer from "./containers/HomeContainer";
import AboutContainer from "./containers/AboutContainer";
import FormContainer from "./containers/FormContainer";
import DynamicRouteContainer from "./containers/DynamicRouteContainer";
import NotFoundContainer from "./containers/DefaultRouteContainer";
import PanelLeftContainer from "./containers/PanelLeftContainer";
import PanelRightContainer from "./containers/PanelRightContainer";
import LoginContainer from "./containers/LoginContainer";
import PopupContainer from "./containers/PopupContainer";
import CameraContainer from "./containers/CameraContainer";

export default [
  {
    path: "/login/",
    loginScreen: {
      component: LoginContainer,
    },
  },
  {
    path: "/",
    component: HomeContainer,
  },
  {
    path: "/panel-left/",
    panel: {
      component: PanelLeftContainer,
    },
  },
  {
    path: "/panel-right/",
    panel: {
      component: PanelRightContainer,
    },
  },
  {
    path: "/about/",
    component: AboutContainer,
  },
  {
    path: "/form/",
    component: FormContainer,
  },
  {
    path: "/dynamic-route/blog/:blogId/post/:postId/",
    component: DynamicRouteContainer,
  },
  {
    path: "/popup/",
    popup: {
      component: PopupContainer,
    },
  },
  {
    path: "/camera/",
    popup: {
      component: CameraContainer,
    },
  },
  {
    path: "(.*)",
    component: NotFoundContainer,
    loginScreen: {
      component: LoginContainer,
    },
  },
];
