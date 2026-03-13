# OrderItemProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Product ID | [optional] 
**name** | **str** | Product name | [optional] 
**sku** | **str** | Stock keeping unit | [optional] 
**description** | **str** | Product description | [optional] 
**shippable** | **bool** | Whether product requires shipping | [optional] 
**taxable** | **bool** | Whether product is taxable | [optional] 

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


