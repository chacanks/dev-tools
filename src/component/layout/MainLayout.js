import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class MainLayout extends Component {

    
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});


  render() {
    return (
      <div>
        <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <div>
          s          
        </div>
        <RaisedButton
          label="Toggle Drawer"
          onClick={this.handleToggle}
          style={{marginLeft:200}}
        />
        <Drawer open={this.state.open} containerStyle={{top:80}}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default MainLayout;
