import React from "react";
import { getCompetitions } from "../../utils/Api.js";

function Competitons() {
  const [competitions, setCompetitions] = React.useState([]);

  React.useEffect(() => {
    setCompetitions(getCompetitions());
  }, []);

  console.log("competitions", competitions);
  return (
    <div>
      {/* {competitions.map((competition) => (
        <p>{competition}</p>
      ))} */}
    </div>
  );
}

export default Competitons;
