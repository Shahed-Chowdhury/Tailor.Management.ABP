using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace Tailor.Management.ABP
{
    [Dependency(ReplaceServices = true)]
    public class ABPBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "ABP";
    }
}
