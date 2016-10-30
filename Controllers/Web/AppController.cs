using Microsoft.AspNetCore.Mvc;

namespace TheWorld
{
    public class AppController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}