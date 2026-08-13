# CreateCategoryDiscountCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of criteria: DATE_RANGE or PROMO_CODE | [optional] 
**code** | **str** | Promotional code for PROMO_CODE criteria | [optional] 
**range_start_time** | **datetime** | Start date/time for DATE_RANGE criteria (ISO-8601 format) | [optional] 
**range_end_time** | **datetime** | End date/time for DATE_RANGE criteria (ISO-8601 format) | [optional] 

## Example

```python
from keap_core_v2_client.models.create_category_discount_criteria import CreateCategoryDiscountCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCategoryDiscountCriteria from a JSON string
create_category_discount_criteria_instance = CreateCategoryDiscountCriteria.from_json(json)
# print the JSON string representation of the object
print(CreateCategoryDiscountCriteria.to_json())

# convert the object into a dict
create_category_discount_criteria_dict = create_category_discount_criteria_instance.to_dict()
# create an instance of CreateCategoryDiscountCriteria from a dict
create_category_discount_criteria_from_dict = CreateCategoryDiscountCriteria.from_dict(create_category_discount_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


