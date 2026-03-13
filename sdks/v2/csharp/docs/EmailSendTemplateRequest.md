# Keap.Core.V2.Model.EmailSendTemplateRequest
Use a template to send an email to a list of contacts 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateId** | **string** | Template ID | 
**ContactIds** | **List&lt;string&gt;** | List of contact IDs to send the email to | 
**UserId** | **string** | The user ID to send the email on behalf of | 
**AddressField** | **string** | Email field of each Contact record to address the email to, such as &#39;Email&#39;, &#39;EmailAddress2&#39;, &#39;EmailAddress3&#39; or &#39;_CustomFieldName&#39;, defaulting to the contact&#39;s primary email | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

