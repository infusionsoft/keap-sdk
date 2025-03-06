# SubscriptionPlanInterest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discount_percent** | **int** | The percent to discount the product. Percent represented in a whole number, for example 10 is 10% | [optional] 
**id** | **str** | The product interest ID | [optional] 
**price** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**quantity** | **int** | The quantity of product. | [optional] 
**subscription_plan_id** | **str** | The ID of the Subscription Plan | [optional] 

## Example

```python
from keap_core_v2_client.models.subscription_plan_interest import SubscriptionPlanInterest

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionPlanInterest from a JSON string
subscription_plan_interest_instance = SubscriptionPlanInterest.from_json(json)
# print the JSON string representation of the object
print(SubscriptionPlanInterest.to_json())

# convert the object into a dict
subscription_plan_interest_dict = subscription_plan_interest_instance.to_dict()
# create an instance of SubscriptionPlanInterest from a dict
subscription_plan_interest_from_dict = SubscriptionPlanInterest.from_dict(subscription_plan_interest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


