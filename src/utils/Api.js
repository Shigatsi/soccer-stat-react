const getCompetitions = () => {
  return fetch("https://api.football-data.org/v2/competitions", {
    mode: "no-cors",
  })
    .then((res) => {
      console.log(res);
      // res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getCompetitions };
