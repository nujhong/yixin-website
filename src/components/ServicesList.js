import React from 'react';
import { Box, Card, CardImage, CardFooter, CardFooterItem, Image, Columns, Column, Title } from 'bloomer';
import styled from 'styled-components';
import Figure from './Figure';
import Block from './Block';

const StyledTitle = styled(Title)`
  box-shadow: -1px -1px 0 1px #505050;
  padding: 5%;
`

const ServicesList = ({ data, index }) => (
    <Columns isCentered>
      <Column>
        <StyledTitle isSize={1} className='has-text-white'>{index? '室内' : '屋外'}</StyledTitle>
      </Column>
      <Column isSize={9}>
        <Columns isMultiline>
          {data.map((item) => (
            <Column isSize='1/3'>
              <Card>
                <CardImage>
                  <Figure src={item.image} isHoverable>
                    {item.sub_items.map((i) => <span>{i}</span>)}
                  </Figure>
                </CardImage>
                <CardFooter>
                  <CardFooterItem>
                    {item.title}
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
