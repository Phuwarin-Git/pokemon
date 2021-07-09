import { useEffect, useState } from "react";
import { pokedexApi } from "../services/pokedex/getName";
import CardModal from "../component/modal/modal";
import IMG from "../component/picture/index.view";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";

const PokedexPage = () => {
  const [details, setDetails] = useState([]);
  const [count, setCount] = useState([]);
  const [page, setPage] = useState(0);
  let ori = "https://pokeapi.co/api/v2/pokemon?offset=" + page + "&limit=10";
  useEffect(() => {
    pokedexApi(ori, setDetails, setCount);
  }, [ori]);

  const NextPage = () => {
    setPage(page + 10);
  };

  const BackPage = () => {
    setPage(page - 10);
  };

  function CheckNull() {
    if (page === 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log("data :", details);
  return (
    <div>
      {console.log("rerender :")}
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
          <center>
            <Pagination>
              <Pagination.First disabled />
              <Pagination.Prev disabled />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Item>{6}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{112}</Pagination.Item>
              <Pagination.Next onClick={() => NextPage()} />
              <Pagination.Last />
            </Pagination>
            <p>Sum of Pokemon : {count}</p>
          </center>
        </div>
      ) : (
        <div>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev onClick={() => BackPage()} />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{112}</Pagination.Item>
            <Pagination.Next onClick={() => NextPage()} />
            <Pagination.Last />
          </Pagination>
          <p>Sum of Pokemon: {count}</p>
        </div>
      )}
    </div>
  );
};

export default PokedexPage;
