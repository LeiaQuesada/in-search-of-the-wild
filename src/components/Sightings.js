import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import redlistimage from "../redlistindex.png";

const Sightings = () => {
  return (
    <>
      <div
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          display: "block",
        }}
      >
        <img
          src={redlistimage}
          width="512"
          height="137"
          alt="index for conservation status code"
        />
      </div>
      <div style={{ marginLeft: "15%" }}>
        <div className="p-2 my-3 rounded">
          <Toast>
            <ToastHeader>Individual Sightings</ToastHeader>
            <ToastBody>
              <ul>
                <li>this is really ugly</li>
                <li>so far</li>
                <li>hopefully</li>
                <li>this looks better</li>
                <li>mañana</li>
              </ul>
              Aha the toast body is reactive to content does this get really
              wide
              <p>
                does it include tags
                <stong>todo: look up react toast attributes</stong>
              </p>
              <br />
            </ToastBody>
          </Toast>
        </div>
      </div>
    </>
  );
};

export default Sightings;
