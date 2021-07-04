import { useEffect, useState } from 'react';
import pokedexApi from '../services/pokedex/pokedexApi';
import Button from '../component/button/index.view'

const PokedexPage = () => {
    const [poke, setPoke] = useState([])
    const [name, setName] = useState([])

    useEffect(() => {
        pokedexApi(poke, setPoke, name, setName);
    }, [])


    console.log('Pokedex at Page :', poke)
    console.log('Name :', name)
    return (
        <div>
            <h1>Pokedex</h1>
            <table><th>Name</th>
                <th>Picture</th>
                <th>Weight</th>
                <th>Height</th>
                <th>Details</th>
                <tr><td>
                    {name.map((item) => {
                        return <div key={item.url}>

                            <p>Name :{item.name}</p>


                        </div>
                    })}</td>

                    <td><p>Name :</p></td>
                    <td><p>Name :</p></td>
                    <td><p>Name :</p></td>
                    <td><Button>Hello</Button></td>
                </tr>
            </table>
            Sum Pokemon : {poke}<br></br>
        </div>
    )
}


export default PokedexPage;