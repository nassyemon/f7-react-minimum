import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  alignitems: center;
  justify-content: center;
`;

const Home = props => {
  return (
    <Root>
      <Card>
        <CardContent>
          <Typography variant="h3">Redux Example</Typography>
          <Typography align="center" variant="subtitle1">
            Counter: {props.settings}
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" onClick={props.increment}>
            Increment
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={props.decrement}
          >
            Decrement
          </Button>
        </CardActions>
      </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
