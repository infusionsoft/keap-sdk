# OrderItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the order item | [optional] 
**name** | **str** | Name of the item | [optional] 
**description** | **str** | Item description | [optional] 
**notes** | **str** | Additional notes | [optional] 
**quantity** | **int** | Quantity ordered | [optional] 
**discount** | [**CurrencyValue**](CurrencyValue.md) | If the order item is a discount type, this is the amount of the discount. | [optional] 
**special** | [**Discount**](Discount.md) | If the line item is a discount type, the details about the discount. | [optional] 
**product** | [**OrderItemProduct**](OrderItemProduct.md) | Product details | [optional] 
**subscription_id** | **str** | If the order item is a subscription type, this refers to the subscription id that generated the order. | [optional] 
**item_type** | **str** | The type of order item. | [optional] 
**cost_per_unit** | [**CurrencyValue**](CurrencyValue.md) | Cost per unit | [optional] 
**price_per_unit** | [**CurrencyValue**](CurrencyValue.md) | Price per unit charged to customer | [optional] 
**subscription_plan** | [**SubscriptionPlan**](SubscriptionPlan.md) | If the order item is a subscription type, the details of the subscription plan. | [optional] 

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


