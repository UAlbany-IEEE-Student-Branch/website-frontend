import data from '../database/Events.json';

export type Events = {
    id: number;
    event_name: string;
    image: string;
    year: number;
    month: number;
    day: number;
    past_status: number;
}

export function getAllEvents() { 
    let events: Events[] = [];
    for (const event of data) {
        events.push(event);
    }
    return events;
}
