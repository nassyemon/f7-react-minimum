import React from "react";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

import { withTransition } from "../../../utils/styled";
import DocumentsLayout from "../DocumentsLayout";


const StaticProperties = {
  disableDefaultSwipe: true,
  controlScroll: true,
};

const Root = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: scroll;
  overflow-x: hidden;
  flex-direction: column;
`;

const SwitchContainer = styled.div`
  width: 100vw;
  position: sticky;
  padding: ${({ theme }) => theme.spacing(1)}px;
  height: ${({ theme }) => theme.spacing(6)}px;
  top: 0;
  left: 0;
  z-index: 200;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
`;

const SelectButton = styled(Button)`
  width: ${({ theme }) => theme.spacing(15)}px;
`

const Screen = styled.div`
  width: 200vw;
  height: 100%;
  flex-grow:1 ;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  ${withTransition(["transform"])}
  ${({ panel }) => panel > 0 ? `transform: translateX(${panel * -100}vw)` : ""}
`;

const Panel = styled.div`
  height: 100%;
  width: 100vw;
  overflow-y: hidden;
`;

function DocumentsCollectionLayout({
  onClickLeft,
  onClickRight,
  scrollingRef,
  collectionIndex,
  ...rest
}) {
  console.error(collectionIndex);
  return (
    <Root>
      <SwitchContainer>
        <ButtonGroup aria-label="large outlined primary button group">
          <SelectButton onClick={onClickLeft}>左表示</SelectButton>
          <SelectButton onClick={onClickRight}>右表示</SelectButton>
        </ButtonGroup>
      </SwitchContainer>
      <Screen panel={collectionIndex}>
        <Panel >
          <DocumentsLayout {...rest} scrollingRef={collectionIndex === 0 ? scrollingRef : null} />
        </Panel>
        <Panel >
          <DocumentsLayout {...rest} scrollingRef={collectionIndex === 1 ? scrollingRef : null} />
        </Panel>
      </Screen>
    </Root>
  );
}

export default withStyles(() => ({}))(Object.assign(DocumentsCollectionLayout, StaticProperties));
