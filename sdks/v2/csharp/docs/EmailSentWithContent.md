# Keap.Core.V2.Model.EmailSentWithContent
A sent email record with full content

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique identifier of the email | [optional] 
**Subject** | **string** | The subject of the email | [optional] 
**Headers** | **string** | Email headers | [optional] 
**ContactId** | **string** | The contact ID who received the email | [optional] 
**SentToAddress** | **string** | The email address the email was sent to | [optional] 
**SentToCcAddressList** | **List&lt;string&gt;** | List of CC email addresses | [optional] 
**SentToBccAddressList** | **List&lt;string&gt;** | List of BCC email addresses | [optional] 
**SentFromAddress** | **string** | The sender&#39;s email address | [optional] 
**SentFromReplyAddress** | **string** | The reply-to email address | [optional] 
**SentTime** | **DateTime** | When the email was sent, in ISO-8601 format | [optional] 
**ReceivedTime** | **DateTime** | When the email was received, in ISO-8601 format | [optional] 
**OpenedTime** | **DateTime** | When the email was opened, in ISO-8601 format | [optional] 
**ClickedTime** | **DateTime** | When a link in the email was clicked, in ISO-8601 format | [optional] 
**OriginalProviderId** | **string** | The original provider&#39;s message ID | [optional] 
**OriginalProvider** | **string** | The email provider that sent the email | [optional] 
**ProviderSourceId** | **string** | The synced email account that generated this message | [optional] 
**PlainContent** | **string** | Base64 encoded plain text content | [optional] 
**HtmlContent** | **string** | Base64 encoded HTML content | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

