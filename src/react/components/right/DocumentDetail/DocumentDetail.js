import React, { useEffect, useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import { withStyles } from "@material-ui/core";

const StaticProperties = {
  disableDefaultSwipe: false,
  canGoBack: true,
};

const Root = styled.div`
  padding: ${({ theme }) => theme.spacing(2)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

// TODO: margin-top is temporary
const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: calc((100vh - 200px) / 2);
`;

const TypoBox = styled(Box)`
  width: 100%;
`;

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

/*
const ButtonContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
*/

function DocumentDetail({
  id,
  data,
  loading,
  loaded,
  hasSession,
  sessionId,
  onMount,
}) {
  const [prevId, setPrevId] = useState(null);
  useEffect(() => {
    console.log("mounting document detail.");
    // console.log(id, prevId, loaded);
    if (id && prevId !== id) {
      console.log("loading detail data for " + id);
      onMount().then((done) => {
        if (done) {
          setPrevId(id);
          console.log("data loaded!");
        }
      });
    }
  }, [id, hasSession, sessionId, prevId, onMount]);
  if (loading || (id && prevId !== id)) {
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    );
  }
  if (!loaded) {
    return null;
  }
  const { image_url, title } = data;
  return (
    <Root>
      <TypoBox>
        <Typography align="left" variant="h5">
          {title}
        </Typography>
      </TypoBox>
      <ImageBox>
        <Image src={image_url} />
      </ImageBox>
      {/*
      <ButtonContainer maxWidth="sm">
      </ButtonContainer>
      */}
    </Root>
  );
}
export default withStyles(() => ({}))(Object.assign(DocumentDetail, StaticProperties));
