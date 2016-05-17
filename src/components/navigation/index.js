import React, {Component, PropTypes } from 'react'
import { Link } from 'react-router'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};



export default class Navigation extends Component {

  constructor(props, context) {
    super(props, context)
    console.log(context)
    this.state = {
      mainMenuSelectIndex: 0,
    };

    this.handleMainMenuSelect = this.handleMainMenuSelect.bind(this)
  }

  handleMainMenuSelect = (value)=>{
    console.log(value)
    console.log(__dirname)
    this.setState({
      mainMenuSelectIndex: value,
    });
  }


  render() {
    const { user } = this.props

    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <div><Link to="/"><img/>Logo</Link>{' '}</div>
          </ToolbarGroup>
          <ToolbarGroup>
            <Tabs onChange={this.handleMainMenuSelect}
                  value={this.state.mainMenuSelectIndex} >
              <Tab label="Dashboard" value={0} >
                <Link to="/">Dashboard</Link>{' '}
              </Tab>
              <Tab label="Widgets" value={1} >
                <Link to="/">Widgets</Link>{' '}
              </Tab>
              <Tab label="Reports" value={2} >
                <Link to="/">Reports</Link>{' '}
              </Tab>
            </Tabs>
          </ToolbarGroup>
          <ToolbarGroup>
            <div>
              <Link to="/profile">{"temp name"}</Link>
            </div>
          </ToolbarGroup>
        </Toolbar>
        <Toolbar>
          <SwipeableViews
            index={this.state.mainMenuSelectIndex}
            onChangeIndex={this.handleMainMenuSelect}
          >
            <div>
              Dashboard Menu
            </div>
            <div style={styles.slide}>
              slide n°2
            </div>
            <div style={styles.slide}>
              slide n°3
            </div>
          </SwipeableViews>
        </Toolbar>
      </div>

    )
  }
}




// import React from 'react';
// import IconMenu from 'material-ui/IconMenu';
// import IconButton from 'material-ui/IconButton';
// import FontIcon from 'material-ui/FontIcon';
// import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
// import MenuItem from 'material-ui/MenuItem';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import RaisedButton from 'material-ui/RaisedButton';
