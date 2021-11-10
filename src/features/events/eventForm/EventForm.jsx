import React from "react";
import { Button, Form, Header, Input, Segment } from "semantic-ui-react";

export default function EventForm({ setFormOpen, closeFormHandle }) {
  // const [formOpen, setFormOpen] = useState(false);

  return (
    <Segment clearing>
      <Header content='Create new event' />
      <Form.Field>
        <Input type='text' placeholder='Event title' />
      </Form.Field>
      <Form.Field>
        <Input type='text' placeholder='Category' />
      </Form.Field>
      <Form.Field>
        <Input type='text' placeholder='Description' />
      </Form.Field>
      <Form.Field>
        <Input type='text' placeholder='City' />
      </Form.Field>
      <Form.Field>
        <Input type='text' placeholder='Venue' />
      </Form.Field>
      <Form.Field>
        <Input type='Date' placeholder='Date' />
      </Form.Field>
      <Button
        type='submit'
        floated='right'
        content='cancel'
        onClick={closeFormHandle}
      />
      <Button type='submit' floated='right' positive content='submit' />
    </Segment>
  );
}
