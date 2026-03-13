# SubscriptionPlanList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The subscription plan id | [optional] 
**active** | **bool** | If the subscription plan should be active/available for purchase | [optional] 
**prorate** | **bool** | If the subscription plan should allow prorating | [optional] 
**billing_cycle** | **str** | How frequent to bill. | [optional] 
**billing_frequency** | **int** | How many times per billing cycle to bill | [optional] 
**number_of_cycles** | **int** | How many billing cycles to bill. Optional field i.e. can be no value or 0. | [optional] 
**plan_price** | [**CurrencyValueList**](CurrencyValueList.md) | The price of the subscription plan | [optional] 
**order_index** | **int** | Determines the order in which the plan will be displayed | [optional] 

## Example

```python
from keap_core_v2_client.models.subscription_plan_list import SubscriptionPlanList

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionPlanList from a JSON string
subscription_plan_list_instance = SubscriptionPlanList.from_json(json)
# print the JSON string representation of the object
print(SubscriptionPlanList.to_json())

# convert the object into a dict
subscription_plan_list_dict = subscription_plan_list_instance.to_dict()
# create an instance of SubscriptionPlanList from a dict
subscription_plan_list_from_dict = SubscriptionPlanList.from_dict(subscription_plan_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


