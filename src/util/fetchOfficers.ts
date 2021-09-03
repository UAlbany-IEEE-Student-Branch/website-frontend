import { getEboardMembers, getJboardMembers, getDboardMembers } from '../models/members';

export function fetchEboard() {

    return getEboardMembers();
}

export function fetchJboard() {
    
    return getJboardMembers();
}

export function fetchDboard() {
    
    return getDboardMembers();
}

