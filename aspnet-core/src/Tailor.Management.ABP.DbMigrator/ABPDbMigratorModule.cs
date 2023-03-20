using Tailor.Management.ABP.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace Tailor.Management.ABP.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(ABPEntityFrameworkCoreModule),
        typeof(ABPApplicationContractsModule)
        )]
    public class ABPDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
