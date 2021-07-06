

function pokedexApi(oriUrl, setNextUrl, nextUrl, poke, setPoke, name, setName) {
    fetch(oriUrl)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log('data :', data)
            setPoke([...poke, data.count])
            setNextUrl(data.next)
            setName(data.results)
        })
}

export default pokedexApi;