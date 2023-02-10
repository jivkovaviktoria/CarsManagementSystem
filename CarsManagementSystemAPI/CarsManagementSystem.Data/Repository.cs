using System.Linq.Expressions;
using CarsManagementSystem.Data.CarsManagementSystem.Data.Contracts;
using Microsoft.EntityFrameworkCore;

namespace CarsManagementSystem.Data;

public class Repository<TEntity> : IRepository<TEntity> where TEntity : class, IEntity
{
    private readonly DbContext _dbContext;

    public Repository(DbContext dbContext)
    {
        this._dbContext = dbContext;
    }
    
    public async Task<TEntity> GetAsync(Guid id)
    {
        var entity = await this._dbContext.Set<TEntity>().FirstOrDefaultAsync(x => x.Id == id);
        return entity;
    }

    public async Task<IEnumerable<TEntity>> GetManyAsync()
    {
        return await this._dbContext.Set<TEntity>().ToListAsync();
    }

    public async Task<bool> CreateAsync(TEntity entity)
    {
        if (entity is null) return false;

        entity.Created = entity.LastModified = DateTimeOffset.UtcNow.ToUnixTimeSeconds();
        
        await this._dbContext.AddAsync(entity);
        await this._dbContext.SaveChangesAsync();
        return true;
    }

    public async Task<bool> DeleteAsync(Guid id)
    {
        var entity = await this.GetAsync(id);
        if (entity is null) return false;

        this._dbContext.Remove(entity);
        await this._dbContext.SaveChangesAsync();
        return true;
    }

    public async Task<bool> UpdateAsync(TEntity entity)
    {
        if (entity is null) return false;

        var targetEntity = await this.GetAsync(entity.Id);
        if (targetEntity is null) return false;

        this._dbContext.Entry(targetEntity).State = EntityState.Detached;
        this._dbContext.Entry(entity).State = EntityState.Modified;
        entity.LastModified = DateTimeOffset.UtcNow.ToUnixTimeSeconds();
        
        this._dbContext.Update(entity);
        
        await this._dbContext.SaveChangesAsync();
        return true;
    }
}