# UpdateSubscriptionCommissionProgramRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dollar_amount** | **str** |  | [optional] 
**percentage** | **str** |  | [optional] 
**subscription_id** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.update_subscription_commission_program_request import UpdateSubscriptionCommissionProgramRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSubscriptionCommissionProgramRequest from a JSON string
update_subscription_commission_program_request_instance = UpdateSubscriptionCommissionProgramRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateSubscriptionCommissionProgramRequest.to_json())

# convert the object into a dict
update_subscription_commission_program_request_dict = update_subscription_commission_program_request_instance.to_dict()
# create an instance of UpdateSubscriptionCommissionProgramRequest from a dict
update_subscription_commission_program_request_from_dict = UpdateSubscriptionCommissionProgramRequest.from_dict(update_subscription_commission_program_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


