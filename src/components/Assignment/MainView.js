import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import CustomizedExpansionPanels from './collapse.jsx'
import './main.css'

const mapStateToProps = state => ({
  courses: state.assignments.courses
})

const mapDispatchToProps = dispatch => ({})

const MainView = props => {
  console.log('props---', props)
  const [expanded, setExpanded] = useState('panel_0')
  const [courses, setCourses] = useState(props.courses)
  useEffect(
    () => {
      setCourses(props.courses)
    },
    [props]
  )
  return (
    <div className='col-md-9'>
      <h5 style={{ color: 'teal'}}><strong>Select the Course:</strong></h5>
      {courses.map((course, i) => CustomizedExpansionPanels(course, i, expanded, setExpanded))}
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView)
