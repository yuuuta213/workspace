import { createElement } from 'react';
import logo from './logo.svg';
import './App.css';

function AppWithooutJSX() {
  return createElement(
    'div',
    { className: 'App' },
    createElement(
      'header',
      { className: 'App-header' },
      createElement(
        'img', {
        className: 'App-logo',
        src: logo,
        alt: 'logo'
      }),
      createElement(
        'a', {
        className: 'App-link',
        href: 'https://reactjs.org',
        target: '_blank',
        rel: 'noopener noreferrer'
      },
        'Learn React'
      )
    )
  );
}

export default AppWithooutJSX;
