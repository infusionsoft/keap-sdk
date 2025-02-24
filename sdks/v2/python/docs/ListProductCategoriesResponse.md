# ListProductCategoriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** |  | [optional] 
**product_categories** | [**List[ProductCategory]**](ProductCategory.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_product_categories_response import ListProductCategoriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListProductCategoriesResponse from a JSON string
list_product_categories_response_instance = ListProductCategoriesResponse.from_json(json)
# print the JSON string representation of the object
print(ListProductCategoriesResponse.to_json())

# convert the object into a dict
list_product_categories_response_dict = list_product_categories_response_instance.to_dict()
# create an instance of ListProductCategoriesResponse from a dict
list_product_categories_response_from_dict = ListProductCategoriesResponse.from_dict(list_product_categories_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


