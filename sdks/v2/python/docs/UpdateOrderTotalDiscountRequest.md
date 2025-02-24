# UpdateOrderTotalDiscountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply_to_commissions** | **bool** |  | [optional] 
**criteria** | [**List[DiscountCriteria]**](DiscountCriteria.md) |  | [optional] 
**description** | **str** |  | [optional] 
**discount_strategy** | **str** |  | [optional] 
**discount_type** | **str** |  | [optional] 
**discount_value** | **float** |  | [optional] 
**name** | **str** |  | [optional] 

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


