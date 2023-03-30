using Volo.Abp.DependencyInjection;
using Volo.Abp.TextTemplating;

namespace Tailor.Management.ABP.Emailing
{
    public class EmailTemplateDefinitionProvider: TemplateDefinitionProvider, ITransientDependency
    {
        public override void Define(ITemplateDefinitionContext context)
        {
            context.Add(new TemplateDefinition(
                name: CustomEmailTemplates.InvitedUser
            ).WithVirtualFilePath("/Emailing/Templates/InvitedUser/InvitedUser.html", isInlineLocalized: true));
        }
    }
}
