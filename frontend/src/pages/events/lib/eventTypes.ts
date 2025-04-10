import { UUID } from "node:crypto";

export interface Event {
    id?: UUID;
    title: string;
    description: string;
    location: string;
    start: number;
    end: string;
    imageUrl: string;
    ticket: string;
}