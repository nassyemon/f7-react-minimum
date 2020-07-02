import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const styles = () => ({});

const Root = styled(Container)`
  position: fixed;
  min-height: 100vh;
  background-color: #ffffff;
  top: 100vh;
  z-index: 1500;
  ${({ theme }) => /* TODO: refactor */ `
  padding: ${theme.spacing(2)}px;
  margin-top: ${theme.spacing(7)}px;
  transition: ${theme.transitions.create(["transform"], {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.standard,
})}; `}
  transform: ${(props) =>
    `translate(${props.isSidePanelOpen ? props.sideBarWidth : "0"}, ${
    props.isLoggedIn ? "0" : "-100vh"
    })`};
`;

const TitleButtonContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
`;

const ContentContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const LoginButtonContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
`;

function Login({ onClickLogin, isSidePanelOpen, isLoggedIn, sideBarWidth }) {
  return (
    <Root
      isLoggedIn={isLoggedIn}
      isSidePanelOpen={isSidePanelOpen}
      sideBarWidth={sideBarWidth}
    >
      <Box>
        <TitleButtonContainer>
          <Typography variant="h4" component="h4">
            ログイン
          </Typography>
        </TitleButtonContainer>
        <ContentContainer />
        <LoginButtonContainer maxWidth="sm">
          <Button
            onClick={onClickLogin}
            variant="contained"
            size="large"
            color="primary"
          >
            ログイン
          </Button>
        </LoginButtonContainer>
      </Box>
    </Root>
  );
}

export default withStyles(styles)(Login);
