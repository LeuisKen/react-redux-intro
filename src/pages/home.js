import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>欢迎使用</div>
    )
  }
}

export default connect(null)(Home)
