import { useEffect, useState } from "react";
import { pokedexApi } from "../services/pokedex/getName";
import CardModal from "../component/modal/modal";
import IMG from "../component/picture/index.view";
import NextButton from "../component/button/nextButton";
import BackButton from "../component/button/backButton.js";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const PokedexPage = () => {
  const [details, setDetails] = useState([]);
  const [page, setPage] = useState(0);
  let ori = "https://pokeapi.co/api/v2/pokemon?offset=" + page + "&limit=10";
  useEffect(() => {
    pokedexApi(ori, setDetails);
  }, [ori]);

  const NextPage = () => {
    setPage(page + 10);
  };

  const BackPage = () => {
    setPage(page - 10);
  };

  function CheckNull(value) {
    if (value === 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div>
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
          {details.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <p>{item.name}</p>
                </td>
                <td>
                  <IMG
                    src={
                      item.sprites.versions["generation-v"]?.["black-white"]
                        ?.animated.front_default
                    }
                  />
                </td>
                <td>
                  <p>{item.weight}</p>
                </td>
                <td>
                  <p>{item.height}</p>
                </td>
                <td>
                  <CardModal
                    pic={item.sprites.other["official-artwork"].front_default}
                    weight={item.weight}
                    height={item.height}
                    name={item.name}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {CheckNull(page) ? (
        <div>
          <NextButton style={{ marginLeft: 500 }} onClick={() => NextPage()}>
            {">"}
          </NextButton>
        </div>
      ) : (
        <div>
          <BackButton onClick={() => BackPage()}>{"<"}</BackButton>{" "}
          <NextButton onClick={() => NextPage()}>{">"}</NextButton>
        </div>
      )}
    </div>
  );
};

export default PokedexPage;
