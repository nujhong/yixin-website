import React from 'react';
import { Box, Card, CardImage, CardFooter, CardFooterItem, Image, Columns, Column, Title } from 'bloomer';

import ImageWithOverlay from './ImageWithOverlay';
import Block from './Block';

const ServicesList = ({ data, index }) => (
    <Columns isCentered>
      <Column>
        <Title isSize={1}>{index? '室内' : '屋外'}</Title>
      </Column>
      <Column isSize={9}>
        <Columns isMultiline>
          {data.map((item) => (
            <Column isSize='1/3'>
              <Card>
                <CardImage>
                  <Image isRatio='16:9' src={item.image} />
                  <div className='is-overlay has-text-white' style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', background: 'rgba(0,0,0,.3)'}}>
                    {item.sub_items.map(item => <span>{item}</span>)}
                  </div>
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
