using AuthorizationServer.WebServer.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace AuthorizationServer.WebServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ConfigController(IOptions<Config> config) : ControllerBase
    {
        private readonly IOptions<Config> _config = config ?? throw new ArgumentNullException(nameof(config));

        [HttpGet(Name = "GetConfig")]
        public Config Get()
        {
            return _config.Value ?? throw new InvalidOperationException("Configuration is not set.");
        }
    }
}
