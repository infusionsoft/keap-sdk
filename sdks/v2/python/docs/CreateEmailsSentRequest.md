# CreateEmailsSentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | [**List[CreateEmailSentRequest]**](CreateEmailSentRequest.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.create_emails_sent_request import CreateEmailsSentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateEmailsSentRequest from a JSON string
create_emails_sent_request_instance = CreateEmailsSentRequest.from_json(json)
# print the JSON string representation of the object
print(CreateEmailsSentRequest.to_json())

# convert the object into a dict
create_emails_sent_request_dict = create_emails_sent_request_instance.to_dict()
# create an instance of CreateEmailsSentRequest from a dict
create_emails_sent_request_from_dict = CreateEmailsSentRequest.from_dict(create_emails_sent_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


