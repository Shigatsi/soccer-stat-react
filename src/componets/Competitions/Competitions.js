import React from "react";
import { getCompetitions } from "../../utils/Api.js";

function Competitons() {
  const [competitions, setCompetitions] = React.useState([]);

  React.useEffect(() => {
    getCompetitions().then((res) => {
      console.log("competitions_res", res);
      setCompetitions(res.competitions);
    });
  }, []);

  const comments = [
    {
      id: 1,
      author: "Лиза",
      text: "Все уже сдали деньги на субботник?",
    },
    {
      id: 2,
      author: "Джеймс",
      text: "Никто не видел мой сэндвич?",
    },
    {
      id: 3,
      author: "Грег",
      text: "Продам мопед",
    },
  ];

  console.log("competitions from Competitions.js", competitions);

  return (
    <div>
      <h2>Сообщения</h2>

      {competitions.map((competition, i) => (
        // Важный атрибут: key
        <div key={i}>
          <p>{competition.code}</p>
          <p>{competition.area.id}</p>
        </div>
      ))}
    </div>
  );
}

export default Competitons;
