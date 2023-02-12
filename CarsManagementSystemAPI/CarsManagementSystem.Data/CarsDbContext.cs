using CarsManagementSystem.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace CarsManagementSystem.Data;

public class CarsDbContext : DbContext
{
    public CarsDbContext(DbContextOptions options) : base(options)
    { }

    public DbSet<Car> Cars { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Car>().HasKey(x => x.Id);
        modelBuilder.Entity<Car>().Property(x => x.Brand).IsRequired();
        modelBuilder.Entity<Car>().Property(x => x.Model).IsRequired();
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
    }
}