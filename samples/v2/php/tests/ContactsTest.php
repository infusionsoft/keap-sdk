<?php

namespace Keap\Sdk\Core\Tests;

use PHPUnit\Framework\TestCase;
use Keap\Core\V2\Api\ContactApi;
use Keap\Core\V2\Configuration;
use Keap\Core\V2\HeaderSelector;
use GuzzleHttp\Client;

class ContactsTest extends TestCase
{
    public function testListContactsSucceeds()
    {
        $apiKey = getenv('KEAP_REST_API_SERVICE_ACCESS_TOKEN');
        if (!$apiKey) {
            throw new \InvalidArgumentException('KEAP_REST_API_SERVICE_ACCESS_TOKEN is not set');
        }

        $config = new Configuration();
        $config->setAccessToken($apiKey);

        // Inline class inheriting from HeaderSelector
        $headerSelector = new class extends HeaderSelector {
            public function selectHeaders(array $accept, string $contentType, bool $isMultipart): array
            {
                // Call the parent method to retain original behavior
                $headers = parent::selectHeaders($accept, $contentType, $isMultipart);
                
                // Add the custom Authorization header
                $headers['Authorization'] = 'Bearer ' . getenv('KEAP_REST_API_SERVICE_ACCESS_TOKEN');
                return $headers;
            }
        };

        $client = new Client();
        $contactApi = new ContactApi($client, $config, $headerSelector);
        $response = $contactApi->listContacts();

        echo 'Found ' . count($response->getContacts()) . ' contacts' . PHP_EOL;
        foreach ($response->getContacts() as $contact) {
            $this->assertNotNull($contact->getId(), "Contact has no ID set");
        }
    }
}
