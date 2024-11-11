export interface Weather {
    current: Current,
    location: Location
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