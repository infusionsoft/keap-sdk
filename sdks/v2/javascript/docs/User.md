# KeapCoreServiceV2Sdk.User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) | The user&#39;s address | [optional] 
**title** | **String** | The user&#39;s job title | [optional] 
**website** | **String** | The user&#39;s website URL | [optional] 
**partner** | **Boolean** | Whether the user is a partner | [optional] 
**admin** | **Boolean** | Whether the user is an admin | [optional] 
**status** | **String** | The user&#39;s status | [optional] 
**id** | **String** | The unique identifier of the user | [optional] 
**globalUserId** | **String** | The global user identifier across tenants | [optional] 
**keapId** | **String** | The Keap ID of the user | [optional] 
**givenName** | **String** | The user&#39;s first name | [optional] 
**familyName** | **String** | The user&#39;s last name | [optional] 
**phoneNumbers** | [**[PhoneNumber]**](PhoneNumber.md) | List of user&#39;s phone numbers | [optional] 
**faxNumbers** | [**[FaxNumber]**](FaxNumber.md) | List of user&#39;s fax numbers | [optional] 
**emailAddresses** | [**[EmailAddress]**](EmailAddress.md) | List of user&#39;s email addresses | [optional] 
**socialAccounts** | [**[SocialAccount]**](SocialAccount.md) | List of user&#39;s social media accounts | [optional] 
**companyName** | **String** | The user&#39;s company name | [optional] 
**createdBy** | **Number** | ID of the user who created this user | [optional] 
**createTime** | **Date** | When the user was created, in ISO-8601 format | [optional] 
**updatedBy** | **Number** | ID of the user who last updated this user | [optional] 
**updateTime** | **Date** | When the user was last updated, in ISO-8601 format | [optional] 



## Enum: StatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `INVITED` (value: `"INVITED"`)

* `INACTIVE` (value: `"INACTIVE"`)

* `NOT_A_USER` (value: `"NOT_A_USER"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




