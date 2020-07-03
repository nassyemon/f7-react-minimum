import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const styles = () => ({});

const Root = styled(Container)`
  position: absolute;
  min-height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  top: 100vh;
  z-index: 1500;
  ${({ theme, noHeader }) => /* TODO: refactor */ `
  padding: ${theme.spacing(2)}px;
  margin-top: ${noHeader ? theme.spacing(7) : 0}px;
  transition: ${theme.transitions.create(["transform"], {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.standard,
})}; `}
  transform: ${(props) => `translateY(${props.isLoggedIn ? "0" : "-100vh"})`};
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

function Login({ onClickLogin, isLoggedIn }) {
  return (
    <Root
      isLoggedIn={isLoggedIn}
      noHeader={false}
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
