import axios from "axios"
import { useEffect, useState } from "react"

const getData = async(url) => {
    const data = await axios({
        method: 'get',
        url,
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
    })

    return data;
}

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        loading: true
    })

    useEffect(() => {
        getData(url)
            .then(data => {
                setState({
                    data: data,
                    loading: false
                })
            })
    }, [url])

    return state;
}