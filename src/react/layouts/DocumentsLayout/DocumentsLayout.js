import React, { useState } from "react";
import { Swipeable } from "react-swipeable";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

import { withTransition } from "../../utils/styled";
import Documents from "../../components/main/Documents";


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

const TabsContainer = styled.div`
  width: 100vw;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 200;
  background-color: #f8f8f8;
`;

const Screen = styled.main`
  width: 300vw;
  height: 100%;
  flex-grow:1 ;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  ${withTransition(["transform"])}
  ${({ tabIndex }) => tabIndex > 0 ? `transform: translateX(${tabIndex * -100}vw)` : ""}
`;

const Panel = styled.div`
  height: 100%;
  width: 100vw;
  overflow-y: scroll;
`;


function DocumentsLayout({
  scrollingRef,
  ...rest
}) {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Root>
      <TabsContainer>
        <Tabs
          value={tabIndex}
          onChange={(_, idx) => setTabIndex(idx)}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </TabsContainer>
      <Screen tabIndex={tabIndex}>
        <Panel ref={tabIndex === 0 ? scrollingRef : null}>
          <Swipeable>
            <Documents {...rest} />
          </Swipeable>
        </Panel>
        <Panel ref={tabIndex === 1 ? scrollingRef : null}>
          <Swipeable>
            <Documents {...rest} />
          </Swipeable>
        </Panel>
        <Panel ref={tabIndex === 2 ? scrollingRef : null}>
          <Swipeable>
            <Documents {...rest} />
          </Swipeable>
        </Panel>
      </Screen>
    </Root>
  );
}

export default withStyles(() => ({}))(Object.assign(DocumentsLayout, StaticProperties));
