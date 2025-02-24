# OrderItemTax


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** |  | [optional] 
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**order_item_id** | **int** |  | [optional] 
**rate** | **float** |  | [optional] 
**tax_template_id** | **int** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.order_item_tax import OrderItemTax

# TODO update the JSON string below
json = "{}"
# create an instance of OrderItemTax from a JSON string
order_item_tax_instance = OrderItemTax.from_json(json)
# print the JSON string representation of the object
print(OrderItemTax.to_json())

# convert the object into a dict
order_item_tax_dict = order_item_tax_instance.to_dict()
# create an instance of OrderItemTax from a dict
order_item_tax_from_dict = OrderItemTax.from_dict(order_item_tax_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


