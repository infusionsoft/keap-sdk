# UpdateProductCategoryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The category name | [optional] 
**display_order_index** | **int** | Display order of the category | [optional] 
**parent_category_id** | **str** | Parent category ID for subcategories | [optional] 

## Example

```python
from keap_core_v2_client.models.update_product_category_request import UpdateProductCategoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateProductCategoryRequest from a JSON string
update_product_category_request_instance = UpdateProductCategoryRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateProductCategoryRequest.to_json())

# convert the object into a dict
update_product_category_request_dict = update_product_category_request_instance.to_dict()
# create an instance of UpdateProductCategoryRequest from a dict
update_product_category_request_from_dict = UpdateProductCategoryRequest.from_dict(update_product_category_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


