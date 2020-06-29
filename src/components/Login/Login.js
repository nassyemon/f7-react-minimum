import React from "react";
import { Redirect } from "react-router";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const styles = theme => ({});

const Root = styled(Container)`
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


function Login({
  onClickLogin
}) {
  return (
    <Root> 
      <Box>
        <TitleButtonContainer>
          <Typography variant="h4" component="h4">
            ログイン
          </Typography>
          </TitleButtonContainer>
        <ContentContainer></ContentContainer>
        <LoginButtonContainer maxWidth="sm">
          <Button onClick={onClickLogin} variant="contained" size="large" color="primary">ログイン</Button>
        </LoginButtonContainer>
      </Box>
    </Root>
  );
}

export default withStyles(styles)(Login);
