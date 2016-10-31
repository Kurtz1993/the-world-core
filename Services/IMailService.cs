namespace TheWorld.Services
{
    public interface IMailService
    {
        /// <summary>
        /// Sends an email with the specified information.
        /// </summary>
        /// <param name="to">Recipient of the email.</param>
        /// <param name="from">Sender of the email.</param>
        /// <param name="subject">Email subject.</param>
        /// <param name="body">Email content</param>
        void SendMail(string to, string from, string subject, string body);
    }
}