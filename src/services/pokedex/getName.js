

function pokedexApi(poke, setPoke, name, setName) {

    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=$%7Boffset%7D')
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            setPoke([...poke, data.count])
            setName(...name, data.results)
        })

}


export default pokedexApi;