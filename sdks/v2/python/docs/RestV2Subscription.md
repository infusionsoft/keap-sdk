# RestV2Subscription


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription_active** | **bool** |  | [optional] 
**subscription_cycles_completed** | **int** |  | [optional] 
**subscription_end_date** | **str** |  | [optional] 
**subscription_id** | **str** |  | [optional] 
**subscription_next_bill_date** | **str** |  | [optional] 
**subscription_start_date** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.rest_v2_subscription import RestV2Subscription

# TODO update the JSON string below
json = "{}"
# create an instance of RestV2Subscription from a JSON string
rest_v2_subscription_instance = RestV2Subscription.from_json(json)
# print the JSON string representation of the object
print(RestV2Subscription.to_json())

# convert the object into a dict
rest_v2_subscription_dict = rest_v2_subscription_instance.to_dict()
# create an instance of RestV2Subscription from a dict
rest_v2_subscription_from_dict = RestV2Subscription.from_dict(rest_v2_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


