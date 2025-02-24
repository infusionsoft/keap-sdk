# UpdateTagCategoryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.update_tag_category_response import UpdateTagCategoryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateTagCategoryResponse from a JSON string
update_tag_category_response_instance = UpdateTagCategoryResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateTagCategoryResponse.to_json())

# convert the object into a dict
update_tag_category_response_dict = update_tag_category_response_instance.to_dict()
# create an instance of UpdateTagCategoryResponse from a dict
update_tag_category_response_from_dict = UpdateTagCategoryResponse.from_dict(update_tag_category_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


