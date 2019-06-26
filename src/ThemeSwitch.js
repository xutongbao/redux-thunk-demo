import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class ThemeSwitch extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  handleSwitchColor (color) {
    if (this.props.onSwitchColor) {
      this.props.onSwitchColor(color)
    }
  }

  render () {
    return (
      <div>
        <button onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
        <button onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
        <button onClick={this.handleSwitchColorByThunk.bind(this, '#f66f0c')}>使用中间件</button>
      </div>
    )
  }
}

Object.assign(ThemeSwitch.prototype, {
  handleSwitchColorByThunk(color) {
    this.props.onSwitchColorByThunk(color)
  }
})

let changeColorAsyn = (color) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: 'CHANGE_COLOR', themeColor: color })
    }, 2000)    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({ type: 'CHANGE_COLOR', themeColor: color })
    },
    onSwitchColorByThunk: (color) => {
      dispatch(changeColorAsyn(color))
    }
  }
}

export default connect(null, mapDispatchToProps)(ThemeSwitch)
