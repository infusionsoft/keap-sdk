# DiscountCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**criteria_id** | **str** |  | [optional] 
**operator** | **str** |  | [optional] 
**plan_id** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 
**product_quantity_max** | **int** |  | [optional] 
**product_quantity_min** | **int** |  | [optional] 
**range_end_time** | **str** |  | [optional] 
**range_start_time** | **str** |  | [optional] 
**subscription_quantity** | **int** |  | [optional] 
**total_amount** | **float** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.discount_criteria import DiscountCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of DiscountCriteria from a JSON string
discount_criteria_instance = DiscountCriteria.from_json(json)
# print the JSON string representation of the object
print(DiscountCriteria.to_json())

# convert the object into a dict
discount_criteria_dict = discount_criteria_instance.to_dict()
# create an instance of DiscountCriteria from a dict
discount_criteria_from_dict = DiscountCriteria.from_dict(discount_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


