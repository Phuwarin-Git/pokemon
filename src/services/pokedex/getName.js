

export const pokedexApi = async (oriUrl, setNextUrl, setBackUrl, setPoke, setName, details, setDetails) => {
    const fetchData = fetch(oriUrl)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            setPoke(data.count)
            setBackUrl(data.previous)
            setNextUrl(data.next)
            setName(data.results)
            return data.results.url;
        })

    const getData = await Axios.get(oriUrl).then((res) => {
        return Promise.all(
            res.data.results.map((item) => Axios.get(item.url))
        ).then((res) => {
            return res;
        });
    });

    console.log('Fetch Data :', getData)

    // const getData = fetchData.map((item) => {
    //     return {
    //         name: item.name,
    //         picture: item.sprites.other.dream_world.front_default,
    //         weight: item.weight,
    //         height: item.height,
    //     };
    // });

};




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