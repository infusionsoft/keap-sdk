# DeleteEmailsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_ids** | **List[str]** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.delete_emails_request import DeleteEmailsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteEmailsRequest from a JSON string
delete_emails_request_instance = DeleteEmailsRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteEmailsRequest.to_json())

# convert the object into a dict
delete_emails_request_dict = delete_emails_request_instance.to_dict()
# create an instance of DeleteEmailsRequest from a dict
delete_emails_request_from_dict = DeleteEmailsRequest.from_dict(delete_emails_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


