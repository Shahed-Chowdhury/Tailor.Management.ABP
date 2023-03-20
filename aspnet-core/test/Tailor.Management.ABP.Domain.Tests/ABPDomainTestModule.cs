using Tailor.Management.ABP.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Tailor.Management.ABP
{
    [DependsOn(
        typeof(ABPEntityFrameworkCoreTestModule)
        )]
    public class ABPDomainTestModule : AbpModule
    {

    }
}