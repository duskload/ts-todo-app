import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import MenuIcon from '@material-ui/icons/MoreVert'
import CompleteIcon from '@material-ui/icons/Check'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import { RemoveTodoAction, MarkTodoComplete } from '../constants/types'

import './ItemMenu.scss'

interface IItemMenuProps {
  id: number
  removeTodo(id: number): RemoveTodoAction
  markTodoComplete(id: number): MarkTodoComplete
}

const ItemMenu: React.FC<IItemMenuProps> = (props) => {
  const MENU_ITEMS = [
    { type: 'complete', text: 'Complete', icon: <CompleteIcon className='menu-icon-item complete' /> },
    { type: 'delete', text: 'Delete', icon: <DeleteIcon className='menu-icon-item delete' /> }
  ]

  const [anchorEl, setAnchorEl] = useState(null)

  const onClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  const onClose = () => setAnchorEl(null)

  const onMenuItemClick = (type: string) => {
    if (type === 'delete') {
      props.removeTodo(props.id)
    }

    if (type === 'complete') {
      props.markTodoComplete(props.id)
    }
    onClose()
  }

  const renderMenuItems = () => {
    return MENU_ITEMS.map(item => {
      return (
        <MenuItem key={item.text} onClick={() => onMenuItemClick(item.type)}>
         {item.icon}
         <span>{item.text}</span>
        </MenuItem>
      )
    })
  }

  return (
    <div className="icon-menu-wrapper">
      <IconButton onClick={onClick}>
        <MenuIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={onClose}>
        {renderMenuItems()}
      </Menu>
    </div>
  )
}

export { ItemMenu }
