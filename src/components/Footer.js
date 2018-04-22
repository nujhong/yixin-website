import React from 'react';
import { Footer, Container, Content, Columns, Column, Icon } from 'bloomer';

const WrappedFooter = () => (
  <Footer id='footer'>
    <Container>
      <Content isSize='small'>
          <p>The source code is licensed under <a target="_blank">MIT</a>.</p>
          <p>The website content is licensed under <a target="_blank">CC ANS 4.0</a>.</p>
      </Content>
    </Container>
  </Footer>
);

export default WrappedFooter;
