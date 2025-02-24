# CreateUpdateTagRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | [**CategoryReference**](CategoryReference.md) |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.create_update_tag_request import CreateUpdateTagRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateUpdateTagRequest from a JSON string
create_update_tag_request_instance = CreateUpdateTagRequest.from_json(json)
# print the JSON string representation of the object
print(CreateUpdateTagRequest.to_json())

# convert the object into a dict
create_update_tag_request_dict = create_update_tag_request_instance.to_dict()
# create an instance of CreateUpdateTagRequest from a dict
create_update_tag_request_from_dict = CreateUpdateTagRequest.from_dict(create_update_tag_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


