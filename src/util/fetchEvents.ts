import axios, { AxiosResponse } from 'axios';
import { Events } from '../models/events';

export default async function fetchEvents() {
    // 'http://100.26.246.4:5000/events'
    // 'http://localhost:5000/events'
    try { 
        const response: AxiosResponse<any> = await axios.get('http://100.26.246.4:5000/events');
        return makeEvents(response);
    } catch (error) {
        console.log(error.config);
        if (error.response) {
            throw new Error(`Axios response error: ${error.response.data}\nStatus: ${error.response.status}\nHeaders: ${error.response.headers}`);
        } else if (error.request) {
            throw new Error(`Axios request error: ${error.request}`);
        } else {
            throw new Error(`Axios error: ${error.message}`);
        }
    }
}

function makeEvents(response: AxiosResponse<any>) {
    let fetchedOfficers: Events[] = [];
    response.data.forEach((item: Events) => {
        fetchedOfficers.push(item);
    });
    return fetchedOfficers;
}