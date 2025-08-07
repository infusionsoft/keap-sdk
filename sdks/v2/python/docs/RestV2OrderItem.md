# RestV2OrderItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_per_unit** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**description** | **str** |  | [optional] 
**discount** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**id** | **str** |  | [optional] 
**item_type** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**notes** | **str** |  | [optional] 
**order_item_taxes** | [**List[OrderItemTax]**](OrderItemTax.md) |  | [optional] 
**price_per_unit** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**product** | [**OrderItemProduct**](OrderItemProduct.md) |  | [optional] 
**quantity** | **int** |  | [optional] 
**special** | [**Discount**](Discount.md) |  | [optional] 
**subscription** | [**RestV2Subscription**](RestV2Subscription.md) |  | [optional] 
**subscription_id** | **str** |  | [optional] 
**subscription_plan** | [**RestSubscriptionPlan**](RestSubscriptionPlan.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.rest_v2_order_item import RestV2OrderItem

# TODO update the JSON string below
json = "{}"
# create an instance of RestV2OrderItem from a JSON string
rest_v2_order_item_instance = RestV2OrderItem.from_json(json)
# print the JSON string representation of the object
print(RestV2OrderItem.to_json())

# convert the object into a dict
rest_v2_order_item_dict = rest_v2_order_item_instance.to_dict()
# create an instance of RestV2OrderItem from a dict
rest_v2_order_item_from_dict = RestV2OrderItem.from_dict(rest_v2_order_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


