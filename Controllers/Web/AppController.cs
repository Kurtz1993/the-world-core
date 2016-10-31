using Microsoft.AspNetCore.Mvc;
using TheWorld.Services;
using TheWorld.ViewModels;

namespace TheWorld.Controllers.Web
{
    public class AppController : Controller
    {
        private IMailService _mailService;

        public AppController(IMailService mailService)
        {
            _mailService = mailService;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Contact(ContactViewModel vm)
        {
            _mailService.SendMail("me@me.com", vm.Email, "From The World", vm.Message);
            return View();
        }

        public IActionResult About()
        {
            return View();
        }
    }
}