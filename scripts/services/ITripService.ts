declare interface ITripService {
    /**
     * Gets all trips for the user.
     * @returns A list of trips.
     */
    getTrips(): ng.IHttpPromise<Trip[]>;
}