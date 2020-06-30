import React from "react";
import { Redirect } from "react-router";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const styles = theme => ({});

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

function SubmitPicture({ picture }) {
  if (typeof picture?.uri !== "string") {
    return <Redirect to="/" />;
  }
  return (
    <Root>
      <ImageBox>
        <Image src={picture.uri} />
      </ImageBox>
    </Root>
  );
}

export default withStyles(styles)(SubmitPicture);
