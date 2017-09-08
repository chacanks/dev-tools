import React, { Component } from 'react';

import MainLayout from './component/layout/MainLayout.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
