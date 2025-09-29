# OrderItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_per_unit** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**description** | **str** |  | [optional] 
**discount** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**id** | **str** |  | [optional] 
**item_type** | **str** | The order item type. Valid values are: PRODUCT, SHIPPING, TAX, SERVICE, PRODUCT, UPSELL, FINANCE_CHARGE, DISCOUNT, PROGRAM, SUBSCRIPTION, DISCOUNT_FREE_TRIAL, DISCOUNT_ORDER_TOTAL, DISCOUNT_PRODUCT, DISCOUNT_PRODUCT_CATEGORY, DISCOUNT_SHIPPING, TIP, OTHER. | [optional] 
**name** | **str** |  | [optional] 
**notes** | **str** |  | [optional] 
**price_per_unit** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**product** | [**OrderItemProduct**](OrderItemProduct.md) |  | [optional] 
**quantity** | **int** |  | [optional] 
**special** | [**Discount**](Discount.md) |  | [optional] 
**subscription_id** | **str** | If the order item is a subscription type, this refers to the subscription id that generated the order. | [optional] 
**subscription_plan** | [**SubscriptionPlan**](SubscriptionPlan.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.order_item import OrderItem

# TODO update the JSON string below
json = "{}"
# create an instance of OrderItem from a JSON string
order_item_instance = OrderItem.from_json(json)
# print the JSON string representation of the object
print(OrderItem.to_json())

# convert the object into a dict
order_item_dict = order_item_instance.to_dict()
# create an instance of OrderItem from a dict
order_item_from_dict = OrderItem.from_dict(order_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


