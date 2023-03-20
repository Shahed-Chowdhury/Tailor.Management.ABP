using System;
using System.Collections.Generic;
using System.Text;
using Tailor.Management.ABP.Localization;
using Volo.Abp.Application.Services;

namespace Tailor.Management.ABP
{
    /* Inherit your application services from this class.
     */
    public abstract class ABPAppService : ApplicationService
    {
        protected ABPAppService()
        {
            LocalizationResource = typeof(ABPResource);
        }
    }
}
