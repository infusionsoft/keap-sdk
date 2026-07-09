# FreeTrialDiscountCriteriaResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of criteria: DATE_RANGE, PROMO_CODE, PRODUCT, SUBSCRIPTION_PLAN, or ORDER_TOTAL | [optional] 
**code** | **str** | Promotional code for PROMO_CODE criteria | [optional] 
**criteria_id** | **str** | Unique identifier for this criteria | [optional] 
**range_start_time** | **datetime** | Start date/time for DATE_RANGE criteria (ISO-8601 format) | [optional] 
**range_end_time** | **datetime** | End date/time for DATE_RANGE criteria (ISO-8601 format) | [optional] 
**product_id** | **str** | Product ID for PRODUCT criteria | [optional] 
**product_quantity_min** | **int** | Minimum product quantity for PRODUCT criteria | [optional] 
**product_quantity_max** | **int** | Maximum product quantity for PRODUCT criteria | [optional] 
**plan_id** | **str** | Subscription plan ID for SUBSCRIPTION_PLAN criteria | [optional] 
**subscription_quantity** | **int** | Subscription quantity for SUBSCRIPTION_PLAN criteria | [optional] 
**total_amount** | **float** | Total amount threshold for ORDER_TOTAL criteria | [optional] 
**operator** | **str** | Comparison operator for ORDER_TOTAL criteria: LESS_THAN or GREATER_THAN | [optional] 

## Example

```python
from keap_core_v2_client.models.free_trial_discount_criteria_response import FreeTrialDiscountCriteriaResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FreeTrialDiscountCriteriaResponse from a JSON string
free_trial_discount_criteria_response_instance = FreeTrialDiscountCriteriaResponse.from_json(json)
# print the JSON string representation of the object
print(FreeTrialDiscountCriteriaResponse.to_json())

# convert the object into a dict
free_trial_discount_criteria_response_dict = free_trial_discount_criteria_response_instance.to_dict()
# create an instance of FreeTrialDiscountCriteriaResponse from a dict
free_trial_discount_criteria_response_from_dict = FreeTrialDiscountCriteriaResponse.from_dict(free_trial_discount_criteria_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


