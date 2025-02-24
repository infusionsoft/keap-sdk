# EmailSendRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_field** | **str** | Email field of each Contact record to address the email to, such as &#39;Email&#39;, &#39;EmailAddress2&#39;, &#39;EmailAddress3&#39; or &#39;_CustomFieldName&#39;, defaulting to the contact&#39;s primary email | [optional] 
**attachments** | [**List[EmailSendRequestAttachment]**](EmailSendRequestAttachment.md) | Attachments to be sent with each copy of the email, maximum of 10 with size of 1MB each | [optional] 
**contacts** | **List[str]** | An array of Contact Ids to receive the email | 
**html_content** | **str** | The HTML-formatted content of the email, encoded in Base64 | [optional] 
**plain_content** | **str** | The plain-text content of the email, encoded in Base64 | [optional] 
**subject** | **str** | The subject line of the email | 
**user_id** | **str** | The infusionsoft user to send the email on behalf of | 

## Example

```python
from keap_core_v2_client.models.email_send_request import EmailSendRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EmailSendRequest from a JSON string
email_send_request_instance = EmailSendRequest.from_json(json)
# print the JSON string representation of the object
print(EmailSendRequest.to_json())

# convert the object into a dict
email_send_request_dict = email_send_request_instance.to_dict()
# create an instance of EmailSendRequest from a dict
email_send_request_from_dict = EmailSendRequest.from_dict(email_send_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


