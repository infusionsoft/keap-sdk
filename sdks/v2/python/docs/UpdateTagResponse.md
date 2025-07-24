# UpdateTagResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | [**CategoryReference**](CategoryReference.md) |  | [optional] 
**create_time** | **str** | The time this tag was created, in ISO 8601 format | [optional] 
**description** | **str** | A description of this tag | [optional] 
**id** | **str** | The unique identifier for this tag | [optional] 
**name** | **str** | The unique name of this tag | [optional] 
**update_time** | **str** | The time this tag was last updated, in ISO 8601 format | [optional] 

## Example

```python
from keap_core_v2_client.models.update_tag_response import UpdateTagResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTagResponse from a JSON string
update_tag_response_instance = UpdateTagResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateTagResponse.to_json())

# convert the object into a dict
update_tag_response_dict = update_tag_response_instance.to_dict()
# create an instance of UpdateTagResponse from a dict
update_tag_response_from_dict = UpdateTagResponse.from_dict(update_tag_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


