import React, { useEffect } from "react";
import PullToRefresh from "react-simple-pull-to-refresh";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Checkbox from "@material-ui/core/Checkbox";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";


const StaticProperties = {
  disableDefaultSwipe: true,
};

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const ActionContainer = styled(CardActions)`
  padding: 0px;
  width: ${({ theme, mode }) => (mode === "edit" ? theme.spacing(6) : 0)}px;
  transition: ${({ theme }) =>
    theme.transitions.create(["background", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.standard,
    })};
`;

const EditCheckbox = styled(Checkbox)`
  opacity: ${(props) => (props.mode === "edit" ? 1 : 0)};
  transition: ${({ theme }) =>
    theme.transitions.create(["opacity"], {
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

function Documents({
  mode,
  onMount,
  reloadDocuments,
  data,
  loading,
  loaded,
  hasSession,
  sessionId,
  // loading,
  onClickItem,
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
  return (
    <Root>
      {loading && data?.length < 1 ? (
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
      ) : (
          <PullToRefresh onRefresh={reloadDocuments} pullingContent={null}>
            {data?.length > 0
              ? data.map(({ id, title, image_url, selected }) => (
                <ContentCard key={id} onClick={onClickItem(id)} mode={mode}>
                  <ActionContainer mode={mode}>
                    <EditCheckbox
                      color="default"
                      mode={mode}
                      checked={!!selected}
                    />
                  </ActionContainer>
                  <TextContainer>
                    <Typography variant="h5">{title}</Typography>
                  </TextContainer>
                  <ImageBox image={image_url} title="Image" />
                </ContentCard>
              ))
              : null}
          </PullToRefresh>
        )
      }
    </Root>
  );
}

export default withStyles(() => ({}))(Object.assign(Documents, StaticProperties));
