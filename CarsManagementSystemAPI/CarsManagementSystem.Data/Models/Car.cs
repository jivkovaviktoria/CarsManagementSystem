namespace CarsManagementSystem.Data.Models;

public class Car : BaseEntity
{
    public Car()
    {
        this.Id = Guid.NewGuid();
    }
    public string Brand { get; set; }
    public string Model { get; set; }
    public string Color { get; set; }
    public int Year { get; set; }
    public string ImageUrl { get; set; }
}