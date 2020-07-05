import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import DeleteIcon from "@material-ui/icons/Delete";
import CancelIcon from "@material-ui/icons/Cancel";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const styles = (theme) => ({});

const StaticProperties = {
  height: "56px",
};
const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: transparent;
`;

const Buttons = styled(BottomNavigation)`
`

const CancelButton = styled(BottomNavigationAction)`
`

const DeleteButton = styled(BottomNavigationAction)`
  color: #ff2222;
`


function DeleteFooter({
  onClickCancelButton,
  onClickDeleteButton,
  selectedCount,
}) {
  return (
    <Root {...StaticProperties}>
      <Buttons showLabels {...StaticProperties}>
        <CancelButton
          label="キャンセル"
          onClick={onClickCancelButton}
        />
        <DeleteButton
          onClick={onClickDeleteButton}
          label="確認して削除する"
        />
      </Buttons>
    </Root>
  );
}

export default withStyles(styles)(Object.assign(DeleteFooter, StaticProperties));
