import { useEffect, useState } from 'react';
import pokedexApi from '../services/pokedex/getName';
import getDetails from '../services/pokedex/getDetails';
import Button from '../component/button/index.view'
import Table from '../component/table/index.view'
import IMG from '../component/picture/index.view';

const PokedexPage = () => {
    const [poke, setPoke] = useState([])
    const [name, setName] = useState([])
    const [details, setDetails] = useState([])

    useEffect(() => {
        pokedexApi(poke, setPoke, name, setName);
    }, [])

    useEffect(() => {
        name.map((item) => {
            let url = item.url
            getDetails(url, setDetails);
        })
    }, [name])

    console.log('Details :', details)

    return (
        <div>
            <h1>Pokedex</h1>
            <Table>
                <tr>
                    <th>Name</th>
                    <th>Picture</th>
                    <th>Weight</th>
                    <th>Height</th>
                    <th>Details</th>
                </tr>
                <td>
                    {name.map((item) => {
                        return <div key={item.url}>
                            <tr><p>{item.name}</p></tr>
                        </div>
                    })}
                </td>
                <td>{details.map((item) => {
                    let pic = item.sprites.other.dream_world.front_default
                    return <div><tr><IMG src={pic} /></tr></div>
                })}</td>
                <td>{details.map((item) => {
                    return <div><tr><p>{item.weight}</p></tr></div>
                })}</td>
                <td>{details.map((item) => {
                    return <div><tr><p>{item.height}</p></tr></div>
                })}</td>
                <td><Button>Details</Button></td>



            </Table>
            Sum Pokemon : {poke}<br></br>
        </div>
    )
}


export default PokedexPage;