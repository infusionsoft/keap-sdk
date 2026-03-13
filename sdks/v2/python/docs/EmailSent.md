# EmailSent

A sent email record

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

## Example

```python
from keap_core_v2_client.models.email_sent import EmailSent

# TODO update the JSON string below
json = "{}"
# create an instance of EmailSent from a JSON string
email_sent_instance = EmailSent.from_json(json)
# print the JSON string representation of the object
print(EmailSent.to_json())

# convert the object into a dict
email_sent_dict = email_sent_instance.to_dict()
# create an instance of EmailSent from a dict
email_sent_from_dict = EmailSent.from_dict(email_sent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


