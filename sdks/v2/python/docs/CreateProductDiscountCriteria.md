# CreateProductDiscountCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of criteria: DATE_RANGE, PROMO_CODE, PRODUCT, SUBSCRIPTION_PLAN, or ORDER_TOTAL | [optional] 
**code** | **str** | Promotional code for PROMO_CODE criteria | [optional] 
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
from keap_core_v2_client.models.create_product_discount_criteria import CreateProductDiscountCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of CreateProductDiscountCriteria from a JSON string
create_product_discount_criteria_instance = CreateProductDiscountCriteria.from_json(json)
# print the JSON string representation of the object
print(CreateProductDiscountCriteria.to_json())

# convert the object into a dict
create_product_discount_criteria_dict = create_product_discount_criteria_instance.to_dict()
# create an instance of CreateProductDiscountCriteria from a dict
create_product_discount_criteria_from_dict = CreateProductDiscountCriteria.from_dict(create_product_discount_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


