import React, { useEffect, Fragment } from "react";
import { Redirect } from "react-router";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Alert, AlertTitle } from '@material-ui/lab';
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";


const StaticProperties = {
  disableDefaultSwipe: false,
  canGoBack: true,
};

const Root = styled.div`
  display: flex;
  align-items: top;
  padding: ${({ theme }) => theme.spacing(2)}px;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  min-height: 100%;
  background-color: #ffffff;
`;

// TODO: margin-top is temporary
const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: calc((100vh - 200px) / 2);
`;

const Message = styled.div`
  min-height: 80px;
`;

const ContentCard = styled(Card)`
  display: flex;
  width: 100%;
  margin-bottom: ${(props) => props.theme.spacing(1)}px;
  background-color: ${({ theme, mode }) =>
    mode === "edit" ? "#f8f8f8" : "transparent"};
  min-height: 15vh;
  transition: ${({ theme }) =>
    theme.transitions.create(["background", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.standard,
    })};
`;

const TextContainer = styled(CardContent)`
  flex-grow: 1;
  width: 60%;
`;

const ImageBox = styled(CardMedia)`
  width: 40%;
`;

function DeleteConfirm({
  onMount,
  data,
  loading,
  loaded,
  hasSession,
  sessionId,
}) {
  useEffect(() => {
    if (!loaded && !loading) {
      console.log("start loading");
      onMount().then((done) => {
        if (done) {
          console.log("documents data loaded!");
        }
      });
    }
  }, [hasSession, sessionId, loaded, loading, onMount]);
  if (data?.length < 1) {
    return <Redirect to="/" />;
  }
  return (
    <Root>
      {loading && data?.length < 1 ? (
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
      ) : (
          <Fragment>
            <Message>
              <Alert severity="error">
                <AlertTitle>削除確認</AlertTitle>
                  以下の{data.length}件のデータを削除します
              </Alert>
            </Message>
            {data.map(({ id, title, image_url }) => (
              <ContentCard key={id}>
                <TextContainer>
                  <Typography variant="h6">{title}</Typography>
                </TextContainer>
                <ImageBox image={image_url} title="Image" />
              </ContentCard>
            ))}
          </Fragment>
        )}
    </Root>
  );
}

export default withStyles(() => ({}))(Object.assign(DeleteConfirm, StaticProperties));
