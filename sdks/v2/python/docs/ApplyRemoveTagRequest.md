# ApplyRemoveTagRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_ids** | **List[str]** |  | 

## Example

```python
from keap_core_v2_client.models.apply_remove_tag_request import ApplyRemoveTagRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApplyRemoveTagRequest from a JSON string
apply_remove_tag_request_instance = ApplyRemoveTagRequest.from_json(json)
# print the JSON string representation of the object
print(ApplyRemoveTagRequest.to_json())

# convert the object into a dict
apply_remove_tag_request_dict = apply_remove_tag_request_instance.to_dict()
# create an instance of ApplyRemoveTagRequest from a dict
apply_remove_tag_request_from_dict = ApplyRemoveTagRequest.from_dict(apply_remove_tag_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


