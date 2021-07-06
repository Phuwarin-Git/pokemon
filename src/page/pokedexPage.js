import { useEffect, useState } from 'react';
import pokedexApi from '../services/pokedex/getName';
import getDetails from '../services/pokedex/getDetails';
import CardModal from '../component/modal/modal';
import Button from '../component/button/index.view';
import Table from '../component/table/index.view';
import IMG from '../component/picture/index.view';

const PokedexPage = () => {
    let ori = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=$%7Boffset%7D'
    const [poke, setPoke] = useState([])
    const [name, setName] = useState([])
    const [details, setDetails] = useState([])
    const [oriUrl, setOriUrl] = useState(ori)
    const [nextUrl, setNextUrl] = useState([])

    useEffect(() => {
        pokedexApi(oriUrl, setNextUrl, nextUrl, poke, setPoke, name, setName);
        console.log('Effect :', oriUrl)
    }, [oriUrl])

    useEffect(() => {
        name.map((item) => {
            let url = item.url
            getDetails(url, setDetails);
        })
    }, [name])

    const changePage = ((next) => {
        setOriUrl(next)
        console.log('Next :', next)
        console.log('Ori :', oriUrl)
    })

    console.log('Name :', name)

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
                    {name?.map((item) => {
                        console.log('item :', item)
                        console.log('Mao URL :', item.url)
                        console.log("name.map :", item.name)
                        return <div key={item.url}>
                            <tr><p>{item.name}</p></tr>
                        </div>
                    })}
                </td>
                <td>{details?.map((item) => {
                    let pic = item.sprites.other.dream_world.front_default
                    return <div><tr><IMG src={pic} /></tr></div>
                })}</td>
                <td>{details?.map((item) => {
                    return <div><tr><p>{item.weight}</p></tr></div>
                })}</td>
                <td>{details?.map((item) => {
                    return <div><tr><p>{item.height}</p></tr></div>
                })}</td>
                <td>{details?.map((item) => {
                    return <div>
                        {/* item.sprites.other.dream_world.front_default */}
                        <tr>
                            <p><CardModal pic={item.sprites.versions["generation-v"]?.["black-white"]?.animated.front_default}
                                weight={item.weight}
                                height={item.height}
                                name={item.name}
                            /></p>
                        </tr>
                    </div>
                })}</td>

            </Table>
            <Button onClick={() => changePage(nextUrl)}>{">>>"}</Button><br />
            Sum Pokemon : {poke}
        </div>
    )
}


export default PokedexPage;