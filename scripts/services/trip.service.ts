import { Inject } from "../decorators/decorators";
import { BaseService } from "./base.service";

@Inject("$http", "env")
class TripService extends BaseService implements ITripService {
    constructor(http: ng.IHttpService, env: any) {
        super(http, env, "trips");
    }

    public getTrips(): ng.IHttpPromise<Trip[]> {
        return this.get("");
    }
}

export { TripService };