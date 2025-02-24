# ListSubscriptionPlansResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** |  | [optional] 
**subscriptions** | [**List[SubscriptionPlan]**](SubscriptionPlan.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_subscription_plans_response import ListSubscriptionPlansResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSubscriptionPlansResponse from a JSON string
list_subscription_plans_response_instance = ListSubscriptionPlansResponse.from_json(json)
# print the JSON string representation of the object
print(ListSubscriptionPlansResponse.to_json())

# convert the object into a dict
list_subscription_plans_response_dict = list_subscription_plans_response_instance.to_dict()
# create an instance of ListSubscriptionPlansResponse from a dict
list_subscription_plans_response_from_dict = ListSubscriptionPlansResponse.from_dict(list_subscription_plans_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


