# Tag


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
from keap_core_v2_client.models.tag import Tag

# TODO update the JSON string below
json = "{}"
# create an instance of Tag from a JSON string
tag_instance = Tag.from_json(json)
# print the JSON string representation of the object
print(Tag.to_json())

# convert the object into a dict
tag_dict = tag_instance.to_dict()
# create an instance of Tag from a dict
tag_from_dict = Tag.from_dict(tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


