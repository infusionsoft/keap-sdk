namespace Keap.Core.V2.Tests;

using Keap.Core.V2.Api;
using Keap.Core.V2.Client;

[TestClass]
public class ContactsTest
{
    [TestMethod]
    public void ListContactsSucceeds()
    {
        var apiKey = Environment.GetEnvironmentVariable("KEAP_REST_API_SERVICE_ACCESS_TOKEN") ?? throw new InvalidOperationException("KEAP_REST_API_SERVICE_ACCESS_TOKEN is not set");

        var config = new Configuration();
        config.DefaultHeaders["Authorization"] = $"Bearer {apiKey}";

        var contactApi = new ContactApi(config);
        var response = contactApi.ListContacts();

        Console.WriteLine($"Found {response.Contacts.Count()} contacts");
        foreach (var contact in response.Contacts)
        {
            Assert.IsNotNull(contact.Id, $"Contact has no ID");
        }
    }
}