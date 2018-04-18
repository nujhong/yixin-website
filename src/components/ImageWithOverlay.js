import React from 'react';
import ImageOverlay from './ImageOverlay';

const ImageWithOverlay = (props) => (
  <figure className='image'>
    <img src={props.src} alt={props.alt || ''}/>
    <ImageOverlay isOverlay>{props.children}</ImageOverlay>
  </figure>
);

export default ImageWithOverlay;
