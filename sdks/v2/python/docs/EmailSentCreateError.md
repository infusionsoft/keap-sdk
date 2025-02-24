# EmailSentCreateError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | [**CreateEmailSentRequest**](CreateEmailSentRequest.md) |  | [optional] 
**error_message** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.email_sent_create_error import EmailSentCreateError

# TODO update the JSON string below
json = "{}"
# create an instance of EmailSentCreateError from a JSON string
email_sent_create_error_instance = EmailSentCreateError.from_json(json)
# print the JSON string representation of the object
print(EmailSentCreateError.to_json())

# convert the object into a dict
email_sent_create_error_dict = email_sent_create_error_instance.to_dict()
# create an instance of EmailSentCreateError from a dict
email_sent_create_error_from_dict = EmailSentCreateError.from_dict(email_sent_create_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


