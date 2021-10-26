import React from "react";
import { getCompetitions } from "../../utils/Api.js";

function Competitons() {
  const [competitions, setCompetitions] = React.useState([]);

  React.useEffect(() => {
    setCompetitions(getCompetitions());
  }, []);

  console.log(competitions);
  return <div></div>;
}

export default Competitons;
