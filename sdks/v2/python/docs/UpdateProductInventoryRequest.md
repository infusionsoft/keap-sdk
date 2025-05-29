# UpdateProductInventoryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quantity** | **int** | The amount to increment or decrement by. Must be greater than or equal to 0. | 
**type** | **str** | The direction to alter the quantity in | 

## Example

```python
from keap_core_v2_client.models.update_product_inventory_request import UpdateProductInventoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateProductInventoryRequest from a JSON string
update_product_inventory_request_instance = UpdateProductInventoryRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateProductInventoryRequest.to_json())

# convert the object into a dict
update_product_inventory_request_dict = update_product_inventory_request_instance.to_dict()
# create an instance of UpdateProductInventoryRequest from a dict
update_product_inventory_request_from_dict = UpdateProductInventoryRequest.from_dict(update_product_inventory_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


