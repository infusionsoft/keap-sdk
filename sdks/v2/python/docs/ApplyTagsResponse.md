# ApplyTagsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | **Dict[str, str]** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.apply_tags_response import ApplyTagsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApplyTagsResponse from a JSON string
apply_tags_response_instance = ApplyTagsResponse.from_json(json)
# print the JSON string representation of the object
print(ApplyTagsResponse.to_json())

# convert the object into a dict
apply_tags_response_dict = apply_tags_response_instance.to_dict()
# create an instance of ApplyTagsResponse from a dict
apply_tags_response_from_dict = ApplyTagsResponse.from_dict(apply_tags_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


