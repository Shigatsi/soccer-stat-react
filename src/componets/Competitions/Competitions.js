import React from "react";
import { getCompetitions } from "../../utils/Api.js";

function Competitons() {
  const [competitions, setCompetitions] = React.useState([]);

  React.useEffect(() => {
    getCompetitions().then((res) => {
      console.log("competitions_res", res);
      setCompetitions(res);
    });
  }, []);

  console.log("competitions from Competitions.js", competitions);
  return <div></div>;
}

export default Competitons;
