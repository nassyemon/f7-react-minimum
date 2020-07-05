import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import CancelIcon from "@material-ui/icons/Cancel";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const styles = (theme) => ({});

const StaticProperties = {
  height: "100px",
};
const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: transparent;
`;

const Messages = styled.div`
  background-color: #ffffff;
  overflow-y: hidden;
  height: ${props => props.show ? 44 : 0}px;
  transition: ${({ theme }) =>
    theme.transitions.create("height", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.standard,
    })};
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  padding-right: 20px;
`


const Buttons = styled(BottomNavigation)`
`

function EditFooter({
  onClickCancelButton,
  onClickDeleteButton,
  selectedCount,
}) {
  return (
    <Root {...StaticProperties}>
      <Messages show={selectedCount > 0}>
        <Typography variant="h5">選択中&nbsp;</Typography>
        <Typography variant="h4">{selectedCount}</Typography>
        <Typography variant="h5">&nbsp;件</Typography>
      </Messages>
      <Buttons showLabels {...StaticProperties}>
        <BottomNavigationAction
          label="キャンセル"
          onClick={onClickCancelButton}
          icon={<CancelIcon />}
        />
        {selectedCount > 0 && (
          <BottomNavigationAction
            onClick={onClickDeleteButton}
            label="選択したアイテムを削除"
            icon={<DeleteIcon />}
          />
        )}
      </Buttons>
    </Root>
  );
}

export default withStyles(styles)(Object.assign(EditFooter, StaticProperties));
