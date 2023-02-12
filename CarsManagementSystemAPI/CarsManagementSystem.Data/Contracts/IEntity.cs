namespace CarsManagementSystem.Data.Contracts;

public interface IEntity
{
    Guid Id { get; set; }

    long Created { get; set; }
    long LastModified { get; set; }
}