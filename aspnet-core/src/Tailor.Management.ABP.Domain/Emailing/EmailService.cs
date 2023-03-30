﻿using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tailor.Management.ABP.Emailing.Templates.InviteUser;
using Volo.Abp;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Emailing;
using Volo.Abp.TextTemplating;

namespace Tailor.Management.ABP.Emailing
{
    public class EmailService : ITransientDependency
    {
        private readonly IEmailSender _emailSender;
        private readonly ITemplateRenderer _templateRenderer;
        private readonly IConfiguration _configuration;

        public EmailService(IEmailSender emailSender, ITemplateRenderer templateRenderer, IConfiguration configuration)
        {
            _emailSender = emailSender;
            _templateRenderer = templateRenderer;
            _configuration = configuration;

        }

        public async Task InvitedUserEmailAsync(InvitedUser input)
        {
            try
            {
                //var emailBody = await _templateRenderer.RenderAsync(StandardEmailTemplates.Message, new { message = "ABP Framework provides IEmailSender service that is used to send emails." });

                var baseUrl = _configuration["App:SelfUrl"];
                var emailBody = await _templateRenderer.RenderAsync(
                    CustomEmailTemplates.InvitedUser,
                    new InvitedUser()
                    {
                        UserName = input.UserName,
                        Email = input.Email,
                        UserId = input.UserId,
                        URL = baseUrl
                    }
                );

                await _emailSender.SendAsync(input.Email, "Invitation from Shahed's Tailor Management App", emailBody);
            }
            catch (Exception ex)
            {
                throw new UserFriendlyException(ex.Message);
            }
        }
    }
}
