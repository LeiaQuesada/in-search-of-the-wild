import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";

const AddSighting = (props) => {
  let history = useHistory();
  const [individual_id, setIndividual_id] = useState();
  const [healthy, setHealthy] = useState(false);
  const [location, setLocation] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  function submitFindings() {
    // capture form creation date/time
    let now = new Date();
    console.log(now.toISOString());
    let reqBodyObj = {
      individual_id,
      healthy,
      location,
      date,
      time,
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
        history.push("/sightings"),

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
            value={individual_id}
            placeholder="Individual ID Number"
            onChange={(e) => {
              e.preventDefault();
              setIndividual_id(e.target.value);
            }}
          />
          <Label for="exampleDatetime">Location</Label>
          <Input
            type="text"
            name="Location"
            value={location}
            id="sightinglocation"
            placeholder="Location of wildlife observed"
            onChange={(e) => {
              e.preventDefault();
              setLocation(e.target.value);
            }}
          />
          <Label for="exampleDate">Date</Label>
          <Input
            type="date"
            name="date"
            value={date}
            id="exampleDate"
            placeholder="date placeholder"
            onChange={(e) => {
              e.preventDefault();
              setDate(e.target.value);
            }}
          />
          <Label for="exampleTime">Time</Label>
          <Input
            type="time"
            name="time"
            value={time}
            id="exampleTime"
            placeholder="time placeholder"
            onChange={(e) => {
              e.preventDefault();
              setTime(e.target.value);
            }}
          />
          <div className="form-check">
            <label className="form-check-label">
              <input
                name="healthy"
                type="checkbox"
                checked={healthy}
                onChange={(e) => {
                  setHealthy(e.target.checked);
                }}
                className="form-check-input"
              />
              Check box if specimen appears healthy
            </label>
          </div>
        </FormGroup>
        <Button color="secondary" onClick={submitFindings}>
          Submit Findings
        </Button>
      </Form>
    </>
  );
};

export default AddSighting;
