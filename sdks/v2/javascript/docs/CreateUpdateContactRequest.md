# KeapCoreServiceV2Sdk.CreateUpdateContactRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**[Address]**](Address.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**anniversaryDate** | **String** |  | [optional] 
**birthDate** | **String** |  | [optional] 
**company** | [**BasicCompany**](BasicCompany.md) |  | [optional] 
**contactType** | **String** |  | [optional] 
**customFields** | [**[CustomFieldValue]**](CustomFieldValue.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**emailAddresses** | [**[EmailAddressRequest]**](EmailAddressRequest.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**familyName** | **String** |  | [optional] 
**faxNumbers** | [**[FaxNumber]**](FaxNumber.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**givenName** | **String** |  | [optional] 
**jobTitle** | **String** |  | [optional] 
**leadsourceId** | **String** |  | [optional] 
**middleName** | **String** |  | [optional] 
**origin** | [**OriginRequest**](OriginRequest.md) |  | [optional] 
**ownerId** | **String** |  | [optional] 
**phoneNumbers** | [**[PhoneNumber]**](PhoneNumber.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**preferredLocale** | **String** |  | [optional] 
**preferredName** | **String** |  | [optional] 
**prefix** | **String** |  | [optional] 
**referralCode** | **String** |  | [optional] 
**socialAccounts** | [**[SocialAccount]**](SocialAccount.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**sourceType** | **String** |  | [optional] 
**spouseName** | **String** |  | [optional] 
**suffix** | **String** |  | [optional] 
**timeZone** | **String** |  | [optional] 
**utmParameters** | [**CreateContactUtmPropertiesRequest**](CreateContactUtmPropertiesRequest.md) |  | [optional] 
**website** | **String** |  | [optional] 



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




