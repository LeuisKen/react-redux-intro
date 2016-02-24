import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Actions from 'SRC/actions'
import { getColumns } from 'SRC/service'
import { SearchForm, DisplayPannel } from 'SRC/components'

class Pulls extends Component {
  componentWillMount() {
    const { keySet } = this.props.main.toJS()
    const { actions } = this.props
    if(keySet["pulls"]) {
      actions.fetchAll('pulls')
    }
  }
  componentWillReceiveProps(nextProps) {
    const { actions } = this.props
    var oldSource = this.props.main
    var nextSource = nextProps.main

    if (oldSource.get('keySet').toJS()['pulls'] !== nextSource.get('keySet').toJS()['pulls']
      ) {
      actions.fetchAll('pulls')
    }
  }
  render() {
    const { keySet, dataSet } = this.props.main.toJS()
    const { actions } = this.props

    let columns = getColumns('pulls')
    let dataSource

    if(dataSet['pulls']) {
      dataSource = dataSet['pulls'].map((pull, index) => {
        return {
          user: pull.user ? pull.user.login : 'Anonymous',
          pull_url: pull.html_url,
          body: pull.body
        }
      })
    }
    return (
      <div>
        <SearchForm
          defaultValue={keySet['pulls']}
          title="Pulls"
          onSearch={actions.setSearchKey.bind(this, 'pulls')}/>
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

export default connect(mapState, mapDispatch)(Pulls)
