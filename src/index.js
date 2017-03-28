// let message = '	hello from entry!!';

// console.log(message);

import React from 'react';

//allow us render into the DOM or into HTML
import { render } from 'react-dom';

//importing App component in components/app.js
import App from 'components/app';

//render App component to HTML element that has id app
render(<App />, document.getElementById('app'));