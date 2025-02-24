# CreateOrderTotalDiscountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply_to_commissions** | **bool** |  | [optional] 
**criteria** | [**List[DiscountCriteria]**](DiscountCriteria.md) |  | [optional] 
**description** | **str** |  | [optional] 
**discount_strategy** | **str** |  | [optional] 
**discount_type** | **str** |  | 
**discount_value** | **float** |  | 
**name** | **str** |  | 

## Example

```python
from keap_core_v2_client.models.create_order_total_discount_request import CreateOrderTotalDiscountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrderTotalDiscountRequest from a JSON string
create_order_total_discount_request_instance = CreateOrderTotalDiscountRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrderTotalDiscountRequest.to_json())

# convert the object into a dict
create_order_total_discount_request_dict = create_order_total_discount_request_instance.to_dict()
# create an instance of CreateOrderTotalDiscountRequest from a dict
create_order_total_discount_request_from_dict = CreateOrderTotalDiscountRequest.from_dict(create_order_total_discount_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


