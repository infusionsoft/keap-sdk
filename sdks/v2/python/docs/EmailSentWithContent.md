# EmailSentWithContent

A sent email record with full content

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of the email | [optional] 
**subject** | **str** | The subject of the email | [optional] 
**headers** | **str** | Email headers | [optional] 
**contact_id** | **str** | The contact ID who received the email | [optional] 
**sent_to_address** | **str** | The email address the email was sent to | [optional] 
**sent_to_cc_address_list** | **List[str]** | List of CC email addresses | [optional] 
**sent_to_bcc_address_list** | **List[str]** | List of BCC email addresses | [optional] 
**sent_from_address** | **str** | The sender&#39;s email address | [optional] 
**sent_from_reply_address** | **str** | The reply-to email address | [optional] 
**sent_time** | **datetime** | When the email was sent, in ISO-8601 format | [optional] 
**received_time** | **datetime** | When the email was received, in ISO-8601 format | [optional] 
**opened_time** | **datetime** | When the email was opened, in ISO-8601 format | [optional] 
**clicked_time** | **datetime** | When a link in the email was clicked, in ISO-8601 format | [optional] 
**original_provider_id** | **str** | The original provider&#39;s message ID | [optional] 
**original_provider** | **str** | The email provider that sent the email | [optional] 
**provider_source_id** | **str** | The synced email account that generated this message | [optional] 
**plain_content** | **str** | Base64 encoded plain text content | [optional] 
**html_content** | **str** | Base64 encoded HTML content | [optional] 

## Example

```python
from keap_core_v2_client.models.email_sent_with_content import EmailSentWithContent

# TODO update the JSON string below
json = "{}"
# create an instance of EmailSentWithContent from a JSON string
email_sent_with_content_instance = EmailSentWithContent.from_json(json)
# print the JSON string representation of the object
print(EmailSentWithContent.to_json())

# convert the object into a dict
email_sent_with_content_dict = email_sent_with_content_instance.to_dict()
# create an instance of EmailSentWithContent from a dict
email_sent_with_content_from_dict = EmailSentWithContent.from_dict(email_sent_with_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


