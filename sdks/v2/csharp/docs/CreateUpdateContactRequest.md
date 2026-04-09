# Keap.Core.V2.Model.CreateUpdateContactRequest
contact

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Addresses** | [**List&lt;Address&gt;**](Address.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**Company** | [**BasicCompany**](BasicCompany.md) |  | [optional] 
**Origin** | [**OriginRequest**](OriginRequest.md) |  | [optional] 
**Prefix** | **string** | Name prefix | [optional] 
**Suffix** | **string** | Name suffix | [optional] 
**Website** | **string** | Personal website URL | [optional] 
**AnniversaryDate** | **string** | The anniversary date | [optional] 
**BirthDate** | **string** | The birth date | [optional] 
**ContactType** | **string** | Type of contact | [optional] 
**CustomFields** | [**List&lt;CustomFieldValue&gt;**](CustomFieldValue.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**EmailAddresses** | [**List&lt;EmailAddressRequest&gt;**](EmailAddressRequest.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**FamilyName** | **string** | Last name / surname | [optional] 
**FaxNumbers** | [**List&lt;FaxNumber&gt;**](FaxNumber.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**GivenName** | **string** | First name | [optional] 
**JobTitle** | **string** | Job title | [optional] 
**LeadsourceId** | **string** | Lead source identifier | [optional] 
**MiddleName** | **string** | Middle name | [optional] 
**OwnerId** | **string** | ID of the user who owns this contact | [optional] 
**PhoneNumbers** | [**List&lt;PhoneNumber&gt;**](PhoneNumber.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**PreferredLocale** | **string** | Preferred locale | [optional] 
**PreferredName** | **string** | Preferred name or nickname | [optional] 
**ReferralCode** | **string** | Referral code | [optional] 
**SocialAccounts** | [**List&lt;SocialAccount&gt;**](SocialAccount.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**SourceType** | **string** |  | [optional] 
**SpouseName** | **string** | Spouse&#39;s name | [optional] 
**VarTimeZone** | **string** | Contact&#39;s timezone | [optional] 
**UtmParameters** | [**CreateContactUtmPropertiesRequest**](CreateContactUtmPropertiesRequest.md) |  | [optional] 
**AssistantName** | **string** |  | [optional] 
**AssistantPhone** | **string** |  | [optional] 
**BillingInformation** | **string** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

