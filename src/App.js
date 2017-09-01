import React, { Component } from 'react';

import MainLayout from './component/layout/MainLayout.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>        
        <MainLayout/>
      </MuiThemeProvider>
    );
  }
}

export default App;
