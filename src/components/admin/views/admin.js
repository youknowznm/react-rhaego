import React from 'react'
import {connect} from 'react-redux'
import {Divider} from 'material-ui'
import ExitToAppIcon from 'material-ui-icons/ExitToApp'
import NoteAddIcon from 'material-ui-icons/NoteAdd'
import {Link} from 'react-router'
import List, {
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'material-ui/List'
import {toggleLogoutDialog} from '../actions'
import Logout from './logout'

import './admin.css'

class ControlPanel extends React.Component {
  render() {
    const {
      openLogoutDialog,
    } = this.props
    return (
      <div className="admin-items">
        <List>
          <Link to="/admin/editor">
            <ListItem button>
              <ListItemIcon>
                <NoteAddIcon />
              </ListItemIcon>
              <ListItemText inset primary="New Article" />
            </ListItem>
          </Link>
        </List>

        <Divider />

        <List>
          <ListItem button onClick={openLogoutDialog}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText inset primary="Log Out" />
          </ListItem>
        </List>

        <Logout />

      </div>
    )
  }
}

const mapState = (state) => ({
  dialogOpen: state.admin.dialogOpen,
})

const mapDispatch = (dispatch) => ({
  openLogoutDialog: () => {
    dispatch(toggleLogoutDialog(true))
  },
})

export default connect(mapState, mapDispatch)(ControlPanel)
