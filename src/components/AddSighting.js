import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const AddSighting = (props) => {
  return (
    <>
      <h3>Add your sighting data below:</h3>
      <Form>
        <FormGroup>
          <Label for="species">Species</Label>
          <Input
            type="text"
            name="species"
            id="species_id"
            placeholder="Species"
          />
          <Label for="individual">Individual</Label>
          <Input
            type="text"
            name="individual"
            id="individual_id"
            placeholder="Individual ID Number"
          />
          <Label for="exampleDatetime">Datetime</Label>
          <Input
            type="datetime"
            name="datetime"
            id="exampleDatetime"
            placeholder="datetime placeholder"
          />
          <Label for="exampleDate">Date</Label>
          <Input
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
          />
          <Label for="exampleTime">Time</Label>
          <Input
            type="time"
            name="time"
            id="exampleTime"
            placeholder="time placeholder"
          />
          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> Check box if specimen appears healthy
            </Label>
          </FormGroup>
        </FormGroup>
        <Button color="secondary">Submit Findings</Button>{" "}
      </Form>
    </>
  );
};

export default AddSighting;
