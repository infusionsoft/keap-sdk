# CreateOrderItemRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_per_unit** | **float** | The cost per unit. Must be greater than or equal to 0. | [optional] 
**description** | **str** | The description of the order item. Must not be whitespace. | [optional] 
**item_type** | **str** | The type of this order item. For now only [PRODUCT] is supported. Will default to [PRODUCT] if omitted. | [optional] 
**name** | **str** | The name of the order item. Must not be whitespace. If not specified, the product name will be used. | [optional] 
**notes** | **str** | The notes for the order item. Must not be whitespace. | [optional] 
**price_per_unit** | **float** | The price per unit. Must be greater than or equal to 0. If not specified, the product price will be used. | [optional] 
**product_id** | **str** | The id of the product to be added to the order. Must be a valid product id. | 
**quantity** | **int** | The quantity. Must be greater than or equal to 1. | 

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


