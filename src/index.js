import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

const hello = () => {
  alert('Hi Everybody');
};

const Greeting = () => {
  return (
    <div className='greeting'>
      <h1>Hello World!</h1>
      <p>hello</p>
      <button onClick={hello}>Say Hello</button>
    </div>
  );
};

ReactDom.render(<Greeting />, document.getElementById('root'));
