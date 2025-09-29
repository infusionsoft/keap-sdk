<?php

namespace Keap\Sdk\Core\Tests;
use PHPUnit\Framework\TestCase;
use Keap\Core\V2\Api\ContactApi;
use Keap\Core\V2\Configuration;
use Keap\Core\V2\HeaderSelector;
use GuzzleHttp\Client;

class KeapAuthHeaderSelector extends HeaderSelector
{
    private string $accessToken;

    public function __construct(string $accessToken)
    {
        $this->accessToken = $accessToken;
    }

    public function selectHeaders(array $accept, string $contentType, bool $isMultipart): array
    {
        $headers = parent::selectHeaders($accept, $contentType, $isMultipart);
        $headers['Authorization'] = 'Bearer ' . $this->accessToken;
        return $headers;
    }
}

class ContactsTest extends TestCase
{
    private string $accessToken;
    private ContactApi $contactApi;

    protected function setUp(): void
    {
        parent::setUp();

        $this->accessToken = getenv('KEAP_REST_API_SERVICE_ACCESS_TOKEN') ?: '';

        if (!$this->accessToken) {
            throw new \InvalidArgumentException('KEAP_REST_API_SERVICE_ACCESS_TOKEN is not set');
        }

        $this->contactApi = $this->createContactApi();
    }

    private function createContactApi(): ContactApi
    {
        $config = new Configuration();
        $config->setAccessToken($this->accessToken);

        $headerSelector = new KeapAuthHeaderSelector($this->accessToken);
        $client = new Client();
        
        return new ContactApi($client, $config, $headerSelector);
    }

    public function testListContactsSucceeds(): void
    {
        $response = $this->contactApi->listContacts(
            page_size: 10
        );

        echo 'Found ' . count($response->getContacts()) . ' contacts' . PHP_EOL;
        
        foreach ($response->getContacts() as $contact) {
            $this->assertNotNull($contact->getId(), "Contact has no ID set");
            echo 'Contact ID: ' . $contact->getId() . ', Firstname: ' . $contact->getGivenName() . PHP_EOL;
        }
    }
}
