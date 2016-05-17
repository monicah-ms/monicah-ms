import React, {Component, PropTypes } from 'react'
import { Router, Route, IndexRoute, Link } from 'react-router'


class ProfileOnNavigation extends Component {

  constructor(props, context) {
    super(props, context)
    console.log(context)
  }


  render() {
    const { user } = this.props

    return (
      <div>
        <div><Link to="/"><a>Logo</a></Link>{' '}</div>
        <div>

          <Link to="/dashboard">Dashboard</Link>{' '}
          <Link to="/widgets">Widgets</Link>{' '}
          <Link to="/reports">Reports</Link>{' '}
        </div>
        <div>
          <Link to="/profile">{user.name}</Link> <button onClick={this.logOut}>log out</button>
        </div>
      </div>
    )
  }
}


export default GlobalNav