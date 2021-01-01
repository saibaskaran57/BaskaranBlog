namespace BaskaranBlog
{
    using System;
    using System.Net.Http;
    using System.Threading.Tasks;
    using Blazor.Analytics;
    using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
    using Microsoft.Extensions.DependencyInjection;
    using Toolbelt.Blazor.Extensions.DependencyInjection;

    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);
            builder.RootComponents.Add<App>("app");
            builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
            builder.Services.AddGoogleAnalytics("G-7M86LVMGM4");
            builder.Services.AddHeadElementHelper();
            await builder.Build().RunAsync();
        }
    }
}
