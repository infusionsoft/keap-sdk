# UpdateOrderTotalDiscountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the discount | [optional] 
**description** | **str** | Description of the discount | [optional] 
**criteria** | [**List[DiscountCriteria]**](DiscountCriteria.md) | List of criteria that must be met for this discount to apply | [optional] 
**apply_to_commissions** | **bool** | Whether to apply this discount to commission calculations | [optional] 
**discount_type** | **str** | Type of discount: AMOUNT (fixed amount) or PERCENT (percentage) | [optional] 
**discount_value** | **float** | Value of the discount (amount or percentage depending on discount_type) | [optional] 
**discount_strategy** | **str** | Strategy for applying discount: GROSS (before tax) or NET (after tax) | [optional] 

## Example

```python
from keap_core_v2_client.models.update_order_total_discount_request import UpdateOrderTotalDiscountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrderTotalDiscountRequest from a JSON string
update_order_total_discount_request_instance = UpdateOrderTotalDiscountRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrderTotalDiscountRequest.to_json())

# convert the object into a dict
update_order_total_discount_request_dict = update_order_total_discount_request_instance.to_dict()
# create an instance of UpdateOrderTotalDiscountRequest from a dict
update_order_total_discount_request_from_dict = UpdateOrderTotalDiscountRequest.from_dict(update_order_total_discount_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


