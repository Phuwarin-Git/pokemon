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

  let firstList = [2, 3, 4, 5, 6];
  let lastList = [107, 108, 109, 110, 111];
  const [pageI, setPageI] = useState(firstList);
  //   const [picture, setPicture] = useState();
  let ori = "https://pokeapi.co/api/v2/pokemon?offset=" + page + "&limit=10";
  useEffect(() => {
    pokedexApi(ori, setDetails, setCount);
  }, [ori]);

  useEffect(() => {
    console.log("page :", page);
  }, [page]);

  useEffect(() => {
    console.log("pageI :", pageI);
  }, [pageI]);

  const NextPage = () => {
    if (page >= 1080) {
      if (page === 1110) {
        return setPageI(lastList);
      }
      setPage(page + 10);
      return setPageI(lastList);
    } else if (page < 30) {
      setPage(page + 10);
      return setPageI(firstList);
    } else {
      setPage(page + 10);
      const a = pageI.map((item) => {
        return item + 1;
      });
      setPageI(a);
    }
  };

  const BackPage = () => {
    if (page > 1080) {
      setPage(page - 10);
      return setPageI(lastList);
    } else if (page <= 30) {
      setPage(page - 10);
      return setPageI(firstList);
    } else {
      setPage(page - 10);
      const a = pageI.map((item) => {
        return item - 1;
      });
      setPageI(a);
    }
  };

  function CheckNull() {
    if (page === 0) {
      return true;
    } else {
      return false;
    }
  }

  function ChangePage(i) {
    setPage((i - 1) * 10);
    console.log("i :", i);
    if (i <= 4) {
      return setPageI(firstList);
    } else if (i > 4) {
      if (i < pageI[1]) {
        const a = pageI.map((item) => {
          return item - 2;
        });
        setPageI(a);
      } else if (i < pageI[2]) {
        const a = pageI.map((item) => {
          return item - 1;
        });
        setPageI(a);
      } else if (i === pageI[2]) {
        console.log("Current page!!!!", [pageI[2]]);
      } else if (i >= 109) {
        setPageI(lastList);
      } else if (i > pageI[3]) {
        const a = pageI.map((item) => {
          return item + 2;
        });
        setPageI(a);
      } else if (i > pageI[2]) {
        const a = pageI.map((item) => {
          return item + 1;
        });
        setPageI(a);
      }
    }
  }

  return (
    <div>
      {/* {console.log("rerender :")} */}
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
          <Pagination style={{ marginLeft: 50 }}>
            <Pagination.First disabled />
            <Pagination.Prev disabled />
            <Pagination.Item onClick={() => ChangePage(1)}>{1}</Pagination.Item>
            {pageI.map((item) => {
              return (
                <Pagination.Item
                  key={item.index}
                  onClick={() => ChangePage(item)}
                >
                  {item}
                </Pagination.Item>
              );
            })}

            <Pagination.Ellipsis />
            <Pagination.Item onClick={() => ChangePage(112)}>
              {112}
            </Pagination.Item>
            <Pagination.Next onClick={() => NextPage()} />
            <Pagination.Last onClick={() => ChangePage(112)} />
          </Pagination>
          <p>Sum of Pokemon : {count}</p>
        </div>
      ) : (
        <div>
          <Pagination>
            <Pagination.First onClick={() => ChangePage(1)} />
            <Pagination.Prev onClick={() => BackPage()} />
            <Pagination.Item onClick={() => ChangePage(1)}>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            {pageI.map((item) => {
              return (
                <Pagination.Item
                  key={item.index}
                  onClick={() => ChangePage(item)}
                >
                  {item}
                </Pagination.Item>
              );
            })}

            <Pagination.Ellipsis />
            <Pagination.Item onClick={() => ChangePage(112)}>
              {112}
            </Pagination.Item>
            <Pagination.Next onClick={() => NextPage()} />
            <Pagination.Last onClick={() => ChangePage(112)} />
          </Pagination>
          <p>Sum of Pokemon: {count}</p>
          <p>Current Page : {page / 10 + 1}</p>
        </div>
      )}
    </div>
  );
};

export default PokedexPage;
