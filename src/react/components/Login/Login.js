import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const styles = () => ({});

const Root = styled(Container)`
  position: relative;
  min-height: 100%;
  background-color: #ffffff;
  padding: ${({ theme }) => theme.spacing(2)}px;
`;

const TitleButtonContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
`;

const ContentContainer = styled.div`
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
    <Root show={isLoggedIn ? 1 : 0} noheader={0}>
      <Box>
        <TitleButtonContainer>
          <Typography variant="h4" component="h4">
            ログイン
          </Typography>
        </TitleButtonContainer>
        <ContentContainer>
          <div /> {/* padding. */}
        </ContentContainer>
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
