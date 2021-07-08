import { useEffect, useState } from 'react';
import { pokedexApi } from '../services/pokedex/getName';
import getDetails from '../services/pokedex/getDetails';
import CardModal from '../component/modal/modal';
import IMG from '../component/picture/index.view';
import NextButton from '../component/button/nextButton';
import BackButton from '../component/button/backButton.js'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


const PokedexPage = () => {
    let ori = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10'
    const [poke, setPoke] = useState([])
    const [name, setName] = useState([])
    const [details, setDetails] = useState([])
    const [oriUrl, setOriUrl] = useState(ori)
    const [nextUrl, setNextUrl] = useState()
    const [backUrl, setBackUrl] = useState()

    useEffect(() => {
        // details.splice(0, 10)
        pokedexApi(oriUrl, setNextUrl, setBackUrl, setPoke, setName, details, setDetails);
    }, [oriUrl])

    // useEffect(() => {
    //     name.map((item) => {
    //         let url = item.url
    //         getDetails(url, setDetails);
    //     })
    // }, [name])

    // useEffect(() => {
    //     console.log("Back :", backUrl)
    //     console.log("Next :", nextUrl)
    // }, [name])

    const NextPage = ((page) => {
        setOriUrl(page)
    })

    const BackPage = ((page) => {
        setOriUrl(page)
    })



    function CheckNull(value) {
        if (value == null) {
            return true;
        } else {
            return false;
        }
    }

    return (
        < div >
            {console.log("rerender")}
            <h1>Pokedex</h1>
            <Table style={{ borderRadius: 20 }} striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Picture</th>
                        <th>Weight</th>
                        <th>Height</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {details?.slice(0, 10).map((item) => {
                                return <div key={item.location_area_encounters}>
                                    <p>{item.name}</p><br />
                                </div>
                            })}
                        </td>
                        <td>{details?.slice(0, 10).map((item) => {
                            let pic = item.sprites.versions["generation-v"]?.["black-white"]?.animated.front_default
                            return <div><IMG src={pic} /><br /></div>
                        })}</td>
                        <td>{details?.slice(0, 10).map((item) => {
                            return <div><p>{item.weight}</p><br /></div>
                        })}</td>
                        <td>{details?.slice(0, 10).map((item) => {
                            return <div><p>{item.height}</p><br /></div>
                        })}</td>
                        <td>{details?.slice(0, 10).map((item) => {
                            return <div>
                                <p><CardModal pic={item.sprites.other["official-artwork"]?.front_default}
                                    weight={item.weight}
                                    height={item.height}
                                    name={item.name}
                                /></p>
                                <br />
                            </div>
                        })}</td>
                    </tr>
                </tbody>
            </Table>
            {
                CheckNull(backUrl) ? (
                    <div>
                        <NextButton style={{ marginLeft: 500 }} onClick={() => NextPage(nextUrl)}>{">"}</NextButton>

                    </div>
                ) : (
                    <div>
                        <BackButton onClick={() => BackPage(backUrl)}>{"<"}</BackButton>
                        {" "}
                        <NextButton onClick={() => NextPage(nextUrl)}>{">"}</NextButton>
                    </div>
                )
            }
        </div >
    )
}


export default PokedexPage;