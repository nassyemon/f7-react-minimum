import React from "react";
import { Redirect } from "react-router";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const styles = () => ({});

const Root = styled(Container)``;

const ImageBox = styled(Box)`
  display: block;
  max-width: 100%;
  max-height: 70vh;
  width: auto;
  height: auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

const ButtonContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
`;

function SubmitPicture({ picture, sending, onClickSubmitButton }) {
  if (typeof picture?.uri !== "string") {
    return <Redirect to="/" />;
  }
  return (
    <Root>
      <ImageBox>
        <Image src={picture.uri} />
      </ImageBox>
      <ButtonContainer maxWidth="sm">
        <Button
          onClick={onClickSubmitButton}
          variant="contained"
          size="large"
          color="primary"
        >
          投稿
        </Button>
      </ButtonContainer>
    </Root>
  );
}

export default withStyles(styles)(SubmitPicture);
