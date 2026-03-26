# CreateOrderItemRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the order item. Must not be whitespace. If not specified, the product name will be used. | [optional] 
**description** | **str** | The description of the order item. Must not be whitespace. | [optional] 
**quantity** | **int** | The quantity. Must be greater than or equal to 1. | 
**notes** | **str** | The notes for the order item. Must not be whitespace. | [optional] 
**product_id** | **str** | The id of the product to be added to the order. Must be a valid product id. Required for item_type PRODUCT or SUBSCRIPTION. | [optional] 
**subscription_plan_id** | **str** | The id of the subscription plan to be added to the order. Must be a valid subscription plan id. Required only when the item_type is SUBSCRIPTION. | [optional] 
**subscription_plan_description** | **str** | A short description of the subscription&#39;s schedule. Used only for item_type SUBSCRIPTION. Must not be whitespace. | [optional] 
**item_type** | **str** | The type of this order item. Will default to [PRODUCT] if omitted. | [optional] [default to 'PRODUCT']
**price_per_unit** | **float** | The price per unit. For item_type PRODUCT or SUBSCRIPTION, if not specified, the product price will be used. | [optional] 
**cost_per_unit** | **float** | The cost per unit. Used only for item_type PRODUCT or SUBSCRIPTION. If not specified, the product cost will be used. | [optional] 

## Example

```python
from keap_core_v2_client.models.create_order_item_request import CreateOrderItemRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrderItemRequest from a JSON string
create_order_item_request_instance = CreateOrderItemRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrderItemRequest.to_json())

# convert the object into a dict
create_order_item_request_dict = create_order_item_request_instance.to_dict()
# create an instance of CreateOrderItemRequest from a dict
create_order_item_request_from_dict = CreateOrderItemRequest.from_dict(create_order_item_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


