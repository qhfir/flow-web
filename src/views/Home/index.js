import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'react-router-redux'

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    redirect: push
  }, dispatch)
})

class HomeView extends PureComponent {
  static propTypes = {
    redirect: PropTypes.func.isRequired
  }

  goNext = () => {
    const { redirect } = this.props
    redirect('/next')
  }

  render () {
    return <div>
      hello world
      <button onClick={this.goNext}>to next view</button>
    </div>
  }
}

export default connect(undefined, mapDispatchToProps)(HomeView)