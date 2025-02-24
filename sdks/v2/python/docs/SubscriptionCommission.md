# SubscriptionCommission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dollar_amount** | **float** |  | [optional] 
**name** | **str** |  | [optional] 
**percentage** | **float** |  | [optional] 
**plan_price** | **float** |  | [optional] 
**subscription_id** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.subscription_commission import SubscriptionCommission

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionCommission from a JSON string
subscription_commission_instance = SubscriptionCommission.from_json(json)
# print the JSON string representation of the object
print(SubscriptionCommission.to_json())

# convert the object into a dict
subscription_commission_dict = subscription_commission_instance.to_dict()
# create an instance of SubscriptionCommission from a dict
subscription_commission_from_dict = SubscriptionCommission.from_dict(subscription_commission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


