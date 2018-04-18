import React from 'react';
import { Card, CardImage, CardContent, Image, Columns, Column, Content, Title } from 'bloomer';

const About = () => (
  <Columns>
    <Column isSize={12}>
        <Content className='wow fadeIn'>
          <Title isSize={2}>关于我们</Title>
          <p>超过30年房屋建筑装潢设计经验</p>
          <p>收费合理</p>
          <p>
            服务范围包括:
            <br />
            房屋翻新
            室内装修
            装潢风水质询
            买房风水咨询
          </p>
        </Content>
        <Columns>
          <Column>
            <Card>
              <CardImage>
                <Image isRatio='square' src='https://via.placeholder.com/1280x969' />
              </CardImage>
            </Card>
          </Column>
          <Column>
            <Card>
              <CardImage>
                <Image isRatio='square' src='https://via.placeholder.com/1280x969' />
              </CardImage>            </Card>
          </Column>
          <Column>
            <Card>
              <CardImage>
                <Image isRatio='square' src='https://via.placeholder.com/1280x969' />
              </CardImage>
            </Card>
          </Column>
        </Columns>
    </Column>
  </Columns>
);

export default About;
