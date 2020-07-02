import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import styled from "styled-components";
import { withStyles } from "@material-ui/core";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ContentCard = styled(Card)`
  position: relative;
  width: 100%;
  margin-bottom: ${(props) => props.theme.spacing(1)}px;
`;

function DocumentDetail({ }) {
  return (
    <Root>
      <ContentCard>
        <CardContent>
          ドキュメント詳細
        </CardContent>
        <CardActions />
      </ContentCard>
    </Root>
  );
}

export default withStyles(() => ({}))(DocumentDetail);
