﻿using System.Threading.Tasks;

namespace EmailService
{
    public interface IEmailSender
    {
        void SendEmail(Message message);
        Task SendEmailAsync(Message message);
    }
}
