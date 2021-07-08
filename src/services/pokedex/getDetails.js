

function getDetails(url, setDetails) {
    fetch(url)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            setDetails((details) => [...details, data])
        })
}

export default getDetails;

// export const fetchData = async ({
//     offset,
//     recordData,
//     recordTotal,
//   }: {
//     offset: number;
//     recordData: (data: Record<string, any>) => void;
//     recordTotal: (total: number) => void;
//   }) => {
//     const MEDIUM_RSS = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`;
//     const total = await Axios.get(MEDIUM_RSS).then((res) => {
//       return res.data.count;
//     });
//     const data = await Axios.get(MEDIUM_RSS).then((res) => {
//       return Promise.all(
//         res.data.results.map((item: Data) => Axios.get(item.url))
//       ).then((res) => {
//         return res;
//       });
//     });
//     const newData = data.map((item: any) => {
//       return {
//         name: item.data.name,
//         picture: item.data.sprites.other.dream_world.front_default,
//         weight: item.data.weight,
//         height: item.data.height,
//         details: "Details",
//       };
//     });
//     recordData(newData);
//     recordTotal(total);
//     return <div></div>;
//   };