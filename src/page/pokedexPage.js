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
    const [backUrl, setBackUrl] = useState([])

    useEffect(() => {
        details.splice(0, 10)
        pokedexApi(oriUrl, setNextUrl, setBackUrl, setPoke, setName);

    }, [oriUrl])

    useEffect(() => {
        name.map((item) => {
            let url = item.url
            getDetails(url, setDetails);
        })
    }, [name])

    useEffect(() => {
        console.log('Detaisl :', details)
    }, [details])

    const changePage = ((page) => {
        setOriUrl(page)
    })

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
                        return <div key={item.url}>
                            <tr><p>{item.name}</p></tr>
                        </div>
                    })}
                </td>
                <td>{details?.map((item) => {

                    let pic = item.sprites.versions["generation-v"]?.["black-white"]?.animated.front_default
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
                        <tr>
                            <p><CardModal pic={item.sprites.other["official-artwork"]?.front_default}
                                weight={item.weight}
                                height={item.height}
                                name={item.name}
                            /></p>
                        </tr>
                    </div>
                })}</td>

            </Table>
            <Button onClick={() => changePage(backUrl)}>{"<<<"}</Button>
            {" "}
            <Button onClick={() => changePage(nextUrl)}>{">>>"}</Button> <br />
            Sum Pokemon : {poke}
        </div>
    )
}


export default PokedexPage;