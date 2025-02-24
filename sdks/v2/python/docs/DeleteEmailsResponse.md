# DeleteEmailsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | **Dict[str, str]** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.delete_emails_response import DeleteEmailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteEmailsResponse from a JSON string
delete_emails_response_instance = DeleteEmailsResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteEmailsResponse.to_json())

# convert the object into a dict
delete_emails_response_dict = delete_emails_response_instance.to_dict()
# create an instance of DeleteEmailsResponse from a dict
delete_emails_response_from_dict = DeleteEmailsResponse.from_dict(delete_emails_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


