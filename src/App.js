import React, { Component } from 'react';
import AppBar from './components/AppBar'
import LoginPage from './page/Login';
import './App.css';
import Theme from './theme/main'

class App extends Component {
  render() {
    return (
      <div className="App" >
        {/* <AppBar header="This is Header" theme={Theme} /> */}
        <LoginPage theme={Theme.theme} />
      </div>
    );
  }
}

export default App;
