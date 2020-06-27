import React from "react";
import {
  Panel,
  Page,
  Navbar,
  Block,
  BlockTitle,
  List,
  ListItem,
} from "framework7-react";

export default ({ onGoToAbout, onGoToForm, onClosePanelRight }) => (
  <Panel right reveal themeDark onPanelBackdropClick={onClosePanelRight}>
    <Page>
      <Navbar title="Right Panel" />
      <Block strong>
        <p>Right panel content goes here</p>
      </Block>
      <BlockTitle>Load page in main view</BlockTitle>
      <List>
        <ListItem link title="About" onClick={onGoToAbout} />
        <ListItem link title="Form" onClick={onGoToForm} />
      </List>
    </Page>
  </Panel>
);
