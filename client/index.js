import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';

import App from './components/App';

WebFont.load({
  google: {
    families: ['Roboto: 400,400i,700', 'sans-serif'],
  },
});

const app = document.getElementById('root');

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
),
app
);
