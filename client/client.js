import React from 'react'
import {render} from 'react-dom' //similar to: var render = require('react-dom').render;
import App from '../components/App'

render(
  // define encompassing component and DOM element to mount
  <App/>, document.getElementById('app')
)
