import { getAllEvents } from '../models/events';

export default function fetchEvents() {
    try {
        const events = getAllEvents();
        return events;
    } catch (error) {
        throw error;
    }
}