# ListTagCategoriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** |  | [optional] 
**tag_categories** | [**List[TagCategory]**](TagCategory.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_tag_categories_response import ListTagCategoriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTagCategoriesResponse from a JSON string
list_tag_categories_response_instance = ListTagCategoriesResponse.from_json(json)
# print the JSON string representation of the object
print(ListTagCategoriesResponse.to_json())

# convert the object into a dict
list_tag_categories_response_dict = list_tag_categories_response_instance.to_dict()
# create an instance of ListTagCategoriesResponse from a dict
list_tag_categories_response_from_dict = ListTagCategoriesResponse.from_dict(list_tag_categories_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


