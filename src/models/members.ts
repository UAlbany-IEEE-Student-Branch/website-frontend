import data from '../database/Members.json';

export type Members = {
    id: number;
    first_name: string;
    last_name: string;
    role: string;
    position: string;
    linkedIn: string;
    start_year: number;
    end_year: number;
    image: string;
}

function getMembersByRole(role: String) {
    let members: Members[] = [];
    for (const member of data) {
        if (member.role === role) {
            members.push(member);
        }
    }

    return members;
}

export function getAllMembers() {
    return data;
}

export function getEboardMembers() {
    return getMembersByRole('Eboard'); 
}

export function getJboardMembers() {
    return getMembersByRole('Jboard'); 
}

export function getDboardMembers() {
    return getMembersByRole('Dboard'); 
}
