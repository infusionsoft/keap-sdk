import os
import unittest
from keap_core_v2_client import ApiClient, ContactApi, Configuration

class ContactsTest(unittest.TestCase):

    def test_list_contacts_succeeds(self):
        api_key = os.getenv('KEAP_REST_API_SERVICE_ACCESS_TOKEN')
        if not api_key:
            raise EnvironmentError('KEAP_REST_API_SERVICE_ACCESS_TOKEN is not set')

        config = Configuration()
        config.api_key['api_key'] = api_key

        with ApiClient(configuration=config) as api_client:
            api_client.default_headers['Authorization'] = f"Bearer {api_key}"
            contact_api = ContactApi(api_client)
            response = contact_api.list_contacts_using_get1()

            print(f"Found {len(response.contacts)} contacts")
            for contact in response.contacts:
                self.assertIsNotNone(contact.id)

if __name__ == '__main__':
    unittest.main()
