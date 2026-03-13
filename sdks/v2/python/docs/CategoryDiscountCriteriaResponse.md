# CategoryDiscountCriteriaResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of criteria: DATE_RANGE or PROMO_CODE | [optional] 
**code** | **str** | Promotional code for PROMO_CODE criteria | [optional] 
**criteria_id** | **str** | Unique identifier for this criteria | [optional] 
**range_start_time** | **datetime** | Start date/time for DATE_RANGE criteria (ISO-8601 format) | [optional] 
**range_end_time** | **datetime** | End date/time for DATE_RANGE criteria (ISO-8601 format) | [optional] 

## Example

```python
from keap_core_v2_client.models.category_discount_criteria_response import CategoryDiscountCriteriaResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryDiscountCriteriaResponse from a JSON string
category_discount_criteria_response_instance = CategoryDiscountCriteriaResponse.from_json(json)
# print the JSON string representation of the object
print(CategoryDiscountCriteriaResponse.to_json())

# convert the object into a dict
category_discount_criteria_response_dict = category_discount_criteria_response_instance.to_dict()
# create an instance of CategoryDiscountCriteriaResponse from a dict
category_discount_criteria_response_from_dict = CategoryDiscountCriteriaResponse.from_dict(category_discount_criteria_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


