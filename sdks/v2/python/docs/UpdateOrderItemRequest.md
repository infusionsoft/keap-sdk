# UpdateOrderItemRequest

order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the order item. Must not be whitespace. | [optional] 
**description** | **str** | The description of the order item. Must not be whitespace. | [optional] 
**quantity** | **int** | The quantity. Must be greater than or equal to 1. | [optional] 
**notes** | **str** | The notes for the order item. Must not be whitespace. | [optional] 
**product_id** | **str** | The id of the product. Must be a valid product id. Used only for item_type PRODUCT or SUBSCRIPTION. | [optional] 
**subscription_plan_id** | **str** | The id of the subscription plan. Must be a valid subscription plan id. Used only for item_type SUBSCRIPTION. | [optional] 
**subscription_plan_description** | **str** | A short description of the subscription&#39;s schedule. Used only for item_type SUBSCRIPTION. Must not be whitespace. | [optional] 
**price_per_unit** | **float** | The price per unit. | [optional] 
**cost_per_unit** | **float** | The cost per unit. Used for item_type PRODUCT or SUBSCRIPTION. | [optional] 

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


