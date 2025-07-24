import {
    ContactApi,
    createConfiguration,
    Oauth2Authentication
} from 'keap-core-service-v2-sdk-ts';

test('listContactsSucceeds', async () => {
    const apiKey = process.env.KEAP_REST_API_SERVICE_ACCESS_TOKEN;
    if (!apiKey) {
        throw new Error('KEAP_REST_API_SERVICE_ACCESS_TOKEN is not set');
    }

    const configuration = createConfiguration({
        authMethods: {
            default: new Oauth2Authentication(apiKey),
        }
    });

    const contactApi = new ContactApi(configuration);
    const response = await contactApi.listContacts();

    if (response.contacts) {
        console.log(`Found ${response.contacts.length} contacts`);
        response.contacts.forEach(contact => {
            expect(contact.id).not.toBeNull();
        });
    } else {
        throw new Error('No contacts found in the response');
    }
});
