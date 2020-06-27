import React, { Fragment } from 'react';
import styled from "styled-components";
import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    Link,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button,
} from 'framework7-react';


const Image = styled.img`
  max-width: 90%;
`;

export default ({
  pictures = [],
  onGoToAbout,
  onGoToForm,
  onOpenLeftPanel,
  onOpenPopup,
  onClickCameraButton,
  onClickWebApiCameraButton,
  onClickAlbumButton,
  onClickClearPicture,
  hasHTML5mediaDevice,
}) => (
  <Page>
    <Navbar>
      <NavLeft>
        <Link iconIos="f7:menu" iconMd="material:menu" link onClick={onOpenLeftPanel}></Link>
      </NavLeft>
      <NavTitle><RedText>My App</RedText></NavTitle>
    </Navbar>
    <Block strong>
      <p>App example.</p>
    </Block>
    <BlockTitle>Photos</BlockTitle>
    <Block>
      {pictures?.length > 0 ? (
        <Fragment>
          <Row>
            <Col width="100">
              <Button fill raised onClick={onClickClearPicture}>Clear</Button>
            </Col>
          </Row>
        <List simple-list>
          {pictures.map(({ uri }) => (
            <ListItem>
              <Img>img src={uri}</Img>
            </ListItem>
          ))}
        </List>
        </Fragment>
      ) :(
        <Row>
          <Col>No photos</Col>
        </Row>
      )}
    </Block>
    <BlockTitle>Take Picture</BlockTitle>
    <Block>
      <Row>
        <Col width="100">
          <Button fill raised onClick={onClickCameraButton}>Camera</Button>
        </Col>
      </Row>
    </Block>
    {hasHTML5mediaDevice && (
      <Block>
        <Row>
          <Col width="100">
            <Button fill raised onClick={onClickWebApiCameraButton}>HTML5 Camera</Button>
          </Col>
        </Row>
      </Block>
    )}
    <Block>
      <Row>
        <Col width="100">
          <Button fill raised onClick={onClickAlbumButton}>From Album</Button>
        </Col>
      </Row>
    </Block>
    <BlockTitle>Navigation</BlockTitle>
    <List>
      <ListItem link onClick={onGoToAbout} title="About"></ListItem>
      <ListItem link onClick={onGoToForm} title="Form"></ListItem>
    </List>
    <BlockTitle>Modals</BlockTitle>
    <Block strong>
      <Row>
        <Col width="100">
          <Button fill raised onClick={onOpenPopup}>Popup</Button>
        </Col>
      </Row>
    </Block>
  </Page>
);
