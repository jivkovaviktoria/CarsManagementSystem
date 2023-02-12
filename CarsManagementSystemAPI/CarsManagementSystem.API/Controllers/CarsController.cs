using CarsManagementSystem.Data;
using CarsManagementSystem.Data.Models;
using Microsoft.AspNetCore.Mvc;

namespace CarsManagementSystem.API.Controllers;

[ApiController]
[Route("/[controller]")]
public class CarsController : ControllerBase
{
    private readonly Repository<Car> _cars;

    public CarsController(CarsDbContext dbContext)
    {
        this._cars = new Repository<Car>(dbContext);
    }

    [HttpGet]
    [Route("{id:guid}")]
    public async Task<IActionResult> Get(Guid id)
    {
        var result = await this._cars.GetAsync(id);
        if (result is null) return NotFound();
        return Ok(result);
    }

    [HttpPost]
    public async Task<IActionResult> Create(Car car)
    {
        var result = await this._cars.CreateAsync(car);
        if (result == false) return BadRequest();
        return CreatedAtAction(nameof(Get), new { Id = car.Id }, car);
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var result = await this._cars.GetManyAsync();
        return Ok(result);
    }

    [HttpDelete]
    [Route("{id:guid}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        var result = await this._cars.DeleteAsync(id);
        if (result == false) return NotFound();

        return Ok();
    }

    [HttpPut]
    public async Task<IActionResult> Update(Car car)
    {
        var result = await this._cars.UpdateAsync(car);
        if (result == false) return NotFound();
        return Ok(car);
    }

}