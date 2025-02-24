# GetTagCategoryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.get_tag_category_response import GetTagCategoryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetTagCategoryResponse from a JSON string
get_tag_category_response_instance = GetTagCategoryResponse.from_json(json)
# print the JSON string representation of the object
print(GetTagCategoryResponse.to_json())

# convert the object into a dict
get_tag_category_response_dict = get_tag_category_response_instance.to_dict()
# create an instance of GetTagCategoryResponse from a dict
get_tag_category_response_from_dict = GetTagCategoryResponse.from_dict(get_tag_category_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


