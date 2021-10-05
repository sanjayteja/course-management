import React, { useState, Fragment } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { ADD_ASSIGNMENT, UPDATE_ASSIGNMENT } from '../../actions/types'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  onAdd: payload => dispatch({ type: ADD_ASSIGNMENT, payload }),
  onUpdate: payload => dispatch({ type: UPDATE_ASSIGNMENT, payload })
})

const Assignments = ({ course, courseKey, onAdd, onUpdate }) => {
  const { key, text, assignments } = course
  const onChange = (e, type, key, index) => {
    console.log('file--', e.target.files[0])
    const payload = {
      courseKey,
      file: e.target.files[0],
      key,
      index
    }
    if (type === 'add') {
      onAdd(payload)
    } else if (type === 'update') {
      onUpdate(payload)
    }
  }
  return (
    <div className='col-md-9'>
      <div>{text}</div>
        <p style = {{ color : 'orangered'}}>No of Assignments:{assignments.length}</p>
      <ul className='tag-list'>
        {assignments.map((assignment, i) => {
          console.log('---assignment---', assignment)
          const { name, lastModified, type } = assignment
          const assignmentKey = name.split(',')[0]
          const time = new Date(lastModified).toLocaleString('en-US')
          const url = URL.createObjectURL(assignment)
          console.log('url##',url)
          return (
            <li className='tag-default  tag-outline' index={i} key={assignmentKey}>
              <p>
                <span>{assignmentKey}</span>
              </p>
              <p>
                <span>{time}</span>
              </p>
              {type === 'application/pdf' && (
                <svg height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'>
                  <path d='M0 0h24v24H0z' fill='none' />
                  <path d='M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z' />
                </svg>
              )}
              {['application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'].includes(type) && (
                <svg height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'>
                  <path d='M0 0h24v24H0z' fill='none' />
                  <path d='M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z' />
                </svg>
              )}
              {type === 'text/plain' && (
                <svg enable-background='new 0 0 24 24' height='24px' viewBox='0 0 24 24' width='24px' fill='#000000'>
                  <g>
                    <rect fill='none' height='24' width='24' />
                    <path d='M20.41,8.41l-4.83-4.83C15.21,3.21,14.7,3,14.17,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V9.83 C21,9.3,20.79,8.79,20.41,8.41z M7,7h7v2H7V7z M17,17H7v-2h10V17z M17,13H7v-2h10V13z' />
                  </g>
                </svg>
              )}
                <a href = {url} name = {name} download = {name}>
                  Download
                </a>
              <div className='update'>
                <Fragment>
                  <input
                    color='primary'
                    type='file'
                    onChange={e => onChange(e, 'update', assignmentKey, i)}
                    id={assignmentKey}
                    style={{ display: 'none' }}
                  />
                  <label htmlFor={assignmentKey}>
                    <Button variant='contained' component='span' size='large' color='primary'>
                      Update
                    </Button>
                  </label>
                </Fragment>
              </div>
            </li>
          )
        })}
      </ul>
      <div className='add'>
        <Fragment>
          <input
            color='primary'
            type='file'
            onChange={e => onChange(e, 'add', key)}
            id={`${key}`}
            style={{ display: 'none' }}
          />
          <label htmlFor={`${key}`}>
            <Button variant='contained' component='span' size='large' color='primary'>
              Create
            </Button>
          </label>
        </Fragment>
      </div>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Assignments)
