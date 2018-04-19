import React from 'react';
import { Card, CardImage, CardContent, Image, Columns, Column, Content, Title } from 'bloomer';

import Table from './Table';
import Animation from './Animation';

const About = ({data}) => (
  <Columns>
    <Column isSize={12}>
      <Content className='has-text-centered'>
        <Title isSize={2}>关于我们</Title>
        <p>超过30年房屋建筑装潢设计经验 收费合理</p>
      </Content>
      <Animation className='wow fadeIn'>
        <Table />
      </Animation>
    </Column>
  </Columns>
);

export default About;
