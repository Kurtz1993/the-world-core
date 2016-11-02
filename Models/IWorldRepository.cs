using System.Collections.Generic;
using System.Threading.Tasks;

namespace TheWorld.Models
{
    public interface IWorldRepository
    {
        IEnumerable<Trip> GetAllTripsWithStops();

        IEnumerable<Trip> GetAllTrips();

        void AddTrip(Trip trip);

        Task<bool> SaveChangesAsync();
    }
}
