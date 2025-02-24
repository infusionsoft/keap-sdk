# UpdateOrderItemRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charge_inventory** | **bool** | Determine if the order item has an impact on inventory. | [optional] 
**cost_per_unit** | **float** |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**note** | **str** |  | [optional] 
**price_per_unit** | **float** |  | [optional] 
**quantity** | **int** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.update_order_item_request import UpdateOrderItemRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrderItemRequest from a JSON string
update_order_item_request_instance = UpdateOrderItemRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrderItemRequest.to_json())

# convert the object into a dict
update_order_item_request_dict = update_order_item_request_instance.to_dict()
# create an instance of UpdateOrderItemRequest from a dict
update_order_item_request_from_dict = UpdateOrderItemRequest.from_dict(update_order_item_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


