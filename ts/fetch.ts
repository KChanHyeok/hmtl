
const DEFAULT_URL = 'https://jsonplaceholder.typicode.com/'
const RESPONSE_TYPE = 'json'

class APICaller {
    constructor() {}

    _mergeUrl(url:string, params = null) {
        const defaultUrl = DEFAULT_URL[DEFAULT_URL.length - 1] === '/' ? DEFAULT_URL.substr(0, DEFAULT_URL.length - 1) : DEFAULT_URL
        url = url[0] === '/' ? url.substr(1) : url

        let retValue = `${defaultUrl}/${url}`
        
        if (params != null) {
            const queryStrings = []
            for (let k of Object.keys(params)) {
                queryStrings.push(`${k}=${encodeURIComponent(params[k])}`)
            }
            retValue = retValue + '?' + queryStrings.join('&')
            
        }
        return retValue
    }

    async get(url:string, params:null){
        const response = await fetch(this._mergeUrl(url, params))
        return response
    }

    async post(url:string, data:string, params:null){
        const response = await fetch(this._mergeUrl(url, params), {
            method: 'POST',
            headers: {'Content-type': `application/${RESPONSE_TYPE}; charset=UTF-8`}, // application/json, application/x-www-urlencoded
            body: JSON.stringify(data),
        })
        return response
    }

    async put(url:string, data:string, params:null){
        const response = await fetch(this._mergeUrl(url, params), {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {'Content-type': `application/${RESPONSE_TYPE}; charset=UTF-8`},
        })
        return response 
    }
    async delete(url:string, params:null){
        const response = await fetch(this._mergeUrl(url, params), {
            method: 'DELETE'
        })
        return response
    }
    async patch(url:string, data:string, params:null){
        const response = await fetch(this._mergeUrl(url, params), {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {'Content-type': `application/${RESPONSE_TYPE}; charset=UTF-8`}
        })
        return response
    }
}