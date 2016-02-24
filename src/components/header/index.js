import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'
import { Menu } from 'antd'

import styles from './header.css'

const MenuItem = Menu.Item

class Header extends Component {
  constructor(props) {
    super(props)
    let path = window.location.hash.slice(2, -10)
    this.state = {
      current: `${path}/.$${path}`
    }
  }
  handleClick(e) {
    this.setState({
      current: e.key
    });
  }
  render() {
    return (
      <div>
        <h1 styleName="header">查看fackbook开源项目的demo</h1>
        <Menu selectedKeys={[this.state.current]}
          onClick={this.handleClick.bind(this)}
          styleName="nav"
          mode="horizontal">
          <MenuItem key="forks"><Link to="/forks">Forks</Link></MenuItem>
          <MenuItem key="pulls"><Link to="/pulls">Pulls</Link></MenuItem>
        </Menu>
      </div>
    )
  }
}

export default CSSModules(Header, styles)
