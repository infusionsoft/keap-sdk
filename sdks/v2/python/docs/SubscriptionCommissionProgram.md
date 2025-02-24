# SubscriptionCommissionProgram


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.subscription_commission_program import SubscriptionCommissionProgram

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionCommissionProgram from a JSON string
subscription_commission_program_instance = SubscriptionCommissionProgram.from_json(json)
# print the JSON string representation of the object
print(SubscriptionCommissionProgram.to_json())

# convert the object into a dict
subscription_commission_program_dict = subscription_commission_program_instance.to_dict()
# create an instance of SubscriptionCommissionProgram from a dict
subscription_commission_program_from_dict = SubscriptionCommissionProgram.from_dict(subscription_commission_program_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


