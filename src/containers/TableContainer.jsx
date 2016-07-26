import React, { Component } from 'react'
import { connect } from 'dva'
import { Table } from 'antd'

const columns = [{
  title: '名称',
  dataIndex: 'name',
  key: 'name'
}]

class TableContainer extends Component {
  constructor(props) {
    super(props)
    props.dispatch({type: 'list/fetchData'})
  }
  render() {
    const dataSource = this.props.list
    return (
      <Table columns={columns} dataSource={dataSource}/>
    )
  }
}

function mapStateTpProps(state) {
  return {
    list: state.list.list
  }
}

export default connect(mapStateTpProps)(TableContainer)
