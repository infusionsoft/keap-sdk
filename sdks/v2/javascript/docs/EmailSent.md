# KeapCoreServiceV2Sdk.EmailSent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique identifier of the email | [optional] 
**subject** | **String** | The subject of the email | [optional] 
**headers** | **String** | Email headers | [optional] 
**contactId** | **String** | The contact ID who received the email | [optional] 
**sentToAddress** | **String** | The email address the email was sent to | [optional] 
**sentToCcAddressList** | **[String]** | List of CC email addresses | [optional] 
**sentToBccAddressList** | **[String]** | List of BCC email addresses | [optional] 
**sentFromAddress** | **String** | The sender&#39;s email address | [optional] 
**sentFromReplyAddress** | **String** | The reply-to email address | [optional] 
**sentTime** | **Date** | When the email was sent, in ISO-8601 format | [optional] 
**receivedTime** | **Date** | When the email was received, in ISO-8601 format | [optional] 
**openedTime** | **Date** | When the email was opened, in ISO-8601 format | [optional] 
**clickedTime** | **Date** | When a link in the email was clicked, in ISO-8601 format | [optional] 
**originalProviderId** | **String** | The original provider&#39;s message ID | [optional] 
**originalProvider** | **String** | The email provider that sent the email | [optional] 
**providerSourceId** | **String** | The synced email account that generated this message | [optional] 



## Enum: OriginalProviderEnum


* `UNKNOWN` (value: `"UNKNOWN"`)

* `INFUSIONSOFT` (value: `"INFUSIONSOFT"`)

* `MICROSOFT` (value: `"MICROSOFT"`)

* `GOOGLE` (value: `"GOOGLE"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




