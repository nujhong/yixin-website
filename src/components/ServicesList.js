import React from 'react';
import { Box, Card, CardImage, CardFooter, CardFooterItem, Image, Columns, Column, Title } from 'bloomer';

import ImageWithOverlay from './ImageWithOverlay';
import Block from './Block';

const ServicesList = ({ data }) => (
    <Columns isCentered>
      <Column>
        <Title isSize={1}>室内</Title>
      </Column>
      <Column isSize={9}>
        <Columns isMultiline>
          {data.map(({ node: item }) => (
            <Column isSize='1/3'>
              <Card>
                <CardImage>
                  <Image isRatio='16:9' src={item.frontmatter.image} />
                </CardImage>
                <CardFooter>
                  <CardFooterItem>
                    {item.frontmatter.title}
                  </CardFooterItem>
                </CardFooter>
              </Card>
            </Column>
          ))}
        </Columns>
      </Column>
    </Columns>
)

export default ServicesList
