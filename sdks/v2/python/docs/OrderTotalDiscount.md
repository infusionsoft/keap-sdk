# OrderTotalDiscount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply_to_commissions** | **bool** |  | [optional] 
**criteria** | [**List[DiscountCriteria]**](DiscountCriteria.md) |  | [optional] 
**description** | **str** |  | [optional] 
**discount_id** | **str** |  | [optional] 
**discount_strategy** | **str** |  | [optional] 
**discount_type** | **str** |  | [optional] 
**discount_value** | **float** |  | [optional] 
**name** | **str** |  | [optional] 

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


