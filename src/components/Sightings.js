import React from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

const Sightings = () => {
  return (
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
          Aha the toast body is reactive to content does this get really wide
          <p>
            does it include tags
            <stong>todo: look up react toast attributes</stong>
          </p>
          <br />
        </ToastBody>
      </Toast>
      <Toast>
        <ToastHeader>Individual Sightings</ToastHeader>
        <ToastBody>
          <ol>
            <li>testing</li>
            <li>i just remembered</li>
            <li>Naomi mentioned the </li>
            <li>lorem impsum cat</li>
            <li>mañana</li>
          </ol>
          <p>
            Take a deep sniff of sock then walk around with mouth half open
            there's a forty year old lady there let us feast and chew foot
            spread kitty litter all over house do doodoo in the litter-box,
            clickityclack on the piano, be frumpygrumpy yet going to catch the
            red dot today going to catch the red dot today.
          </p>
          <p>does it include tags</p>
          aha so it does
          <br />
        </ToastBody>
      </Toast>
    </div>
  );
};

export default Sightings;
