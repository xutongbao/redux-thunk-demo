import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ThemeSwitch from './ThemeSwitch'

class Header extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render () {
    return (
      <div>
        <h1 style={{ color: this.props.themeColor }}>xutongbao</h1>
        <ThemeSwitch/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
Header = connect(mapStateToProps, null)(Header)

export default Header
