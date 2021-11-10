import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

import EventDashBoard from "../../features/events/eventDashBoard/EventDashBoard";
import NavBar from "../../features/nav/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Container className='main'>
        <EventDashBoard />
      </Container>
    </>
  );
}

export default App;
