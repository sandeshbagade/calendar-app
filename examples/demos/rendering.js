import React from 'react'
import BigCalendar from 'react-big-calendar'
import events from '../events'

function Event({ event }) {
  return (
    <span>
      <strong>{event.title}</strong>
      {event.desc && ':  ' + event.desc}
    </span>
  )
}

function EventAgenda({ event }) {
  return (
    <span>
      <em style={{ color: 'magenta' }}>{event.title}</em>
      <p>{event.desc}</p>
    </span>
  )
}

const customDayPropGetter = date => {
  if (date.getDate() === 7 || date.getDate() === 15)
    return {
      className: 'special-day',
      style: {
        border: 'solid 3px ' + (date.getDate() === 7 ? '#faa' : '#afa'),
      },
    }
  else return {}
}

const customSlotPropGetter = date => {
  if (date.getDate() === 7 || date.getDate() === 15)
    return {
      className: 'special-day',
    }
  else return {}
}

let Rendering = ({ localizer }) => (
  <BigCalendar
    events={events}
    localizer={localizer}
    defaultDate={new Date(2019, 2, 1)}
    defaultView={BigCalendar.Views.AGENDA}
    dayPropGetter={customDayPropGetter}
    slotPropGetter={customSlotPropGetter}
    components={{
      event: Event,
      agenda: {
        event: EventAgenda,
      },
    }}
  />
)
export default Rendering
