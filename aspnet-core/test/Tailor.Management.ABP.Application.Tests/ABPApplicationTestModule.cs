using Volo.Abp.Modularity;

namespace Tailor.Management.ABP
{
    [DependsOn(
        typeof(ABPApplicationModule),
        typeof(ABPDomainTestModule)
        )]
    public class ABPApplicationTestModule : AbpModule
    {

    }
}