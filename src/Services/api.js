const getDataFromApi = () => {
  return fetch("//rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((dataApi) => {
      return dataApi.results;
    });
};

export default {
  getDataFromApi: getDataFromApi,
};
