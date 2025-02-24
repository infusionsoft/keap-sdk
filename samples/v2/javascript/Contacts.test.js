const { ContactApi, ApiClient } = require('keap-core-service-v2-sdk');

test('listContactsSucceeds', async () => {
    const apiKey = process.env.KEAP_REST_API_SERVICE_ACCESS_TOKEN;
    if (!apiKey) {
        throw new Error('KEAP_REST_API_SERVICE_ACCESS_TOKEN is not set');
    }

    const apiClient = new ApiClient();
    apiClient.defaultHeaders['Authorization'] = `Bearer ${apiKey}`;

    const contactApi = new ContactApi(apiClient);
    const response = await contactApi.listContactsUsingGET1();

    console.log(`Found ${response.contacts.length} contacts`);
    response.contacts.forEach(contact => {
        expect(contact.id).not.toBeNull();
    });
});
