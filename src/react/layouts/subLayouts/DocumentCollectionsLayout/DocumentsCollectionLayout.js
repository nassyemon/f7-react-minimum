import React from "react";
import Button from '@material-ui/core/Button';
import { Swipeable } from "react-swipeable";
import ButtonGroup from '@material-ui/core/ButtonGroup';

import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

import { withTransition } from "../../../utils/styled";
import DocumentsLeftLayout from "../DocumentsLayout";
import DocumentsRightLayout from "../DocumentsRightLayout";


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

const SlideButtonContainer = styled.div`
  display: flex;
  position: relative;
  background-color: #dfdfdf;
  position: relative;
`;

const SlideButtonGroup = styled(ButtonGroup)`
  width: ${({ theme }) => theme.spacing(30)}px;
`

const SelectButton = styled(Button)`
  width: ${({ theme }) => theme.spacing(15)}px;
  z-index: 100;
`

const SelectedBox = styled.div`
  width: ${({ theme }) => theme.spacing(15)}px;
  height: 100%;
  background-color: #ffffff;
  position: absolute;
  left: 0px;
  ${withTransition(["transform"])}
  ${({ panel, theme }) => panel > 0 ? `transform: translateX(${panel * theme.spacing(15)}px)` : ""}`;

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
  moveToLeft,
  moveToRight,
  scrollingRef,
  collectionIndex,
  ...rest
}) {
  const left = collectionIndex === 0;
  const right = collectionIndex === 1;
  return (
    <Root>
      <Swipeable onSwipedLeft={moveToLeft} onSwipedRight={moveToRight}>
        <SwitchContainer>
          <SlideButtonContainer>
            <SlideButtonGroup>
              <SelectButton selected={left} onClick={!left ? moveToLeft : undefined}>左表示</SelectButton>
              <SelectButton selected={right} onClick={!right ? moveToRight : undefined}>右表示</SelectButton>
            </SlideButtonGroup>
            <SelectedBox panel={collectionIndex} />
          </SlideButtonContainer>
        </SwitchContainer>
      </Swipeable>
      <Screen panel={collectionIndex}>
        <Panel >
          <DocumentsLeftLayout {...rest} scrollingRef={left ? scrollingRef : null} />
        </Panel>
        <Panel >
          <DocumentsRightLayout {...rest} scrollingRef={right ? scrollingRef : null} />
        </Panel>
      </Screen>
    </Root>
  );
}

export default withStyles(() => ({}))(Object.assign(DocumentsCollectionLayout, StaticProperties));
