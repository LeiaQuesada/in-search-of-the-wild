import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const AddSighting = (props) => {
  function submitFindings() {
    // capture form creation date/time
    let now = new Date();
    console.log(now.toISOString());
    let reqBodyObj = {
      species: "foo",
      creationdate: now.toISOString(),
    };
    fetch(`http://localhost:5000/addsighting`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqBodyObj),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          if (result.success) {
            alert(result.message);
          }
        },
        (error) => {
          alert(error);
        }
      );
  }

  const submitForm = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <>
      <h3>Add your sighting data below:</h3>
      <Form onSubmit={submitForm}>
        <FormGroup>
          <Label for="individual">Individual</Label>
          <Input
            type="text"
            name="individual"
            id="individual_id"
            placeholder="Individual ID Number"
          />
          <Label for="exampleDatetime">Location</Label>
          <Input
            type="text"
            name="Location"
            id="sightinglocation"
            placeholder="Location of wildlife observed"
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
        <Button color="secondary" onClick={submitFindings}>
          Submit Findings
        </Button>{" "}
      </Form>
    </>
  );
};

export default AddSighting;
