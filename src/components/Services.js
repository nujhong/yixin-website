import React from 'react';
import { Button, Columns, Column, Content, Breadcrumb, BreadcrumbItem, Title, Subtitle } from 'bloomer';
import ImageWithOverlay from './ImageWithOverlay';
import Block from './Block';

const Services = () => [
  <Block>
    <Title hasTextAlign='centered' isSize={2}>我们的服务范围</Title>
  </Block>,
  <Columns>
    <Column isSize='1/2' className='wow pulse'>
      <ImageWithOverlay
        alt='' src='https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'>
        <Block hasTextAlign='centered'>
          <Title hasTextColor='white'>室内</Title>
          <Breadcrumb isSize='medium'>
              <ul>
                  <BreadcrumbItem><a className='has-text-white'>木地板</a></BreadcrumbItem>
                  <BreadcrumbItem><a className='has-text-white'>油漆</a></BreadcrumbItem>
                  <BreadcrumbItem><a className='has-text-white'>补墙</a></BreadcrumbItem>
              </ul>
          </Breadcrumb>
          <Button isColor='white' isOutlined>查看更多</Button>
        </Block>
      </ImageWithOverlay>
    </Column>
    <Column isSize='1/2' className='wow pulse'>
      <ImageWithOverlay
        alt='' src='https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'>
        <Block hasTextAlign='centered'>
          <Title hasTextColor='white'>屋外</Title>
          <Breadcrumb isSize='medium'>
              <ul>
                  <BreadcrumbItem><a className='has-text-white'>围栏</a></BreadcrumbItem>
                  <BreadcrumbItem><a className='has-text-white'>园林</a></BreadcrumbItem>
                  <BreadcrumbItem><a className='has-text-white'>花架</a></BreadcrumbItem>
              </ul>
          </Breadcrumb>
          <Button isColor='white' isOutlined>查看更多</Button>
        </Block>
      </ImageWithOverlay>
    </Column>
  </Columns>
];

export default Services;
