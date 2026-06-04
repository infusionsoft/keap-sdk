# SubscriptionPlan


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Subscription plan ID | [optional] 
**frequency** | **int** | Interval at which a customer receives a product or service as part of a subscription plan. | [optional] 
**active** | **bool** | If the subscription plan is active or not. | [optional] 
**subscription_plan_name** | **str** | Plan name | [optional] 
**cycle_type** | **str** | The cycle type of the subscription plan. | [optional] 
**total_cycles** | **int** | Total number of cycles the plan will run before ending. Value of 0 indicates plan will never end. | [optional] 
**plan_price** | [**CurrencyValue**](CurrencyValue.md) | Price of the plan | [optional] 
**display_order_index** | **int** | The order index where this plan will be displayed on a page against other plans. Smaller number indicates plan will be displayed higher in the list. | [optional] 

## Example

```python
from keap_core_v2_client.models.subscription_plan import SubscriptionPlan

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionPlan from a JSON string
subscription_plan_instance = SubscriptionPlan.from_json(json)
# print the JSON string representation of the object
print(SubscriptionPlan.to_json())

# convert the object into a dict
subscription_plan_dict = subscription_plan_instance.to_dict()
# create an instance of SubscriptionPlan from a dict
subscription_plan_from_dict = SubscriptionPlan.from_dict(subscription_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


