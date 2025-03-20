# FreeTrialDiscount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteria** | [**List[DiscountCriteria]**](DiscountCriteria.md) |  | [optional] 
**description** | **str** |  | [optional] 
**discount_id** | **str** |  | [optional] 
**free_trial_days** | **int** |  | [optional] 
**hide_price** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**subscription_plan_id** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.free_trial_discount import FreeTrialDiscount

# TODO update the JSON string below
json = "{}"
# create an instance of FreeTrialDiscount from a JSON string
free_trial_discount_instance = FreeTrialDiscount.from_json(json)
# print the JSON string representation of the object
print(FreeTrialDiscount.to_json())

# convert the object into a dict
free_trial_discount_dict = free_trial_discount_instance.to_dict()
# create an instance of FreeTrialDiscount from a dict
free_trial_discount_from_dict = FreeTrialDiscount.from_dict(free_trial_discount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


