# AssignedProducts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_category_id** | **str** | The product category ID | [optional] 
**product_ids** | **List[str]** | Assigned product IDs | [optional] 

## Example

```python
from keap_core_v2_client.models.assigned_products import AssignedProducts

# TODO update the JSON string below
json = "{}"
# create an instance of AssignedProducts from a JSON string
assigned_products_instance = AssignedProducts.from_json(json)
# print the JSON string representation of the object
print(AssignedProducts.to_json())

# convert the object into a dict
assigned_products_dict = assigned_products_instance.to_dict()
# create an instance of AssignedProducts from a dict
assigned_products_from_dict = AssignedProducts.from_dict(assigned_products_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


