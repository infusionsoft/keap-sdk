# CreateProductCategoryRequest

productCategory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The category name | 
**display_order_index** | **int** | Display order of the category | [optional] 
**parent_category_id** | **str** | Parent category ID for subcategories | [optional] 

## Example

```python
from keap_core_v2_client.models.create_product_category_request import CreateProductCategoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateProductCategoryRequest from a JSON string
create_product_category_request_instance = CreateProductCategoryRequest.from_json(json)
# print the JSON string representation of the object
print(CreateProductCategoryRequest.to_json())

# convert the object into a dict
create_product_category_request_dict = create_product_category_request_instance.to_dict()
# create an instance of CreateProductCategoryRequest from a dict
create_product_category_request_from_dict = CreateProductCategoryRequest.from_dict(create_product_category_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


