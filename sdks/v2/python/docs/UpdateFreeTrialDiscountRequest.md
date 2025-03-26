# UpdateFreeTrialDiscountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteria** | [**List[DiscountCriteria]**](DiscountCriteria.md) |  | [optional] 
**description** | **str** |  | [optional] 
**free_trial_days** | **int** |  | [optional] 
**hide_price** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**subscription_plan_id** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.update_free_trial_discount_request import UpdateFreeTrialDiscountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateFreeTrialDiscountRequest from a JSON string
update_free_trial_discount_request_instance = UpdateFreeTrialDiscountRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateFreeTrialDiscountRequest.to_json())

# convert the object into a dict
update_free_trial_discount_request_dict = update_free_trial_discount_request_instance.to_dict()
# create an instance of UpdateFreeTrialDiscountRequest from a dict
update_free_trial_discount_request_from_dict = UpdateFreeTrialDiscountRequest.from_dict(update_free_trial_discount_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


