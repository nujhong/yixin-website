import React from 'react';
import { Card, CardImage, CardContent, Image, Columns, Column, Content, Title } from 'bloomer';

const About = ({data}) => (
  <Columns>
    <Column isSize={12}>
        <Content className='wow fadeIn'>
          <Title isSize={2}>{data.title}</Title>
          {data.summary}
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
