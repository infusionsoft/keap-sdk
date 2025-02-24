package com.keap;

import com.keap.core.sdk.ApiClient;
import com.keap.core.sdk.ApiException;
import com.keap.core.sdk.client.ContactApi;
import com.keap.core.sdk.model.Contact;
import com.keap.core.sdk.model.ListContactsResponse;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class ContactsTest {

    @Test
    void listContactsSucceeds() throws ApiException {
        String apiKey = System.getenv("KEAP_REST_API_SERVICE_ACCESS_TOKEN");
        if (apiKey == null) {
            throw new IllegalStateException("KEAP_REST_API_SERVICE_ACCESS_TOKEN is not set");
        }

        ApiClient apiClient = new ApiClient();
        apiClient.setAccessTokenSupplier(() -> apiKey);

        ContactApi contactApi = new ContactApi(apiClient);

        Assertions.assertNotNull(contactApi, "contactApi should not be null");
        ListContactsResponse response = contactApi.listContactsUsingGET1(
          null, // List.of("preferred_name","create_time"),
          null,
          null, // "date_created ASC",
          null, // 100,
          null
        );

        System.out.println(response.getContacts().size());
        for (Contact contact : response.getContacts()) {
            Assertions.assertNotNull(contact.getId());
        }
    }
}
