import React from "react";
import { getCompetitions } from "../../utils/Api.js";

function Competitons() {
  const [competitions, setCompetitions] = React.useState([]);

  React.useEffect(() => {
    setCompetitions(getCompetitions());
  }, []);
  // const parsCompetitions = JSON.parse(competitions);
  // console.log("parsCompetitions", parsCompetitions);

  console.log("competitions from Competitions.js", competitions);
  return (
    <div>
      {/* {competitions.map((competition) => (
        <p>{competition}</p>
      ))} */}
    </div>
  );
}

export default Competitons;
