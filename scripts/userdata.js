    export const userdata = () => {

        return fetch("https://randomuser.me/api/?exc=login")
        .then(response => response.json())
        .then(parsedResponse => {
            console.log(parsedResponse.results[0])
            return parsedResponse.results[0];
        })
    }