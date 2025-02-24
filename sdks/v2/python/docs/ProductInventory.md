# ProductInventory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_for_inventory_notifications** | **str** | The email address for notifications about inventory | [optional] 
**inventory_count** | **int** | The current inventory count for this product | [optional] 
**inventory_limit** | **int** | The inventory limit for this product | [optional] 
**out_of_stock_enabled** | **bool** | The flag to enable out of stock inventory | [optional] 

## Example

```python
from keap_core_v2_client.models.product_inventory import ProductInventory

# TODO update the JSON string below
json = "{}"
# create an instance of ProductInventory from a JSON string
product_inventory_instance = ProductInventory.from_json(json)
# print the JSON string representation of the object
print(ProductInventory.to_json())

# convert the object into a dict
product_inventory_dict = product_inventory_instance.to_dict()
# create an instance of ProductInventory from a dict
product_inventory_from_dict = ProductInventory.from_dict(product_inventory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


