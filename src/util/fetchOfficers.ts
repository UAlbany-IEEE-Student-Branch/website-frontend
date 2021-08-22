import axios, { AxiosResponse } from 'axios';
import { Members } from '../models/members';

async function fetchOfficers(officerType: string) {
    // 'http://100.26.246.4:5000/members/' + officerType
    // 'http://localhost:5000/members/' + officerType
    try {
        let response: void | AxiosResponse<any> = await axios.get('http://100.26.246.4:5000/members/' + officerType);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }    
}

function modifyFetchedOfficer(officer: Members) {
    officer.image = officer.image.toLowerCase();
}

function makeOfficers(response: AxiosResponse<any>) {
    let fetchedOfficers: Members[] = [];
    response.data.forEach((item: Members) => {
        modifyFetchedOfficer(item);
        fetchedOfficers.push(item);
    });
    return fetchedOfficers;
}

export async function fetchEboard() {

    const eboard = fetchOfficers('eboard')
        .then(response => {
            return makeOfficers(response as AxiosResponse);
        })
        .catch(error => {
            console.log(`Error getting eboard: ${error}`);
            throw error;
        }); 
    return eboard;
}

export async function fetchJboard() {
    
    const jboard = await fetchOfficers('jboard')
        .then(response => {
            return makeOfficers(response as AxiosResponse);
        })
        .catch(error => {
            console.log(`Error getting jboard: ${error}`);
            throw error;
        });
    return jboard;
}

export async function fetchDboard() {
    
    const dboard = fetchOfficers('dboard')
        .then(response => {
            return makeOfficers(response as AxiosResponse);
        })
        .catch(error => {
            console.log(`Error getting dboard: ${error}`);
            throw error;
        });
    return dboard;
}

