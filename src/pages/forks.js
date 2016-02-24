import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from 'SRC/actions'
import { getColumns } from 'SRC/service'
import { SearchForm, DisplayPannel } from 'SRC/components'

class Forks extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const { keySet } = this.props.main.toJS()
    const { actions } = this.props
    if(keySet["forks"]) {
      actions.fetchAll('forks')
    }
  }
  componentWillReceiveProps(nextProps) {
    const { actions } = this.props
    var oldSource = this.props.main
    var nextSource = nextProps.main

    if (oldSource.get('keySet').toJS()['forks'] !== nextSource.get('keySet').toJS()['forks']
      ) {
      actions.fetchAll('forks')
    }
  }
  render() {
    const { keySet, dataSet } = this.props.main.toJS()
    const { actions } = this.props

    let columns = getColumns('forks')
    let dataSource

    if(dataSet['forks']) {
      dataSource = dataSet['forks'].map((fork, index) => {
        return {
          owner: fork.owner ? fork.owner.login : 'Anonymous',
          repo_url: fork.html_url,
          create_time: fork.created_at
        }
      })
    }
    return (
      <div>
        <SearchForm
          defaultValue={keySet['forks']}
          title="Forks"
          onSearch={actions.setSearchKey.bind(this, 'forks')}/>
        <DisplayPannel columns={columns} dataSource={dataSource}/>
      </div>
    )
  }
}

function mapState(state) {
  return {
    main: state.main
  }
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapState, mapDispatch)(Forks)
