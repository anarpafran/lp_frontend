import config  from './../config'
class Api  {
    getFullURL(url){
        return `${config.BASE_URL}${url}`
    }

    get({ url, headers = {} }){
        const options = { headers }
        return fetch(this.getFullURL(url), options)
    }

    post({ url, headers = {}, body = {} }){
        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        }
        return fetch(this.getFullURL(url), options)
    }
}

export const postRequest = async(application) => {
    const api = new Api();
    try {
        const res = await api.post({
            url: `/applications`, 
            body: application,
            headers: {'Content-Type': 'application/json'}
        })
        return await res.json();
    } catch (error) {
        throw error
    }
}
