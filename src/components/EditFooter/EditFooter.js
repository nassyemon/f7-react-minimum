import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from "@material-ui/icons/Cancel";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const styles = (theme) => ({});

const Root = styled.div`
  position: fixed;
  z-index: 2000;
  width: 100vw;
  height: ${props => props.footerHeight};
  bottom: 0;
`;

function Footer({
  onClickCancelButton,
  onClickDeleteButton,
  selectedData,
  footerHeight
}) {
  return (
    <Root height={footerHeight}>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="キャンセル"
          onClick={onClickCancelButton}
          icon={<CancelIcon />}
        />
        {selectedData?.length > 0 && (
          <BottomNavigationAction
            onClick={onClickDeleteButton}
            label="選択したアイテムを削除"
            icon={<DeleteIcon />}
          />
        )}
      </BottomNavigation>
    </Root>
  );
}

export default withStyles(styles)(Footer);
