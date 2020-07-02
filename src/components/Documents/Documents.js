import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

const Root = styled.div`
  display: flex;
  alignitems: center;
  justify-content: center;
  flex-direction: column;
`;

const ContentCard = styled(Card)`
  display: flex;
  width: 100%;
  margin-bottom: ${(props) => props.theme.spacing(1)}px;
`;

const ImageBox = styled(CardMedia)`
  width: 35vw;
`;

function Documents({ onMount, data, loaded }) {
  useEffect(() => {
    if (!loaded) {
      onMount().then(() => {
        console.log("data loaded!");
      });
    }
  }, [loaded, onMount]);
  return (
    <Root>
      {data?.length > 0 ?
        data.map(({ id, title, image_url }) => (
          <ContentCard key={id} onClick={() => alert(id)}>
            <CardContent>
              <Typography variant="h5">{title}</Typography>
            </CardContent>
            <ImageBox image={image_url} title="Live from space album cover" />
            <CardActions />
          </ContentCard>
        )) : null
      }
    </Root>
  );
}

export default withStyles(() => ({}))(Documents);
