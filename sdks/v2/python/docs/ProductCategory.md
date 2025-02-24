# ProductCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_order_index** | **int** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**parent_category_id** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.product_category import ProductCategory

# TODO update the JSON string below
json = "{}"
# create an instance of ProductCategory from a JSON string
product_category_instance = ProductCategory.from_json(json)
# print the JSON string representation of the object
print(ProductCategory.to_json())

# convert the object into a dict
product_category_dict = product_category_instance.to_dict()
# create an instance of ProductCategory from a dict
product_category_from_dict = ProductCategory.from_dict(product_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


