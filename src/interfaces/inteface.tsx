import { ReactNode } from "react";

export interface Weather {
    current: Current,
    location: Location
    children?: ReactNode;
}

interface Location {
    name: string,
    region: string,
    country: string
}

interface Current {
    temp_c: number,
    condition: Condition
}

interface Condition {
    text: string,
    icon: string
}