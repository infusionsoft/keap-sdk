# OrderTotalDiscount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for this order total discount | [optional] 
**name** | **str** | Name of the discount | [optional] 
**description** | **str** | Description of the discount | [optional] 
**criteria** | [**List[DiscountCriteria]**](DiscountCriteria.md) | List of criteria that must be met for this discount to apply | [optional] 
**apply_to_commissions** | **bool** | Whether to apply this discount to commission calculations | [optional] 
**discount_type** | **str** | Type of discount: AMOUNT (fixed amount) or PERCENT (percentage) | [optional] 
**discount_value** | **float** | Value of the discount (amount or percentage depending on discount_type) | [optional] 
**discount_strategy** | **str** | Strategy for applying discount: GROSS (before tax) or NET (after tax) | [optional] 

## Example

```python
from keap_core_v2_client.models.order_total_discount import OrderTotalDiscount

# TODO update the JSON string below
json = "{}"
# create an instance of OrderTotalDiscount from a JSON string
order_total_discount_instance = OrderTotalDiscount.from_json(json)
# print the JSON string representation of the object
print(OrderTotalDiscount.to_json())

# convert the object into a dict
order_total_discount_dict = order_total_discount_instance.to_dict()
# create an instance of OrderTotalDiscount from a dict
order_total_discount_from_dict = OrderTotalDiscount.from_dict(order_total_discount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


