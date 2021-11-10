import { Button, Grid, GridColumn } from "semantic-ui-react";
import EventForm from "../eventForm/EventForm";
import EventsList from "./EventsList";
import { sampleData } from "../../../app/api/SampleData";
import { useState } from "react";

export default function EventDashBoard() {
  const [events, setEvent] = useState(sampleData);
  const [formOpen, setFormOpen] = useState(false);
  const handleform = () => {
    return setFormOpen(true);
  };

  const closeFormHandle = () =>{
    return setFormOpen(false)
  }
  return (
    <Grid>
      <GridColumn width={10}>
        <EventsList events={events} />
      </GridColumn>
      <GridColumn width={6}>
        {/* <button onClick={handleform}>Create An Event</button> */}
        <Button positive inverted content = "Create Event" onClick = {handleform}/>
        {/* <Button positive inverted content='Create Event' /> */}
        {formOpen && <EventForm setFormOpen = {setFormOpen} closeFormHandle = {closeFormHandle}/>}
      </GridColumn>
    </Grid>
  );
}
