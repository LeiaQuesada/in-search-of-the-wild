import React from "react";
import { useHistory } from "react-router-dom";

const Sighting = (props) => {
  const { date, time, location, nickname } = props;
  let history = useHistory();

  const displayIndividual = (individual_id) => {
    console.log(individual_id);
    history.push(`/individual/${individual_id}`);
  };

  return <></>;
};
export default Sighting;
