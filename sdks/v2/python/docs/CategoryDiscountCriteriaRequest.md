# CategoryDiscountCriteriaRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of criteria: DATE_RANGE or PROMO_CODE | [optional] 
**code** | **str** | Promotional code for PROMO_CODE criteria | [optional] 
**range_start_time** | **datetime** | Start date/time for DATE_RANGE criteria (ISO-8601 format) | [optional] 
**range_end_time** | **datetime** | End date/time for DATE_RANGE criteria (ISO-8601 format) | [optional] 

## Example

```python
from keap_core_v2_client.models.category_discount_criteria_request import CategoryDiscountCriteriaRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryDiscountCriteriaRequest from a JSON string
category_discount_criteria_request_instance = CategoryDiscountCriteriaRequest.from_json(json)
# print the JSON string representation of the object
print(CategoryDiscountCriteriaRequest.to_json())

# convert the object into a dict
category_discount_criteria_request_dict = category_discount_criteria_request_instance.to_dict()
# create an instance of CategoryDiscountCriteriaRequest from a dict
category_discount_criteria_request_from_dict = CategoryDiscountCriteriaRequest.from_dict(category_discount_criteria_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


