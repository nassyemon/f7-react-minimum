import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
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
  position: relative;
  width: 100%;
  margin-bottom: ${props => props.theme.spacing(1)}px;
`

function Documents(props) {
  return (
    <Root>
      {
        Array(10).fill(0).map((_, i) => (
          <ContentCard key={"card_" + i} onClick={() => alert(i)}>
            <CardContent>
              <Typography variant="h5">Redux Example</Typography>
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
          </ContentCard>
        ))
      }
    </Root>
  );
};

export default withStyles(() => ({}))(Documents);