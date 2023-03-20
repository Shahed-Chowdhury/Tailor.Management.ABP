using Tailor.Management.ABP.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace Tailor.Management.ABP.Controllers
{
    /* Inherit your controllers from this class.
     */
    public abstract class ABPController : AbpController
    {
        protected ABPController()
        {
            LocalizationResource = typeof(ABPResource);
        }
    }
}