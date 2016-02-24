import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { Row, Col, Table } from 'antd'

import styles from './displayPannel.css'

class DisplayPannel extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { columns, dataSource } = this.props
    return (
      <Row styleName="table">
        <Col offset="6" span="12">
          <Table rowKey={(record, index) => index} columns={columns} dataSource={dataSource}/>
        </Col>
      </Row>
    )
  }
}

export default CSSModules(DisplayPannel, styles)
