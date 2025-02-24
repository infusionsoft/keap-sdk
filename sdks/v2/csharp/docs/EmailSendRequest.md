# Keap.Core.V2.Model.EmailSendRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddressField** | **string** | Email field of each Contact record to address the email to, such as &#39;Email&#39;, &#39;EmailAddress2&#39;, &#39;EmailAddress3&#39; or &#39;_CustomFieldName&#39;, defaulting to the contact&#39;s primary email | [optional] 
**Attachments** | [**List&lt;EmailSendRequestAttachment&gt;**](EmailSendRequestAttachment.md) | Attachments to be sent with each copy of the email, maximum of 10 with size of 1MB each | [optional] 
**Contacts** | **List&lt;string&gt;** | An array of Contact Ids to receive the email | 
**HtmlContent** | **string** | The HTML-formatted content of the email, encoded in Base64 | [optional] 
**PlainContent** | **string** | The plain-text content of the email, encoded in Base64 | [optional] 
**Subject** | **string** | The subject line of the email | 
**UserId** | **string** | The infusionsoft user to send the email on behalf of | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

