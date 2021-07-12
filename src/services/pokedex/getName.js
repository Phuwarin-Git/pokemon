export const pokedexApi = async (oriUrl, setDetails, setCount) => {
  const fetchData = await fetch(oriUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      setCount(data.count);
      return data.results;
    });

  const newArr = await Promise.all(
    fetchData.map((res) => fetch(res.url).then((reponse) => reponse.json()))
  ).then((response) => {
    return response;
  });
  setDetails(newArr);
};
