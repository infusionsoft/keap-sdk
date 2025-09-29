# OrderItemProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**shippable** | **bool** |  | [optional] 
**sku** | **str** |  | [optional] 
**taxable** | **bool** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.order_item_product import OrderItemProduct

# TODO update the JSON string below
json = "{}"
# create an instance of OrderItemProduct from a JSON string
order_item_product_instance = OrderItemProduct.from_json(json)
# print the JSON string representation of the object
print(OrderItemProduct.to_json())

# convert the object into a dict
order_item_product_dict = order_item_product_instance.to_dict()
# create an instance of OrderItemProduct from a dict
order_item_product_from_dict = OrderItemProduct.from_dict(order_item_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


