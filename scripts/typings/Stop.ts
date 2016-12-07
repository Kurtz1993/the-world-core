/** Represents stop information. */
declare interface Stop {
    /** Stop name. */
    name?: string;
    /** Latitude for the stop. */
    latitude?: number;
    /** Longitude for the stop. */
    longitude?: number;
    /** Specifies the number of stop in the trip. */
    order?: number;
    /** Arrival date and time to the stop. */
    arrival?: Date;
}