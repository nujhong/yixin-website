import React from 'react';
import { withHelpersModifiers  } from 'bloomer';

const Block = (props) => (
  <div className='block' {...props}>{props.children}</div>
);

export default withHelpersModifiers(Block);
