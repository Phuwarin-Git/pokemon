import { useEffect, useState } from "react";
import { pokedexApi } from "../services/pokedex/getName";
import CardModal from "../component/modal/modal";
import IMG from "../component/picture/index.view";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pokedexPageRes.view.css";
const PokedexPage = () => {
  const [details, setDetails] = useState([]);
  const [count, setCount] = useState([]);
  const [page, setPage] = useState(0);

  let firstList = [2, 3, 4, 5, 6];
  let lastList = [107, 108, 109, 110, 111];
  const [pageI, setPageI] = useState(firstList);
  let ori = "https://pokeapi.co/api/v2/pokemon?offset=" + page + "&limit=10";
  useEffect(() => {
    pokedexApi(ori, setDetails, setCount);
  }, [ori]);

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

  const PreviousPage = () => {
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

  function CheckIMG() {
    if (page / 10 + 1 >= 65) {
      return false;
    } else {
      return true;
    }
  }

  function ChangePage(i) {
    setPage((i - 1) * 10);
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

  function EllipsisNextChange() {
    setPage(page + 100);
    const a = pageI.map((item) => {
      return item + 10;
    });
    return setPageI(a);
  }

  function EllipsisPreviousChange() {
    setPage(page - 100);
    const a = pageI.map((item) => {
      return item - 10;
    });
    return setPageI(a);
  }

  return (
    <div className="PaddingDiv">
      {console.log("rerender :")}
      <h1>Pokedex</h1>

      <Table
        className="tableResponsive"
        style={{ borderRadius: 20 }}
        striped
        borderless
        hover
        variant="dark"
      >
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
                  {CheckIMG() ? (
                    <IMG
                      src={
                        item.sprites.versions["generation-v"]?.["black-white"]
                          ?.animated.front_default
                      }
                    />
                  ) : (
                    <IMG src={item.sprites.front_default} />
                  )}
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
        <div className="pagingDiv">
          <Pagination>
            <Pagination.First className="paging" disabled />
            <Pagination.Prev className="paging" disabled />
            <Pagination.Item
              className="paging"
              active
              onClick={() => ChangePage(1)}
            >
              {1}
            </Pagination.Item>
            <Pagination.Ellipsis className="paging" disabled />
            {pageI.map((item) => {
              return (
                <Pagination.Item
                  className="paging"
                  key={item.index}
                  onClick={() => ChangePage(item)}
                >
                  {item}
                </Pagination.Item>
              );
            })}

            <Pagination.Ellipsis
              className="paging"
              onClick={() => EllipsisNextChange()}
            />
            <Pagination.Item className="paging" onClick={() => ChangePage(112)}>
              {112}
            </Pagination.Item>
            <Pagination.Next className="paging" onClick={() => NextPage()} />
            <Pagination.Last
              className="paging"
              onClick={() => ChangePage(112)}
            />
          </Pagination>
        </div>
      ) : (
        <div className="pagingDiv">
          <Pagination>
            <Pagination.First
              className="paging"
              onClick={() => ChangePage(1)}
            />
            <Pagination.Prev
              className="paging"
              onClick={() => PreviousPage()}
            />
            <Pagination.Item className="paging" onClick={() => ChangePage(1)}>
              {1}
            </Pagination.Item>
            <Pagination.Ellipsis
              className="paging"
              disabled={page / 10 + 1 <= 13}
              onClick={() => EllipsisPreviousChange()}
            />
            {pageI.map((item) => {
              return (
                <Pagination.Item
                  className="paging"
                  key={item}
                  active={item === page / 10 + 1}
                  onClick={() => ChangePage(item)}
                >
                  {item}
                </Pagination.Item>
              );
            })}
            <Pagination.Ellipsis
              className="paging"
              disabled={page / 10 + 1 >= 100}
              onClick={() => EllipsisNextChange()}
            />
            <Pagination.Item
              className="paging"
              active={page / 10 + 1 === 112}
              onClick={() => ChangePage(112)}
            >
              {112}
            </Pagination.Item>
            <Pagination.Next
              className="paging"
              disabled={page / 10 + 1 === 112}
              onClick={() => NextPage()}
            />
            <Pagination.Last
              className="paging"
              disabled={page / 10 + 1 === 112}
              onClick={() => ChangePage(112)}
            />
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default PokedexPage;
