import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import Assignments from './Assignments'

const ExpansionPanel = withStyles({
  root: {
    border: '2px solid rgba(0, 0, 0, .155)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(MuiExpansionPanel)

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiExpansionPanelDetails)

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56
    }
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary)

export default function CustomizedExpansionPanels (course, id, expanded, setExpanded) {
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }
  const { text, key, topics } = course
  console.log('collapse', topics)
  return (
    <div key={`panel_${id}`}>
      <ExpansionPanel
        key={`expansionpanel_${id}`}
        square
        expanded={expanded === `panel_${id}`}
        onChange={handleChange(`panel_${id}`)}
      >
        <ExpansionPanelSummary aria-controls={`panel_${id}d-content`} id={`panel_${id}d-header`}>
          <Typography style={{ color: 'blue' }}>{text}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Assignments key={key} course={course} courseKey={key} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}
