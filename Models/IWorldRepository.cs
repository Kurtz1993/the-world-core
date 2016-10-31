using System.Collections.Generic;

namespace TheWorld.Models
{
    public interface IWorldRepository
    {
        IEnumerable<Trip> GetAllTripsWithStops();

        IEnumerable<Trip> GetAllTrips();
    }
}
