

function getDetails(url, setDetails) {
    fetch(url)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            setDetails((details) => [...details, data])
        })
}

export default getDetails;