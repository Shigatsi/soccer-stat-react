//проверки ответа сервера и преобразование из json
const checkRes = (res) =>
  res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);

const getCompetitions = () => {
  return fetch("https://api.football-data.org/v2/competitions", {
    mode: "cors",
    dataType: "json",
    method: "GET",
    headers: {
      "X-Auth-Token": "798bee720aea4400a45f7e33420a67c2",
    },
  })
    .then(checkRes)
    .then((res) => {
      return res;
    })

    .catch((err) => {
      console.log(err);
    });
};

export { getCompetitions };
