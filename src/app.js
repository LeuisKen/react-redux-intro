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
    this.state = {
      dataSource: []
    }
    let self = this
    fetch(`https://api.github.com/users/facebook/repos`)
      .then(res => res.json())
      .then(res => self.setState({
        dataSource: res
      }))
  }
  render() {
    return (
      <Table columns={columns} dataSource={this.state.dataSource}/>
    )
  }
}

export default App
