import * as React from 'react';
import { withHelpersModifiers  } from 'bloomer';

const ImageOverlay = (props) => (
    <div style={{background: 'rgba(0,0,0,.6)', display: 'flex', alignItems: 'center', justifyContent: 'center'}} {...props}>{props.children}</div>
)

export default withHelpersModifiers(ImageOverlay);
