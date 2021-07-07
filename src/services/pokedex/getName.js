

function pokedexApi(oriUrl, setNextUrl, setBackUrl, setPoke, setName) {
    fetch(oriUrl)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            setPoke(data.count)
            setBackUrl(data.previous)
            setNextUrl(data.next)
            setName(data.results)
        })
}

export default pokedexApi;