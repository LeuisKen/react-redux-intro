import React, { Component } from 'react'
import { Table } from 'antd'

const columns = [{
  title: '名称',
  dataIndex: 'name',
  key: 'name'
}]

class App extends Component {
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

export default App
