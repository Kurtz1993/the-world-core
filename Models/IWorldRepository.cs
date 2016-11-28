using System.Collections.Generic;
using System.Threading.Tasks;

namespace TheWorld.Models
{
    public interface IWorldRepository
    {
        Trip GetTripByname(string tripName);

        Trip GetUserTripByname(string tripName, string username);

        IEnumerable<Trip> GetAllTripsWithStops();

        IEnumerable<Trip> GetAllTrips();

        IEnumerable<Trip> GetTripsByUsername(string username);

        void AddTrip(Trip trip);

        Task<bool> SaveChangesAsync();

        void AddStop(string tripName, Stop newStop, string username);
    }
}