import React from 'react'
import { Icon, Popup } from 'UI'
import { connectPlayer, toggleEvents, scale } from 'Player';
import cn from 'classnames'
import stl from './EventsToggleButton.css'

function EventsToggleButton({ showEvents, toggleEvents }) {
  const toggle = () => {
    toggleEvents()
    scale()
  }
  return (
    <Popup
      trigger={
        <button
          className={cn("absolute right-0 z-50", stl.wrapper)}
          onClick={toggle}
        >
          <Icon
            name={ showEvents ? 'chevron-double-right' : 'chevron-double-left' }
            size="12"
          />      
        </button>
      }
      content={ showEvents ? 'Hide Events' : 'Show Events' }
      size="tiny"
      inverted
      position="bottom right"
    />
  )
}

export default connectPlayer(state => ({
  showEvents: !state.showEvents
}), { toggleEvents })(EventsToggleButton)

