using CarsManagementSystem.Data.Contracts;

namespace CarsManagementSystem.Data.Models;

public class BaseEntity : IEntity
{
    public Guid Id { get; set; }
    
    public long Created { get; set; }
    public long LastModified { get; set; }
}