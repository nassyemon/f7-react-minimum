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
  alignitems: center;
  justify-content: center;
  flex-direction: column;
`;

const ContentCard = styled(Card)`
  position: relative;
  width: 100%;
  margin-bottom: ${props => props.theme.spacing(1)}px;
`

function Home({ userName }) {
  return (
    <Root>
      <ContentCard>
        <CardContent>
          {userName && (
            <Fragment>
              <Typography variant="h5">ようこそ</Typography>
              <Typography align="center" variant="subtitle1">
                {userName} さん
              </Typography>
            </Fragment>
          )}
        </CardContent>
        <CardActions>
        </CardActions>
      </ContentCard>
    </Root>
  );
};

const mapStateToProps = state => {
  return {
    stepCounter: state.stepCounter,
  };
};

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: "NULL" }),
  decrement: () => dispatch({ type: "NULL" }),
});

export default withStyles(() => ({}))(Home);
