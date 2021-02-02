import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

const Greeting = () => {
  return (
    <div className='greeting'>
      <h1>Hello World!</h1>
      <p>hello</p>
    </div>
  );
};

ReactDom.render(<Greeting />, document.getElementById('root'));
