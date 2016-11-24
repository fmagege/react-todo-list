import React, { Component } from 'react'
import TextInput from './TextInput.jsx'

class App extends Component {
  render() {
    return (
        <div className="app">
          <div><h1>This is the App component :)</h1></div>
          <TextInput/>
        </div>
    )
  }
}

export default App
