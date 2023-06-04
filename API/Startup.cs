using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
namespace API
{
public class Startup {
    private readonly IConfiguration _config;
    public Startup(IConfiguration config) {
        _config = config;
    }
    public void ConfigureServices(IServiceCollection services) {
        services.AddControllers();
        services.AddDbContext<StoreContext>(x => x.UseSqlite(_config.GetConnectionString("DefaultConnection")));
    }
    public void Configure(WebApplication app, IWebHostEnvironment env) {
        if (!app.Environment.IsDevelopment()) {
            app.UseExceptionHandler("/Error");
            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            app.UseHsts();
        }
        app.UseHttpsRedirection();
        app.UseStaticFiles();
        app.UseRouting();
        app.UseAuthorization();
        app.MapRazorPages();
        app.Run();
    }
}
}