import React from 'react'
import EventListItems from './EventListItems'

export default function EventsList({events,selectedEvent}) {
    
    
    return (
        <>
            {events.map((event)=>(
                
                <EventListItems event = {event} key = {event.id} selectedEvent = {selectedEvent}/>
            ))}
        </>
    )
}
