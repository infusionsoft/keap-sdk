# CreateSubscriptionPlanRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Whether the subscription plan is active. | [optional] 
**allow_prorating** | **bool** | Allow prorating of the subscription plan. | [optional] 
**cycle_type** | **str** | The cycle type of the subscription plan. | 
**display_order_index** | **int** | The order that this plan will be displayed to the user. | [optional] 
**frequency** | **int** | The frequency of the subscription plan. | [optional] 
**plan_price** | **float** | The price of the subscription plan in the smallest currency unit. | 
**total_cycles** | **int** | How many cycles the subscription plan will have.  0 means infinite. | [optional] 

## Example

```python
from keap_core_v2_client.models.create_subscription_plan_request import CreateSubscriptionPlanRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateSubscriptionPlanRequest from a JSON string
create_subscription_plan_request_instance = CreateSubscriptionPlanRequest.from_json(json)
# print the JSON string representation of the object
print(CreateSubscriptionPlanRequest.to_json())

# convert the object into a dict
create_subscription_plan_request_dict = create_subscription_plan_request_instance.to_dict()
# create an instance of CreateSubscriptionPlanRequest from a dict
create_subscription_plan_request_from_dict = CreateSubscriptionPlanRequest.from_dict(create_subscription_plan_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


