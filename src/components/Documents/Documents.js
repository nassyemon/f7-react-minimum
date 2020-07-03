import React, { useEffect, useState } from "react";
import PullToRefresh from "react-simple-pull-to-refresh";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

const Root = styled.div`
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
  margin-top: calc((100vh - 200px)/2);
`;

const ContentCard = styled(Card)`
  display: flex;
  width: 100%;
  margin-bottom: ${(props) => props.theme.spacing(1)}px;
  min-height: 15vh;
`;

const TextContainer = styled(CardContent)`
  width: 60%;
`;

const ImageBox = styled(CardMedia)`
  flex-grow: 1;
`;

function Documents({
  onMount,
  reloadDocuments,
  data,
  loaded,
  hasSession,
  // loading,
  onClickItem,
}) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    console.log("mounting documents");
    if (!loaded) {
      onMount().then((done) => {
        if (done) {
          setIsMounted(true);
          console.log("documents data loaded!");
        }
      });
    } else {
      setIsMounted(true);
    }
  }, [hasSession]);
  return (
    <Root>
      {!isMounted ? (
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
      ) : (
          <PullToRefresh onRefresh={reloadDocuments}>
            {data?.length > 0 ?
              data.map(({ id, title, image_url }) => (
                <ContentCard key={id} onClick={onClickItem(id)}>
                  <TextContainer>
                    <Typography variant="h5">{title}</Typography>
                  </TextContainer>
                  <ImageBox image={image_url} title="Live from space album cover" />
                  <CardActions />
                </ContentCard>
              )) : null
            }
          </PullToRefresh>
        )}
    </Root>
  );
}

export default withStyles(() => ({}))(Documents);
