import MainView from './MainView'
import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

class Home extends React.Component {
  render () {
    return (
      <div className='home-page'>
        <div className='container page'>
          <div className='row'>
            <MainView />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
