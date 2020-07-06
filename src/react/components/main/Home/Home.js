import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { withStyles } from "@material-ui/core";

const StaticProperties = {
  disableDefaultSwipe: false,
};

const Root = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing(2)}px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${({ footerHeight }) => footerHeight ? `padding-bottom: ${footerHeight};` : ""}
`;

const ContentCard = styled(Card)`
  position: relative;
  width: 100%;
  margin-bottom: ${(props) => props.theme.spacing(1)}px;
`;

function Home({ userName, footerHeight }) {
  return (
    <Root footerHeight={footerHeight}>
      <ContentCard>
        <CardContent>
          {userName && (
            <Fragment>
              <Typography variant="h5">ようこそ</Typography>
              <Typography align="center" variant="subtitle1">
                {`${userName}  さん`}
              </Typography>
            </Fragment>
          )}
        </CardContent>
        <CardActions />
      </ContentCard>
    </Root>
  );
}


export default withStyles(() => ({}))(Object.assign(Home, StaticProperties));
