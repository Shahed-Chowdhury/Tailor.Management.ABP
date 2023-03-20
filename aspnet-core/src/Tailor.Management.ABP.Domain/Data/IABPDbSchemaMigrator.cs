using System.Threading.Tasks;

namespace Tailor.Management.ABP.Data
{
    public interface IABPDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
