# CreateFreeTrialDiscountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteria** | [**List[DiscountCriteria]**](DiscountCriteria.md) |  | [optional] 
**description** | **str** |  | [optional] 
**free_trial_days** | **int** | The number of free trial days. Must be a positive number. Defaults to 0. | [optional] 
**hide_price** | **bool** |  | [optional] 
**name** | **str** |  | 
**subscription_plan_id** | **str** |  | 

## Example

```python
from keap_core_v2_client.models.create_free_trial_discount_request import CreateFreeTrialDiscountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateFreeTrialDiscountRequest from a JSON string
create_free_trial_discount_request_instance = CreateFreeTrialDiscountRequest.from_json(json)
# print the JSON string representation of the object
print(CreateFreeTrialDiscountRequest.to_json())

# convert the object into a dict
create_free_trial_discount_request_dict = create_free_trial_discount_request_instance.to_dict()
# create an instance of CreateFreeTrialDiscountRequest from a dict
create_free_trial_discount_request_from_dict = CreateFreeTrialDiscountRequest.from_dict(create_free_trial_discount_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


