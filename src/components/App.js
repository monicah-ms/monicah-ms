import React, { Component } from 'react'
import Navigation from './navigation'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import CustomStyle from '../styles/styles'

injectTapEventPlugin();

class App extends Component {
  constructor(props){
    super(props)
    console.log(props)
    console.log("App");
  }
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(CustomStyle)}>
          <Navigation />
        </MuiThemeProvider>
        <div style={{ padding: 20 }}>
          {"wala"}
        </div>
      </div>
    )
  }
}

export default App