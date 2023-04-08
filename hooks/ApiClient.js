import axios from 'axios'
import { getSession, signOut } from 'next-auth/react';


const ApiClient = () => {
    const instance = axios.create({
        baseURL: process.env.API_URL,
    })
    instance.interceptors.request.use(async (request) => {
        if(request.headers['Content-Type'] === 'multipart/form-data') {
            request.headers = {
                'Content-Type': 'multipart/form-data',
                'accept': 'application/json',
            }
        } else {
            request.headers = {
                'Content-Type': 'application/json',
                'accept': 'application/json',
            }
        }
       
        const session = await getSession();
     
        if (session) {
            request.headers.Authorization = `Bearer ${session.token}`;
        }
        return request
    })

    instance.interceptors.response.use(
        (response) => {
            return response.data
        },
        async (error) => {

            if (error.response.status == 401) {
                await signOut();
            }
            // console.log(error.response.status)
            return Promise.reject(error.response);

        }
    )

    return instance
}

export default ApiClient()