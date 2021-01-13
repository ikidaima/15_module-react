import React from 'react';
import ReactDOM from 'react-dom';
import Comments from './Comments';

import '../index.html';
import '../css/style.css';

const SELECTOR_OF_ROOT_ELEM = document.getElementById('root');
const KEY_LOCAL_STORAGE = 'comments';

const comments = localStorage.getItem(KEY_LOCAL_STORAGE) ? JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE)) : {};

ReactDOM.render(
  <Comments comments={ comments } keyLocalStorage={ KEY_LOCAL_STORAGE } />,
  SELECTOR_OF_ROOT_ELEM
);
