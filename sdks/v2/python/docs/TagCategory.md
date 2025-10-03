# TagCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time this tag category was created, in ISO 8601 format | [optional] 
**description** | **str** | A description of this tag category | [optional] 
**id** | **str** | The unique identifier for this tag category | [optional] 
**name** | **str** | The unique name of this tag category | [optional] 
**update_time** | **str** | The time this tag category was last updated, in ISO 8601 format | [optional] 

## Example

```python
from keap_core_v2_client.models.tag_category import TagCategory

# TODO update the JSON string below
json = "{}"
# create an instance of TagCategory from a JSON string
tag_category_instance = TagCategory.from_json(json)
# print the JSON string representation of the object
print(TagCategory.to_json())

# convert the object into a dict
tag_category_dict = tag_category_instance.to_dict()
# create an instance of TagCategory from a dict
tag_category_from_dict = TagCategory.from_dict(tag_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


