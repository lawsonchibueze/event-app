import React from 'react'
import EventListItems from './EventListItems'

export default function EventsList(props) {
    
    
    return (
        <>
            {props.events.map((event)=>(
                <EventListItems event = {event} key = {event.id}/>
            ))}
        </>
    )
}
