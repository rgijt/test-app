import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

const alertMessage = () => {
  alert('BOOOOOOOOOEEEEEM!!!!');
};

const Greeting = () => {
  return (
    <div className='greeting'>
      <h1>Hello World!</h1>
      <p>hello</p>
      <button onClick={alertMessage}>DON'T CLICK</button>
    </div>
  );
};

ReactDom.render(<Greeting />, document.getElementById('root'));
