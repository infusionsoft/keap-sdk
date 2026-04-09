# KeapCoreServiceV2Sdk.CreateUpdateContactRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**[Address]**](Address.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**company** | [**BasicCompany**](BasicCompany.md) |  | [optional] 
**origin** | [**OriginRequest**](OriginRequest.md) |  | [optional] 
**prefix** | **String** | Name prefix | [optional] 
**suffix** | **String** | Name suffix | [optional] 
**website** | **String** | Personal website URL | [optional] 
**anniversaryDate** | **String** | The anniversary date | [optional] 
**birthDate** | **String** | The birth date | [optional] 
**contactType** | **String** | Type of contact | [optional] 
**customFields** | [**[CustomFieldValue]**](CustomFieldValue.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**emailAddresses** | [**[EmailAddressRequest]**](EmailAddressRequest.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**familyName** | **String** | Last name / surname | [optional] 
**faxNumbers** | [**[FaxNumber]**](FaxNumber.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**givenName** | **String** | First name | [optional] 
**jobTitle** | **String** | Job title | [optional] 
**leadsourceId** | **String** | Lead source identifier | [optional] 
**middleName** | **String** | Middle name | [optional] 
**ownerId** | **String** | ID of the user who owns this contact | [optional] 
**phoneNumbers** | [**[PhoneNumber]**](PhoneNumber.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**preferredLocale** | **String** | Preferred locale | [optional] 
**preferredName** | **String** | Preferred name or nickname | [optional] 
**referralCode** | **String** | Referral code | [optional] 
**socialAccounts** | [**[SocialAccount]**](SocialAccount.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**sourceType** | **String** |  | [optional] 
**spouseName** | **String** | Spouse&#39;s name | [optional] 
**timeZone** | **String** | Contact&#39;s timezone | [optional] 
**utmParameters** | [**CreateContactUtmPropertiesRequest**](CreateContactUtmPropertiesRequest.md) |  | [optional] 
**assistantName** | **String** |  | [optional] 
**assistantPhone** | **String** |  | [optional] 
**billingInformation** | **String** |  | [optional] 



## Enum: SourceTypeEnum


* `SOURCE_TYPE_UNSPECIFIED` (value: `"SOURCE_TYPE_UNSPECIFIED"`)

* `API` (value: `"API"`)

* `APPOINTMENT` (value: `"APPOINTMENT"`)

* `FORM_API_HOSTED` (value: `"FORM_API_HOSTED"`)

* `FORM_API_INTERNAL` (value: `"FORM_API_INTERNAL"`)

* `IMPORT` (value: `"IMPORT"`)

* `INTERNAL_FORM` (value: `"INTERNAL_FORM"`)

* `LANDING_PAGE` (value: `"LANDING_PAGE"`)

* `MANUAL` (value: `"MANUAL"`)

* `OTHER` (value: `"OTHER"`)

* `UNKNOWN` (value: `"UNKNOWN"`)

* `WEBFORM` (value: `"WEBFORM"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




