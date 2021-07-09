export const pokedexApi = async (oriUrl, setDetails) => {
  const fetchData = await fetch(oriUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data.results;
    });

  const newArr = await Promise.all(
    fetchData.map((res) => fetch(res.url).then((reponse) => reponse.json()))
  ).then((response) => {
    return response;
  });
  setDetails(newArr);
};
