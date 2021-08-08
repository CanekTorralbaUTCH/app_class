const BASE_URL = 'https://badges-api-example.herokuapp.com'

//Instances for the database in http
class Http {
    static instance = new Http()
    //Fetch all data from the badges
    get_all = async () => {
        try {
            //TFile a request to go to certain badge acording to the badge's url
            let request = await fetch(`${BASE_URL}/all/`)
            //Wait for a response for the request 
            let response = await request.json()
            //Return the result of the request
            return response
        } catch (err) {
            //In case of error throw the next message
            console.log('http get method', err)
            throw Error(err)
        }
    };
    //Fetch the id from a certain badge
    get = async badgeId => {
        try {
            let request = await fetch(`${BASE_URL}/_id:${badgeId}/`)
            let response = await request.json()
            return response
        } catch (err) {
            console.log('http get method error', err)
            throw Error(err)
        }
    };
    //Create a new badge
    post = async badge => {
        try {
            //Create a new entry in the database using the method POST
            let request = await fetch(`${BASE_URL}/new/`,{
                method:'POST',
                body:JSON.stringify(badge),
            });
            let response = await request.json()
            return response
        } catch (err) {
            console.log('http post method error', err)
            throw Error(err)
        }
    };
    //Edit the a certain badge's body from its ID
    put = async (badgeId, body) => {
        try {
            //Search for the badge's ID and enter the changes you want
            let request = await fetch(`${URLS.badges_url}/_id:${badgeId}/`,{
                method:'PUT',
                body:JSON.stringify(body),
            });
            let response = await request.json()
            return response
        } catch (err) {
            console.log('http put method error', err)
            throw Error(err)
        }
    };
    //Remove both the badge and its ID from the database
    remove = async badgeId => {
        try {
            //Find the badge from its ID and delete it
            let request = await fetch(`${URLS.badges_url}/_id:${badgeId}/`,{
                method:'DELETE',
            })
            let response = await request.json()
            return response
        } catch (err) {
            console.log('http delete method error', err)
            throw Error(err)
        }
    };
}

export default Http;