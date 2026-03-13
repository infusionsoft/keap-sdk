# ProductInventoryDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventory_limit** | **int** | The inventory limit for this product. Must be greater than or equal to 0. | [optional] 
**inventory_count** | **int** | The current inventory count for this product. Must be greater than or equal to 0. This field is omitted in List responses. | [optional] 
**out_of_stock_enabled** | **bool** | The flag to enable out of stock inventory | [optional] 
**email_for_inventory_notifications** | **str** | The email address for notifications about inventory | [optional] 

## Example

```python
from keap_core_v2_client.models.product_inventory_detail import ProductInventoryDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ProductInventoryDetail from a JSON string
product_inventory_detail_instance = ProductInventoryDetail.from_json(json)
# print the JSON string representation of the object
print(ProductInventoryDetail.to_json())

# convert the object into a dict
product_inventory_detail_dict = product_inventory_detail_instance.to_dict()
# create an instance of ProductInventoryDetail from a dict
product_inventory_detail_from_dict = ProductInventoryDetail.from_dict(product_inventory_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


