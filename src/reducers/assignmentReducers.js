import {
    ADD_ASSIGNMENT, UPDATE_ASSIGNMENT
  } from '../actions/types';

const initialState = [
  {
    key: 'react',
    text: 'React JS',
    assignments: []
  },
  {
    key: 'angular',
    text: 'Angular JS',
    assignments: []
  },
  {
    key: 'html',
    text: 'HTML',
    assignments: []
  },
  {
    key: 'material ui',
    text: 'Material UI',
    assignments: []
  }
]

export default (
  state = {
    courses: initialState
  },
  action
) => {
  switch (action.type) {
    case ADD_ASSIGNMENT:
      return {
        ...state,
        courses: state.courses.map(course => {
          if (course.key === action.payload.courseKey) {
            return {
              ...course,
              assignments: [...course.assignments, action.payload.file]
            }
          } else {
            return course
          }
        })
      }
    case UPDATE_ASSIGNMENT:
      return {
        ...state,
        courses: state.courses.map(course => {
          if (course.key === action.payload.courseKey) {
            console.log('index--', action.payload.index)
            course.assignments[action.payload.index] = action.payload.file
            return {
              ...course,
              assignments: course.assignments
            }
          } else {
            return course
          }
        })
      }
    default:
      return state
  }
}
