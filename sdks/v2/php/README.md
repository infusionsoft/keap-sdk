# core-v2-client

Keap REST Core Service

For more information, please visit [https://developer.keap.com/get-support/](https://developer.keap.com/get-support/).

## Installation & Usage

### Requirements

PHP 7.4 and later.
Should also work with PHP 8.0.

### Composer

To install the bindings via [Composer](https://getcomposer.org/), add the following to `composer.json`:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/infusionsoft/keap-sdk.git"
    }
  ],
  "require": {
    "infusionsoft/keap-sdk": "*@dev"
  }
}
```

Then run `composer install`

### Manual Installation

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/core-v2-client/vendor/autoload.php');
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');



$apiInstance = new Keap\Core\V2\Api\AffiliateApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$create_affiliate_request = new \Keap\Core\V2\Model\CreateAffiliateRequest(); // \Keap\Core\V2\Model\CreateAffiliateRequest | Affiliate request to insert

try {
    $result = $apiInstance->addAffiliateUsingPOST($create_affiliate_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AffiliateApi->addAffiliateUsingPOST: ', $e->getMessage(), PHP_EOL;
}

```

## API Endpoints

All URIs are relative to *https://api.keap.com/crm/rest*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AffiliateApi* | [**addAffiliateUsingPOST**](docs/Api/AffiliateApi.md#addaffiliateusingpost) | **POST** /v2/affiliates | Create an Affiliate
*AffiliateApi* | [**getAffiliateUsingGET1**](docs/Api/AffiliateApi.md#getaffiliateusingget1) | **GET** /v2/affiliates/{id} | Retrieve an Affiliate
*AffiliateApi* | [**updateAffiliateUsingPATCH**](docs/Api/AffiliateApi.md#updateaffiliateusingpatch) | **PATCH** /v2/affiliates/{id} | Update an Affiliate
*AffiliateApi* | [**updateCommissionProgramUsingPATCH**](docs/Api/AffiliateApi.md#updatecommissionprogramusingpatch) | **PATCH** /v2/affiliates/commissionPrograms/{commission_program_id} | Update a Affiliate Commission Program
*AutomationApi* | [**addContactsToAutomationSequenceUsingPOST**](docs/Api/AutomationApi.md#addcontactstoautomationsequenceusingpost) | **POST** /v2/automations/{automation_id}/sequences/{sequence_id}:addContacts | Add Contacts to an Automation Sequence
*AutomationApi* | [**deleteAutomationUsingDELETE**](docs/Api/AutomationApi.md#deleteautomationusingdelete) | **DELETE** /v2/automations | Delete an Automation
*AutomationApi* | [**getAutomationUsingGET**](docs/Api/AutomationApi.md#getautomationusingget) | **GET** /v2/automations/{automation_id} | Retrieve an Automation
*AutomationApi* | [**listAllAutomationIdsUsingGET**](docs/Api/AutomationApi.md#listallautomationidsusingget) | **GET** /v2/automations/ids | List Automations Ids
*AutomationApi* | [**listAutomationsUsingGET**](docs/Api/AutomationApi.md#listautomationsusingget) | **GET** /v2/automations | List Automations
*AutomationApi* | [**updateAutomationCategoryUsingPUT**](docs/Api/AutomationApi.md#updateautomationcategoryusingput) | **PUT** /v2/automations/category | Update an Automation&#39;s Category
*AutomationCategoryApi* | [**createCategoryUsingPOST**](docs/Api/AutomationCategoryApi.md#createcategoryusingpost) | **POST** /v2/automationCategory | Create automation category
*AutomationCategoryApi* | [**deleteCategoriesUsingDELETE**](docs/Api/AutomationCategoryApi.md#deletecategoriesusingdelete) | **DELETE** /v2/automationCategory | Delete automation category
*AutomationCategoryApi* | [**listCategoriesUsingGET**](docs/Api/AutomationCategoryApi.md#listcategoriesusingget) | **GET** /v2/automationCategory | List automation categories
*AutomationCategoryApi* | [**saveCategoryUsingPUT**](docs/Api/AutomationCategoryApi.md#savecategoryusingput) | **PUT** /v2/automationCategory | Save automation category
*BusinessProfileApi* | [**getBusinessProfileUsingGET**](docs/Api/BusinessProfileApi.md#getbusinessprofileusingget) | **GET** /v2/businessProfile | Retrieve Business Profile
*BusinessProfileApi* | [**updateBusinessProfileUsingPATCH**](docs/Api/BusinessProfileApi.md#updatebusinessprofileusingpatch) | **PATCH** /v2/businessProfile | Update Business Profile
*CampaignApi* | [**addContactsToCampaignSequenceUsingPOST1**](docs/Api/CampaignApi.md#addcontactstocampaignsequenceusingpost1) | **POST** /v2/campaigns/{campaign_id}/sequences/{sequence_id}:addContacts | Add Contacts to Campaign Sequence
*CampaignApi* | [**getCampaignUsingGET1**](docs/Api/CampaignApi.md#getcampaignusingget1) | **GET** /v2/campaigns/{campaign_id} | Retrieve a Campaign
*CampaignApi* | [**listCampaignsUsingGET1**](docs/Api/CampaignApi.md#listcampaignsusingget1) | **GET** /v2/campaigns | List Campaigns
*CampaignApi* | [**removeContactsFromCampaignSequenceUsingPOST**](docs/Api/CampaignApi.md#removecontactsfromcampaignsequenceusingpost) | **POST** /v2/campaigns/{campaign_id}/sequences/{sequence_id}:removeContacts | Remove Contacts from Campaign Sequence
*CompanyApi* | [**createCompanyUsingPOST1**](docs/Api/CompanyApi.md#createcompanyusingpost1) | **POST** /v2/companies | Create a Company
*CompanyApi* | [**deleteCompanyUsingDELETE**](docs/Api/CompanyApi.md#deletecompanyusingdelete) | **DELETE** /v2/companies/{company_id} | Delete a Company
*CompanyApi* | [**getCompanyUsingGET1**](docs/Api/CompanyApi.md#getcompanyusingget1) | **GET** /v2/companies/{company_id} | Retrieve a Company
*CompanyApi* | [**listCompaniesUsingGET1**](docs/Api/CompanyApi.md#listcompaniesusingget1) | **GET** /v2/companies | List Companies
*CompanyApi* | [**updateCompanyUsingPATCH1**](docs/Api/CompanyApi.md#updatecompanyusingpatch1) | **PATCH** /v2/companies/{company_id} | Update a Company
*ContactApi* | [**createContactLinkTypeUsingPOST**](docs/Api/ContactApi.md#createcontactlinktypeusingpost) | **POST** /v2/contacts/links/types | Create a Contact Link type
*ContactApi* | [**createContactUsingPOST1**](docs/Api/ContactApi.md#createcontactusingpost1) | **POST** /v2/contacts | Create a Contact
*ContactApi* | [**deleteContactUsingDELETE1**](docs/Api/ContactApi.md#deletecontactusingdelete1) | **DELETE** /v2/contacts/{contact_id} | Delete a Contact
*ContactApi* | [**getContactUsingGET1**](docs/Api/ContactApi.md#getcontactusingget1) | **GET** /v2/contacts/{contact_id} | Retrieve a Contact
*ContactApi* | [**linkContactsUsingPOST**](docs/Api/ContactApi.md#linkcontactsusingpost) | **POST** /v2/contacts:link | Link Contacts
*ContactApi* | [**listContactLinkTypesUsingGET**](docs/Api/ContactApi.md#listcontactlinktypesusingget) | **GET** /v2/contacts/links/types | List Contact Link types
*ContactApi* | [**listContactLinksUsingGET**](docs/Api/ContactApi.md#listcontactlinksusingget) | **GET** /v2/contacts/{contact_id}/links | List Linked Contacts
*ContactApi* | [**listContactsUsingGET1**](docs/Api/ContactApi.md#listcontactsusingget1) | **GET** /v2/contacts | List Contacts
*ContactApi* | [**retrieveContactModelUsingGET1**](docs/Api/ContactApi.md#retrievecontactmodelusingget1) | **GET** /v2/contacts/model | Retrieve Contact Model
*ContactApi* | [**unlinkContactsUsingPOST**](docs/Api/ContactApi.md#unlinkcontactsusingpost) | **POST** /v2/contacts:unlink | Delete Link between two Contacts
*ContactApi* | [**updateContactUsingPATCH**](docs/Api/ContactApi.md#updatecontactusingpatch) | **PATCH** /v2/contacts/{contact_id} | Update a Contact
*DealsApi* | [**createNote**](docs/Api/DealsApi.md#createnote) | **POST** /v2/deals/{id}/notes | Creates a new note for a specific deal.
*DealsApi* | [**delete**](docs/Api/DealsApi.md#delete) | **DELETE** /v2/deals/-/notes/{note_id} | Deletes a specific deal note by its ID.
*DealsApi* | [**getNote**](docs/Api/DealsApi.md#getnote) | **GET** /v2/deals/-/notes/{note_id} | Retrieves a specific deal note by its ID.
*DealsApi* | [**listNotes**](docs/Api/DealsApi.md#listnotes) | **GET** /v2/deals/{id}/notes | Lists all notes associated with a specific deal.
*DealsApi* | [**update**](docs/Api/DealsApi.md#update) | **PATCH** /v2/deals/-/notes/{note_id} | Updates a specific deal note by its ID.
*EmailApi* | [**createEmailUsingPOST1**](docs/Api/EmailApi.md#createemailusingpost1) | **POST** /v2/emails | Create an Email Record
*EmailApi* | [**createEmailsUsingPOST1**](docs/Api/EmailApi.md#createemailsusingpost1) | **POST** /v2/emails:batchAdd | Create a set of Email Records
*EmailApi* | [**deleteEmailUsingDELETE1**](docs/Api/EmailApi.md#deleteemailusingdelete1) | **DELETE** /v2/emails/{id} | Delete an Email Record
*EmailApi* | [**deleteEmailsUsingPOST1**](docs/Api/EmailApi.md#deleteemailsusingpost1) | **POST** /v2/emails:batchRemove | Remove a set of Email Records
*EmailApi* | [**getEmailUsingGET1**](docs/Api/EmailApi.md#getemailusingget1) | **GET** /v2/emails/{id} | Retrieve an Email
*EmailApi* | [**sendEmailUsingPOST1**](docs/Api/EmailApi.md#sendemailusingpost1) | **POST** /v2/emails:send | Send an Email
*EmailAddressApi* | [**getEmailAddressStatusUsingGET**](docs/Api/EmailAddressApi.md#getemailaddressstatususingget) | **GET** /v2/emailAddresses/{email} | Retrieve an Email Address status
*EmailAddressApi* | [**updateEmailAddressOptStatusUsingPUT**](docs/Api/EmailAddressApi.md#updateemailaddressoptstatususingput) | **PUT** /v2/emailAddresses/{email} | Update an Email Address opt-in status
*NoteApi* | [**createNoteUsingPOST1**](docs/Api/NoteApi.md#createnoteusingpost1) | **POST** /v2/contacts/{contact_id}/notes | Create a Note
*NoteApi* | [**deleteNoteUsingDELETE1**](docs/Api/NoteApi.md#deletenoteusingdelete1) | **DELETE** /v2/contacts/{contact_id}/notes/{note_id} | Delete a Note
*NoteApi* | [**getNoteUsingGET1**](docs/Api/NoteApi.md#getnoteusingget1) | **GET** /v2/contacts/{contact_id}/notes/{note_id} | Retrieve a Note
*NoteApi* | [**listNotesUsingGET1**](docs/Api/NoteApi.md#listnotesusingget1) | **GET** /v2/contacts/{contact_id}/notes | List Notes
*NoteApi* | [**updateNoteUsingPATCH**](docs/Api/NoteApi.md#updatenoteusingpatch) | **PATCH** /v2/contacts/{contact_id}/notes/{note_id} | Update a Note
*PaymentMethodConfigsApi* | [**createPaymentMethodConfigUsingPOST**](docs/Api/PaymentMethodConfigsApi.md#createpaymentmethodconfigusingpost) | **POST** /v2/paymentMethodConfigs | Create Payment Method Configuration
*PipelinesApi* | [**callList**](docs/Api/PipelinesApi.md#calllist) | **GET** /v2/pipelines | Lists entities based on the provided ListCommand.
*PipelinesApi* | [**create**](docs/Api/PipelinesApi.md#create) | **POST** /v2/pipelines | Creates a new entity.
*PipelinesApi* | [**delete1**](docs/Api/PipelinesApi.md#delete1) | **DELETE** /v2/pipelines/{id} | Deletes a pipeline.
*PipelinesApi* | [**get**](docs/Api/PipelinesApi.md#get) | **GET** /v2/pipelines/{id} | Retrieves an entity by its identifier.
*PipelinesApi* | [**getOutcomeLabels**](docs/Api/PipelinesApi.md#getoutcomelabels) | **GET** /v2/pipelines/{id}/outcomes | Gets the outcome labels for a pipeline.
*PipelinesApi* | [**listStages**](docs/Api/PipelinesApi.md#liststages) | **GET** /v2/pipelines/{id}/stages | Retrieves a list of stages for a specific pipeline.
*PipelinesApi* | [**listSummaries**](docs/Api/PipelinesApi.md#listsummaries) | **GET** /v2/pipelines/summaries | Retrieves a list of pipeline summaries.
*PipelinesApi* | [**setOutcomeLabels**](docs/Api/PipelinesApi.md#setoutcomelabels) | **PATCH** /v2/pipelines/{id}/outcomes | Sets the outcome labels for a pipeline.
*PipelinesApi* | [**update1**](docs/Api/PipelinesApi.md#update1) | **PATCH** /v2/pipelines/{id} | Updates an existing entity.
*ReportingApi* | [**listReportsUsingGET**](docs/Api/ReportingApi.md#listreportsusingget) | **GET** /v2/reporting/reports | List Reports
*ReportingApi* | [**runReportUsingPOST**](docs/Api/ReportingApi.md#runreportusingpost) | **POST** /v2/reporting/reports/{report_id}:run | Run a Report
*SalesApi* | [**setMerchantGatewayAsDefaultUsingPOST**](docs/Api/SalesApi.md#setmerchantgatewayasdefaultusingpost) | **POST** /v2/sales/merchants/{id}:setDefault | Set default Merchant Account
*SettingsApi* | [**getApplicationConfigurationsUsingGET**](docs/Api/SettingsApi.md#getapplicationconfigurationsusingget) | **GET** /v2/settings/applications:getConfiguration | Get Application Configuration
*SettingsApi* | [**getContactOptionTypesUsingGET1**](docs/Api/SettingsApi.md#getcontactoptiontypesusingget1) | **GET** /v2/settings/contactOptionTypes | Get Contact Option types
*SettingsApi* | [**isApplicationEnabledUsingGET**](docs/Api/SettingsApi.md#isapplicationenabledusingget) | **GET** /v2/settings/applications:isEnabled | Get Application Status
*StagesApi* | [**create1**](docs/Api/StagesApi.md#create1) | **POST** /v2/stages | Creates a new entity.
*StagesApi* | [**delete2**](docs/Api/StagesApi.md#delete2) | **DELETE** /v2/stages/{id} | Deletes a stage by its identifier for a given tenant.
*StagesApi* | [**get1**](docs/Api/StagesApi.md#get1) | **GET** /v2/stages/{id} | Retrieves an entity by its identifier.
*StagesApi* | [**list1**](docs/Api/StagesApi.md#list1) | **GET** /v2/stages | Lists entities based on the provided ListCommand.
*StagesApi* | [**listStages1**](docs/Api/StagesApi.md#liststages1) | **GET** /v2/stages/{id}/deals | Retrieves a list of deals for a specific stage.
*StagesApi* | [**update2**](docs/Api/StagesApi.md#update2) | **PATCH** /v2/stages/{id} | Updates an existing entity.
*SubscriptionsApi* | [**createSubscriptionV2UsingPOST**](docs/Api/SubscriptionsApi.md#createsubscriptionv2usingpost) | **POST** /v2/subscriptions | Create Subscription
*TagsApi* | [**applyTagsUsingPOST**](docs/Api/TagsApi.md#applytagsusingpost) | **POST** /v2/tags/{tag_id}/contacts:applyTags | Apply Tag
*TagsApi* | [**createTagCategoryUsingPOST1**](docs/Api/TagsApi.md#createtagcategoryusingpost1) | **POST** /v2/tags/categories | Create Tag Category
*TagsApi* | [**createTagUsingPOST1**](docs/Api/TagsApi.md#createtagusingpost1) | **POST** /v2/tags | Create Tag
*TagsApi* | [**deleteTagCategoryUsingDELETE**](docs/Api/TagsApi.md#deletetagcategoryusingdelete) | **DELETE** /v2/tags/categories/{tag_category_id} | Delete Tag Category
*TagsApi* | [**deleteTagUsingDELETE**](docs/Api/TagsApi.md#deletetagusingdelete) | **DELETE** /v2/tags/{tag_id} | Delete Tag
*TagsApi* | [**getCategoryUsingGET**](docs/Api/TagsApi.md#getcategoryusingget) | **GET** /v2/tags/categories/{tag_category_id} | Retrieve a Tag Category
*TagsApi* | [**getTagUsingGET1**](docs/Api/TagsApi.md#gettagusingget1) | **GET** /v2/tags/{tag_id} | Retrieve a Tag
*TagsApi* | [**listCompaniesForTagIdUsingGET1**](docs/Api/TagsApi.md#listcompaniesfortagidusingget1) | **GET** /v2/tags/{tag_id}/companies | List Tagged Companies
*TagsApi* | [**listContactsWithTagIdUsingGET**](docs/Api/TagsApi.md#listcontactswithtagidusingget) | **GET** /v2/tags/{tag_id}/contacts | List Tagged Contacts
*TagsApi* | [**listTagCategoriesUsingGET**](docs/Api/TagsApi.md#listtagcategoriesusingget) | **GET** /v2/tags/categories | List Tag Categories
*TagsApi* | [**listTagsUsingGET1**](docs/Api/TagsApi.md#listtagsusingget1) | **GET** /v2/tags | List Tags
*TagsApi* | [**removeTagsUsingPOST**](docs/Api/TagsApi.md#removetagsusingpost) | **POST** /v2/tags/{tag_id}/contacts:removeTags | Remove Tags
*TagsApi* | [**updateTagCategoryUsingPATCH**](docs/Api/TagsApi.md#updatetagcategoryusingpatch) | **PATCH** /v2/tags/categories/{tag_category_id} | Update a Tag Category
*TagsApi* | [**updateTagUsingPATCH**](docs/Api/TagsApi.md#updatetagusingpatch) | **PATCH** /v2/tags/{tag_id} | Update a Tag

## Models

- [AddContactsToSequenceRequest](docs/Model/AddContactsToSequenceRequest.md)
- [AddContactsToSequenceResponse](docs/Model/AddContactsToSequenceResponse.md)
- [AddProductInterestRequest](docs/Model/AddProductInterestRequest.md)
- [AddToAutomationSequenceRequest](docs/Model/AddToAutomationSequenceRequest.md)
- [AddToAutomationSequenceResponse](docs/Model/AddToAutomationSequenceResponse.md)
- [Address](docs/Model/Address.md)
- [AddressInformation](docs/Model/AddressInformation.md)
- [AffiliateAddToProgramRequest](docs/Model/AffiliateAddToProgramRequest.md)
- [AffiliateCommission](docs/Model/AffiliateCommission.md)
- [AffiliateCommissionEarned](docs/Model/AffiliateCommissionEarned.md)
- [AffiliateCommissionProgramResponse](docs/Model/AffiliateCommissionProgramResponse.md)
- [AffiliateLink](docs/Model/AffiliateLink.md)
- [AffiliateProgramV2](docs/Model/AffiliateProgramV2.md)
- [AffiliateRemoveFromProgramRequest](docs/Model/AffiliateRemoveFromProgramRequest.md)
- [AffiliateSummaryRecord](docs/Model/AffiliateSummaryRecord.md)
- [ApplicationCompany](docs/Model/ApplicationCompany.md)
- [ApplicationConfigurationModuleAffiliate](docs/Model/ApplicationConfigurationModuleAffiliate.md)
- [ApplicationConfigurationModuleAffiliateCommission](docs/Model/ApplicationConfigurationModuleAffiliateCommission.md)
- [ApplicationConfigurationModuleApplication](docs/Model/ApplicationConfigurationModuleApplication.md)
- [ApplicationConfigurationModuleAppointment](docs/Model/ApplicationConfigurationModuleAppointment.md)
- [ApplicationConfigurationModuleContact](docs/Model/ApplicationConfigurationModuleContact.md)
- [ApplicationConfigurationModuleContactAddressLabels](docs/Model/ApplicationConfigurationModuleContactAddressLabels.md)
- [ApplicationConfigurationModuleEcommerce](docs/Model/ApplicationConfigurationModuleEcommerce.md)
- [ApplicationConfigurationModuleEmail](docs/Model/ApplicationConfigurationModuleEmail.md)
- [ApplicationConfigurationModuleForms](docs/Model/ApplicationConfigurationModuleForms.md)
- [ApplicationConfigurationModuleFulfillment](docs/Model/ApplicationConfigurationModuleFulfillment.md)
- [ApplicationConfigurationModuleInvoice](docs/Model/ApplicationConfigurationModuleInvoice.md)
- [ApplicationConfigurationModuleNote](docs/Model/ApplicationConfigurationModuleNote.md)
- [ApplicationConfigurationModuleOpportunity](docs/Model/ApplicationConfigurationModuleOpportunity.md)
- [ApplicationConfigurationModuleOpportunityStates](docs/Model/ApplicationConfigurationModuleOpportunityStates.md)
- [ApplicationConfigurationModuleOpportunityStatesActive](docs/Model/ApplicationConfigurationModuleOpportunityStatesActive.md)
- [ApplicationConfigurationModuleOpportunityStatesLoss](docs/Model/ApplicationConfigurationModuleOpportunityStatesLoss.md)
- [ApplicationConfigurationModuleOpportunityStatesWin](docs/Model/ApplicationConfigurationModuleOpportunityStatesWin.md)
- [ApplicationConfigurationModuleTask](docs/Model/ApplicationConfigurationModuleTask.md)
- [ApplicationConfigurationModuleTemplate](docs/Model/ApplicationConfigurationModuleTemplate.md)
- [ApplicationFeaturesEnabled](docs/Model/ApplicationFeaturesEnabled.md)
- [ApplyRemoveTagRequest](docs/Model/ApplyRemoveTagRequest.md)
- [ApplyTagsResponse](docs/Model/ApplyTagsResponse.md)
- [AssignProductCategoriesRequest](docs/Model/AssignProductCategoriesRequest.md)
- [AssignProductsRequest](docs/Model/AssignProductsRequest.md)
- [Automation](docs/Model/Automation.md)
- [AutomationCategory](docs/Model/AutomationCategory.md)
- [AutomationLockStatus](docs/Model/AutomationLockStatus.md)
- [BaseListResponseDeal](docs/Model/BaseListResponseDeal.md)
- [BaseListResponseDealNote](docs/Model/BaseListResponseDealNote.md)
- [BaseListResponsePipeline](docs/Model/BaseListResponsePipeline.md)
- [BaseListResponsePipelineSummary](docs/Model/BaseListResponsePipelineSummary.md)
- [BaseListResponseStage](docs/Model/BaseListResponseStage.md)
- [BasicCompany](docs/Model/BasicCompany.md)
- [BasicContact](docs/Model/BasicContact.md)
- [BasicUser](docs/Model/BasicUser.md)
- [BusinessProfileAddressRequest](docs/Model/BusinessProfileAddressRequest.md)
- [BusinessProfileAddressResponse](docs/Model/BusinessProfileAddressResponse.md)
- [Campaign](docs/Model/Campaign.md)
- [CancelSubscriptionsRequest](docs/Model/CancelSubscriptionsRequest.md)
- [CategoryDiscount](docs/Model/CategoryDiscount.md)
- [CategoryReference](docs/Model/CategoryReference.md)
- [CheckListItemDetails](docs/Model/CheckListItemDetails.md)
- [ChecklistItem](docs/Model/ChecklistItem.md)
- [Company](docs/Model/Company.md)
- [Contact](docs/Model/Contact.md)
- [ContactLink](docs/Model/ContactLink.md)
- [ContactLinkType](docs/Model/ContactLinkType.md)
- [ContactUtmResponse](docs/Model/ContactUtmResponse.md)
- [Country](docs/Model/Country.md)
- [CreateAffiliateRequest](docs/Model/CreateAffiliateRequest.md)
- [CreateAutomationCategoryRequest](docs/Model/CreateAutomationCategoryRequest.md)
- [CreateCategoryDiscountRequest](docs/Model/CreateCategoryDiscountRequest.md)
- [CreateCommissionProgramRequest](docs/Model/CreateCommissionProgramRequest.md)
- [CreateCompanyRequest](docs/Model/CreateCompanyRequest.md)
- [CreateContactLinkTypeRequest](docs/Model/CreateContactLinkTypeRequest.md)
- [CreateContactUtmPropertiesRequest](docs/Model/CreateContactUtmPropertiesRequest.md)
- [CreateCustomFieldOptionRequest](docs/Model/CreateCustomFieldOptionRequest.md)
- [CreateCustomFieldRequest](docs/Model/CreateCustomFieldRequest.md)
- [CreateCustomFieldResponse](docs/Model/CreateCustomFieldResponse.md)
- [CreateDealNoteRequest](docs/Model/CreateDealNoteRequest.md)
- [CreateDefaultCommissionProgramRequest](docs/Model/CreateDefaultCommissionProgramRequest.md)
- [CreateEmailSentRequest](docs/Model/CreateEmailSentRequest.md)
- [CreateEmailsSentRequest](docs/Model/CreateEmailsSentRequest.md)
- [CreateFreeTrialDiscountRequest](docs/Model/CreateFreeTrialDiscountRequest.md)
- [CreateFunnelIntegrationRequest](docs/Model/CreateFunnelIntegrationRequest.md)
- [CreateFunnelIntegrationTriggerEvents](docs/Model/CreateFunnelIntegrationTriggerEvents.md)
- [CreateLeadSourceExpenseRequest](docs/Model/CreateLeadSourceExpenseRequest.md)
- [CreateLeadSourceRecurringExpenseRequest](docs/Model/CreateLeadSourceRecurringExpenseRequest.md)
- [CreateLeadSourceRequest](docs/Model/CreateLeadSourceRequest.md)
- [CreateNoteRequest](docs/Model/CreateNoteRequest.md)
- [CreateOpportunityRequest](docs/Model/CreateOpportunityRequest.md)
- [CreateOpportunityStageChecklistItem](docs/Model/CreateOpportunityStageChecklistItem.md)
- [CreateOpportunityStageRequest](docs/Model/CreateOpportunityStageRequest.md)
- [CreateOrUpdateAffiliateLinkRequest](docs/Model/CreateOrUpdateAffiliateLinkRequest.md)
- [CreateOrderTotalDiscountRequest](docs/Model/CreateOrderTotalDiscountRequest.md)
- [CreatePaymentMethodConfigRequest](docs/Model/CreatePaymentMethodConfigRequest.md)
- [CreatePaymentRequest](docs/Model/CreatePaymentRequest.md)
- [CreatePipelineRequest](docs/Model/CreatePipelineRequest.md)
- [CreateProductCategoryRequest](docs/Model/CreateProductCategoryRequest.md)
- [CreateProductCommissionProgramRequest](docs/Model/CreateProductCommissionProgramRequest.md)
- [CreateProductDiscountRequest](docs/Model/CreateProductDiscountRequest.md)
- [CreateProductInterestBundleRequest](docs/Model/CreateProductInterestBundleRequest.md)
- [CreateProductRequest](docs/Model/CreateProductRequest.md)
- [CreateReferralRequest](docs/Model/CreateReferralRequest.md)
- [CreateRestOrderItemRequest](docs/Model/CreateRestOrderItemRequest.md)
- [CreateShippingDiscountRequest](docs/Model/CreateShippingDiscountRequest.md)
- [CreateStageRequest](docs/Model/CreateStageRequest.md)
- [CreateSubscriptionCommissionProgramRequest](docs/Model/CreateSubscriptionCommissionProgramRequest.md)
- [CreateSubscriptionPlanRequest](docs/Model/CreateSubscriptionPlanRequest.md)
- [CreateSubscriptionV2](docs/Model/CreateSubscriptionV2.md)
- [CreateTaskRequest](docs/Model/CreateTaskRequest.md)
- [CreateUpdateContactRequest](docs/Model/CreateUpdateContactRequest.md)
- [CreateUpdateLeadSourceCategoryRequest](docs/Model/CreateUpdateLeadSourceCategoryRequest.md)
- [CreateUpdateTagCategoryRequest](docs/Model/CreateUpdateTagCategoryRequest.md)
- [CreateUpdateTagRequest](docs/Model/CreateUpdateTagRequest.md)
- [CreateUpdateTaskRequest](docs/Model/CreateUpdateTaskRequest.md)
- [CreateUserRequestV2](docs/Model/CreateUserRequestV2.md)
- [CurrencyValue](docs/Model/CurrencyValue.md)
- [CustomField](docs/Model/CustomField.md)
- [CustomFieldMetaData](docs/Model/CustomFieldMetaData.md)
- [CustomFieldOption](docs/Model/CustomFieldOption.md)
- [CustomFieldValue](docs/Model/CustomFieldValue.md)
- [Deal](docs/Model/Deal.md)
- [DealContact](docs/Model/DealContact.md)
- [DealNote](docs/Model/DealNote.md)
- [DealNoteListResponse](docs/Model/DealNoteListResponse.md)
- [DealStage](docs/Model/DealStage.md)
- [DealStatus](docs/Model/DealStatus.md)
- [DealValue](docs/Model/DealValue.md)
- [DefaultCommission](docs/Model/DefaultCommission.md)
- [DeleteEmailsRequest](docs/Model/DeleteEmailsRequest.md)
- [DeleteEmailsResponse](docs/Model/DeleteEmailsResponse.md)
- [DeleteFunnelIntegrationRequest](docs/Model/DeleteFunnelIntegrationRequest.md)
- [DeleteSubscriptionPlanCommissionRequest](docs/Model/DeleteSubscriptionPlanCommissionRequest.md)
- [Discount](docs/Model/Discount.md)
- [DiscountCriteria](docs/Model/DiscountCriteria.md)
- [EmailAddress](docs/Model/EmailAddress.md)
- [EmailAddressRequest](docs/Model/EmailAddressRequest.md)
- [EmailSendRequest](docs/Model/EmailSendRequest.md)
- [EmailSendRequestAttachment](docs/Model/EmailSendRequestAttachment.md)
- [EmailSendTemplateRequest](docs/Model/EmailSendTemplateRequest.md)
- [EmailSentCreateError](docs/Model/EmailSentCreateError.md)
- [EmailSentWithContent](docs/Model/EmailSentWithContent.md)
- [EmailTemplate](docs/Model/EmailTemplate.md)
- [EmailsSentList](docs/Model/EmailsSentList.md)
- [Error](docs/Model/Error.md)
- [FaxNumber](docs/Model/FaxNumber.md)
- [File](docs/Model/File.md)
- [FileMetadata](docs/Model/FileMetadata.md)
- [FileOperationRequest](docs/Model/FileOperationRequest.md)
- [FreeTrialDiscount](docs/Model/FreeTrialDiscount.md)
- [FunnelIntegrationAction](docs/Model/FunnelIntegrationAction.md)
- [FunnelIntegrationHttpRequest](docs/Model/FunnelIntegrationHttpRequest.md)
- [FunnelIntegrationSchemaField](docs/Model/FunnelIntegrationSchemaField.md)
- [FunnelIntegrationTriggerEventDTO](docs/Model/FunnelIntegrationTriggerEventDTO.md)
- [FunnelIntegrationTriggerResultDTO](docs/Model/FunnelIntegrationTriggerResultDTO.md)
- [GetApplicationEnabledStatusResponse](docs/Model/GetApplicationEnabledStatusResponse.md)
- [GetBusinessProfileResponse](docs/Model/GetBusinessProfileResponse.md)
- [GetContactOptionTypesResponse](docs/Model/GetContactOptionTypesResponse.md)
- [GetNoteResponse](docs/Model/GetNoteResponse.md)
- [GetSettingsResponse](docs/Model/GetSettingsResponse.md)
- [GetTagCategoryResponse](docs/Model/GetTagCategoryResponse.md)
- [GetUserInfoResponse](docs/Model/GetUserInfoResponse.md)
- [Goal](docs/Model/Goal.md)
- [HistoricalCounts](docs/Model/HistoricalCounts.md)
- [InvoiceFile](docs/Model/InvoiceFile.md)
- [InvoiceOrderPayment](docs/Model/InvoiceOrderPayment.md)
- [Item](docs/Model/Item.md)
- [LandingPage](docs/Model/LandingPage.md)
- [LeadScore](docs/Model/LeadScore.md)
- [LeadSource](docs/Model/LeadSource.md)
- [LeadSourceCategory](docs/Model/LeadSourceCategory.md)
- [LeadSourceExpense](docs/Model/LeadSourceExpense.md)
- [LeadSourceRecurringExpense](docs/Model/LeadSourceRecurringExpense.md)
- [LeadSourceRecurringExpenseUpdateRequest](docs/Model/LeadSourceRecurringExpenseUpdateRequest.md)
- [Link](docs/Model/Link.md)
- [LinkContactsRequest](docs/Model/LinkContactsRequest.md)
- [ListAffiliateCommissionProgramsResponse](docs/Model/ListAffiliateCommissionProgramsResponse.md)
- [ListAffiliateCommissionsResponse](docs/Model/ListAffiliateCommissionsResponse.md)
- [ListAffiliateLinksResponse](docs/Model/ListAffiliateLinksResponse.md)
- [ListAffiliateSummariesResponse](docs/Model/ListAffiliateSummariesResponse.md)
- [ListAutomationCategoryResponse](docs/Model/ListAutomationCategoryResponse.md)
- [ListAutomationIdsResponse](docs/Model/ListAutomationIdsResponse.md)
- [ListAutomationResponse](docs/Model/ListAutomationResponse.md)
- [ListBasicContactResponse](docs/Model/ListBasicContactResponse.md)
- [ListCampaignsResponse](docs/Model/ListCampaignsResponse.md)
- [ListCategoryDiscountsResponse](docs/Model/ListCategoryDiscountsResponse.md)
- [ListCompaniesResponse](docs/Model/ListCompaniesResponse.md)
- [ListContactLinkTypesResponse](docs/Model/ListContactLinkTypesResponse.md)
- [ListContactLinksResponse](docs/Model/ListContactLinksResponse.md)
- [ListContactsResponse](docs/Model/ListContactsResponse.md)
- [ListCountriesResponse](docs/Model/ListCountriesResponse.md)
- [ListFilesResponse](docs/Model/ListFilesResponse.md)
- [ListFreeTrialDiscountsResponse](docs/Model/ListFreeTrialDiscountsResponse.md)
- [ListLandingPagesResponse](docs/Model/ListLandingPagesResponse.md)
- [ListLeadSourceCategoriesResponse](docs/Model/ListLeadSourceCategoriesResponse.md)
- [ListLeadSourceExpensesResponse](docs/Model/ListLeadSourceExpensesResponse.md)
- [ListLeadSourceRecurringExpensesResponse](docs/Model/ListLeadSourceRecurringExpensesResponse.md)
- [ListLeadSourcesResponse](docs/Model/ListLeadSourcesResponse.md)
- [ListNoteTemplateResponse](docs/Model/ListNoteTemplateResponse.md)
- [ListNotesResponse](docs/Model/ListNotesResponse.md)
- [ListOpportunitiesResponse](docs/Model/ListOpportunitiesResponse.md)
- [ListOpportunityStagesResponse](docs/Model/ListOpportunityStagesResponse.md)
- [ListOrderPaymentsResponse](docs/Model/ListOrderPaymentsResponse.md)
- [ListOrderTotalDiscountsResponse](docs/Model/ListOrderTotalDiscountsResponse.md)
- [ListOrders](docs/Model/ListOrders.md)
- [ListProductCategoriesResponse](docs/Model/ListProductCategoriesResponse.md)
- [ListProductDiscountsResponse](docs/Model/ListProductDiscountsResponse.md)
- [ListProductInterestBundleResponse](docs/Model/ListProductInterestBundleResponse.md)
- [ListProductsResponse](docs/Model/ListProductsResponse.md)
- [ListProvincesResponse](docs/Model/ListProvincesResponse.md)
- [ListReportsResponse](docs/Model/ListReportsResponse.md)
- [ListRestMerchantAccountResponse](docs/Model/ListRestMerchantAccountResponse.md)
- [ListRestMerchantResponse](docs/Model/ListRestMerchantResponse.md)
- [ListRestShippingMethodsResponse](docs/Model/ListRestShippingMethodsResponse.md)
- [ListShippingDiscountsResponse](docs/Model/ListShippingDiscountsResponse.md)
- [ListSubscriptionPlansResponse](docs/Model/ListSubscriptionPlansResponse.md)
- [ListSubscriptionsResponse](docs/Model/ListSubscriptionsResponse.md)
- [ListTagCategoriesResponse](docs/Model/ListTagCategoriesResponse.md)
- [ListTaggedCompaniesResponse](docs/Model/ListTaggedCompaniesResponse.md)
- [ListTaggedContactsResponse](docs/Model/ListTaggedContactsResponse.md)
- [ListTagsResponse](docs/Model/ListTagsResponse.md)
- [ListTasksResponse](docs/Model/ListTasksResponse.md)
- [ListTransactionsResponse](docs/Model/ListTransactionsResponse.md)
- [ListUserResponse](docs/Model/ListUserResponse.md)
- [Money](docs/Model/Money.md)
- [Note](docs/Model/Note.md)
- [NoteTemplate](docs/Model/NoteTemplate.md)
- [ObjectModel](docs/Model/ObjectModel.md)
- [OpportunityContact](docs/Model/OpportunityContact.md)
- [OpportunityStage](docs/Model/OpportunityStage.md)
- [OrderItemProduct](docs/Model/OrderItemProduct.md)
- [OrderItemTax](docs/Model/OrderItemTax.md)
- [OrderTotalDiscount](docs/Model/OrderTotalDiscount.md)
- [Origin](docs/Model/Origin.md)
- [OriginRequest](docs/Model/OriginRequest.md)
- [Owner](docs/Model/Owner.md)
- [PaymentMethodConfig](docs/Model/PaymentMethodConfig.md)
- [PaymentPlan](docs/Model/PaymentPlan.md)
- [PaymentResult](docs/Model/PaymentResult.md)
- [PhoneNumber](docs/Model/PhoneNumber.md)
- [Pipeline](docs/Model/Pipeline.md)
- [PipelineListResponse](docs/Model/PipelineListResponse.md)
- [PipelineOutcomeLabel](docs/Model/PipelineOutcomeLabel.md)
- [PipelineOutcomeLabelListResponse](docs/Model/PipelineOutcomeLabelListResponse.md)
- [PipelineStageListResponse](docs/Model/PipelineStageListResponse.md)
- [PipelineSummariesListResponse](docs/Model/PipelineSummariesListResponse.md)
- [PipelineSummary](docs/Model/PipelineSummary.md)
- [ProductCategory](docs/Model/ProductCategory.md)
- [ProductCommission](docs/Model/ProductCommission.md)
- [ProductCommissionProgram](docs/Model/ProductCommissionProgram.md)
- [ProductDiscount](docs/Model/ProductDiscount.md)
- [ProductFixedOption](docs/Model/ProductFixedOption.md)
- [ProductInterest](docs/Model/ProductInterest.md)
- [ProductInterestBundle](docs/Model/ProductInterestBundle.md)
- [ProductInventory](docs/Model/ProductInventory.md)
- [ProductOptions](docs/Model/ProductOptions.md)
- [ProductVariableSetting](docs/Model/ProductVariableSetting.md)
- [Provinces](docs/Model/Provinces.md)
- [Referral](docs/Model/Referral.md)
- [RemoveContactsFromSequenceRequest](docs/Model/RemoveContactsFromSequenceRequest.md)
- [RemoveContactsFromSequenceResponse](docs/Model/RemoveContactsFromSequenceResponse.md)
- [Report](docs/Model/Report.md)
- [ReportEntryRecord](docs/Model/ReportEntryRecord.md)
- [ReportEntryValue](docs/Model/ReportEntryValue.md)
- [ReportExecutionResult](docs/Model/ReportExecutionResult.md)
- [Resource](docs/Model/Resource.md)
- [RestAffiliate](docs/Model/RestAffiliate.md)
- [RestApplyCommissionRequest](docs/Model/RestApplyCommissionRequest.md)
- [RestCreateOrderRequest](docs/Model/RestCreateOrderRequest.md)
- [RestEmailAddress](docs/Model/RestEmailAddress.md)
- [RestOpportunityStage](docs/Model/RestOpportunityStage.md)
- [RestProductOption](docs/Model/RestProductOption.md)
- [RestProductOptionValue](docs/Model/RestProductOptionValue.md)
- [RestSubscriptionPlan](docs/Model/RestSubscriptionPlan.md)
- [RestSubscriptionV2](docs/Model/RestSubscriptionV2.md)
- [RestV2Opportunity](docs/Model/RestV2Opportunity.md)
- [RestV2Order](docs/Model/RestV2Order.md)
- [RestV2OrderItem](docs/Model/RestV2OrderItem.md)
- [RestV2Product](docs/Model/RestV2Product.md)
- [RestV2Subscription](docs/Model/RestV2Subscription.md)
- [RestV2User](docs/Model/RestV2User.md)
- [SaveAutomationCategoryRequest](docs/Model/SaveAutomationCategoryRequest.md)
- [Sequence](docs/Model/Sequence.md)
- [SequencePath](docs/Model/SequencePath.md)
- [SetDefaultCommissionProgramResponse](docs/Model/SetDefaultCommissionProgramResponse.md)
- [ShippingDiscount](docs/Model/ShippingDiscount.md)
- [ShippingInformation](docs/Model/ShippingInformation.md)
- [ShippingMethod](docs/Model/ShippingMethod.md)
- [SocialAccount](docs/Model/SocialAccount.md)
- [StackTraceElement](docs/Model/StackTraceElement.md)
- [Stage](docs/Model/Stage.md)
- [StageDealListResponse](docs/Model/StageDealListResponse.md)
- [StageDetails](docs/Model/StageDetails.md)
- [StageListResponse](docs/Model/StageListResponse.md)
- [SubscriptionCommission](docs/Model/SubscriptionCommission.md)
- [SubscriptionCommissionProgram](docs/Model/SubscriptionCommissionProgram.md)
- [SubscriptionPlan](docs/Model/SubscriptionPlan.md)
- [Tag](docs/Model/Tag.md)
- [TaggedCompany](docs/Model/TaggedCompany.md)
- [Task](docs/Model/Task.md)
- [Throwable](docs/Model/Throwable.md)
- [Transaction](docs/Model/Transaction.md)
- [URI](docs/Model/URI.md)
- [URL](docs/Model/URL.md)
- [UpdateAffiliateRequest](docs/Model/UpdateAffiliateRequest.md)
- [UpdateAutomationCategoryRequest](docs/Model/UpdateAutomationCategoryRequest.md)
- [UpdateBusinessProfileRequest](docs/Model/UpdateBusinessProfileRequest.md)
- [UpdateCategoryDiscountRequest](docs/Model/UpdateCategoryDiscountRequest.md)
- [UpdateCommissionProgramRequest](docs/Model/UpdateCommissionProgramRequest.md)
- [UpdateCompanyRequest](docs/Model/UpdateCompanyRequest.md)
- [UpdateCustomFieldMetaDataRequest](docs/Model/UpdateCustomFieldMetaDataRequest.md)
- [UpdateDealNoteRequest](docs/Model/UpdateDealNoteRequest.md)
- [UpdateDefaultCommissionProgramRequest](docs/Model/UpdateDefaultCommissionProgramRequest.md)
- [UpdateEmailAddress](docs/Model/UpdateEmailAddress.md)
- [UpdateLeadSourceExpenseRequest](docs/Model/UpdateLeadSourceExpenseRequest.md)
- [UpdateNoteRequest](docs/Model/UpdateNoteRequest.md)
- [UpdateNoteResponse](docs/Model/UpdateNoteResponse.md)
- [UpdateOpportunityRequestV2](docs/Model/UpdateOpportunityRequestV2.md)
- [UpdateOpportunityStageChecklistItem](docs/Model/UpdateOpportunityStageChecklistItem.md)
- [UpdateOpportunityStageRequest](docs/Model/UpdateOpportunityStageRequest.md)
- [UpdateOrderItemRequest](docs/Model/UpdateOrderItemRequest.md)
- [UpdateOrderRequest](docs/Model/UpdateOrderRequest.md)
- [UpdateOrderTotalDiscountRequest](docs/Model/UpdateOrderTotalDiscountRequest.md)
- [UpdateOutcomeLabelsRequest](docs/Model/UpdateOutcomeLabelsRequest.md)
- [UpdatePipelineRequest](docs/Model/UpdatePipelineRequest.md)
- [UpdateProductCategoryRequest](docs/Model/UpdateProductCategoryRequest.md)
- [UpdateProductCommissionProgramRequest](docs/Model/UpdateProductCommissionProgramRequest.md)
- [UpdateProductDiscountRequest](docs/Model/UpdateProductDiscountRequest.md)
- [UpdateProductInterestBundleRequest](docs/Model/UpdateProductInterestBundleRequest.md)
- [UpdateProductInterestRequest](docs/Model/UpdateProductInterestRequest.md)
- [UpdateProductInventoryRequest](docs/Model/UpdateProductInventoryRequest.md)
- [UpdateProductRequest](docs/Model/UpdateProductRequest.md)
- [UpdateShippingDiscountRequest](docs/Model/UpdateShippingDiscountRequest.md)
- [UpdateStageRequest](docs/Model/UpdateStageRequest.md)
- [UpdateSubscriptionCommissionProgramRequest](docs/Model/UpdateSubscriptionCommissionProgramRequest.md)
- [UpdateSubscriptionPlanRequest](docs/Model/UpdateSubscriptionPlanRequest.md)
- [UpdateSubscriptionRequest](docs/Model/UpdateSubscriptionRequest.md)
- [UpdateTagCategoryResponse](docs/Model/UpdateTagCategoryResponse.md)
- [UpdateTagResponse](docs/Model/UpdateTagResponse.md)
- [UpdateTaskResponse](docs/Model/UpdateTaskResponse.md)
- [UpdateUserRequest](docs/Model/UpdateUserRequest.md)
- [UpdatedPaymentPlan](docs/Model/UpdatedPaymentPlan.md)
- [User](docs/Model/User.md)

## Authorization

Authentication schemes defined for the API:
### oauth2

- **Type**: `OAuth`
- **Flow**: `accessCode`
- **Authorization URL**: `https://accounts.infusionsoft.com/app/oauth/authorize`
- **Scopes**: N/A

## Tests

To run the tests, use:

```bash
composer install
vendor/bin/phpunit
```

## Author

api@keap.com

## About this package

This PHP package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `2.70.0.790985`
    - Package version: `0.0.37`
    - Generator version: `7.10.0`
- Build package: `org.openapitools.codegen.languages.PhpClientCodegen`
