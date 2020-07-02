import React, { useCallback } from "react";
import { throttle } from "throttle-debounce";
import { Redirect } from "react-router";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';
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

const InputBox = styled(Box)`
  display: block;
  width: 100%;
`;

const TitleField = styled(TextField)`
  width: 100%;
`;



function SubmitPicture({ picture, title, sending, onTitleChange, onClickSubmitButton }) {
  // TODO: refactor
  const onTitleChangeThrottled = useCallback(throttle(1000, false, (title) => {
    onTitleChange(title);
  }), []);

  if (typeof picture?.uri !== "string") {
    return <Redirect to="/" />;
  }
  return (
    <Root>
      <ImageBox>
        <Image src={picture.uri} />
      </ImageBox>
      <InputBox>
        <form noValidate autoComplete="off">
          <TitleField id="standard-basic" label="タイトル" defaultValue={title} onChange={(event) => onTitleChangeThrottled(event.target.value)} />
        </form>
      </InputBox>
      <ButtonContainer maxWidth="sm">
        <Button
          onClick={onClickSubmitButton}
          variant="contained"
          size="large"
          color="primary"
          disabled={sending}
        >
          投稿
        </Button>
      </ButtonContainer>
    </Root>
  );
}

export default withStyles(styles)(SubmitPicture);
