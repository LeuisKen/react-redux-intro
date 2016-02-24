import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Header } from 'SRC/components'

class Base extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default connect(null)(Base)
