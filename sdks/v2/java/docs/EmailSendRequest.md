

# EmailSendRequest

Request to send an email to contacts

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**contacts** | **List&lt;String&gt;** | An array of Contact Ids to receive the email |  |
|**subject** | **String** | The subject line of the email |  |
|**attachments** | [**Set&lt;EmailSendRequestAttachment&gt;**](EmailSendRequestAttachment.md) | Attachments to be sent with each copy of the email, maximum of 10 with size of 1MB each |  [optional] |
|**userId** | **String** | The user ID to send the email on behalf of |  |
|**htmlContent** | **String** | The HTML-formatted content of the email, encoded in Base64 |  [optional] |
|**plainContent** | **String** | The plain-text content of the email, encoded in Base64 |  [optional] |
|**addressField** | **String** | Email field of each Contact record to address the email to, such as &#39;Email&#39;, &#39;EmailAddress2&#39;, &#39;EmailAddress3&#39; or &#39;_CustomFieldName&#39;, defaulting to the contact&#39;s primary email |  [optional] |


## Implemented Interfaces

* Serializable

