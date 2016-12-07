declare interface ITripService {
    /**
     * Gets all trips for the user.
     * @returns A promise containing a list of trips.
     */
    getTrips(): ng.IHttpPromise<Trip[]>;

    /**
     * Adds a trip for the user.
     * @param trip The trip information to be added.
     * @returns A promise that can be resolved if the call succeeded.
     */
    addTrip(trip: Trip): ng.IHttpPromise<Trip>;

    /**
     * Gets the stops for a particular trip.
     * @param tripName Name of the trip.
     * @returns A promise containing a list of stops for the trip.
     */
    getStops(tripName: string): ng.IHttpPromise<Stop[]>;
}