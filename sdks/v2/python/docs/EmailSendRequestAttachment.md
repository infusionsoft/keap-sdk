# EmailSendRequestAttachment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_data** | **str** | The content of the attachment, encoded in Base64 | [optional] 
**file_name** | **str** | The filename of the attached file, including extension | [optional] 

## Example

```python
from keap_core_v2_client.models.email_send_request_attachment import EmailSendRequestAttachment

# TODO update the JSON string below
json = "{}"
# create an instance of EmailSendRequestAttachment from a JSON string
email_send_request_attachment_instance = EmailSendRequestAttachment.from_json(json)
# print the JSON string representation of the object
print(EmailSendRequestAttachment.to_json())

# convert the object into a dict
email_send_request_attachment_dict = email_send_request_attachment_instance.to_dict()
# create an instance of EmailSendRequestAttachment from a dict
email_send_request_attachment_from_dict = EmailSendRequestAttachment.from_dict(email_send_request_attachment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


