# ListOrderTotalDiscountsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discounts** | [**List[OrderTotalDiscount]**](OrderTotalDiscount.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_order_total_discounts_response import ListOrderTotalDiscountsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListOrderTotalDiscountsResponse from a JSON string
list_order_total_discounts_response_instance = ListOrderTotalDiscountsResponse.from_json(json)
# print the JSON string representation of the object
print(ListOrderTotalDiscountsResponse.to_json())

# convert the object into a dict
list_order_total_discounts_response_dict = list_order_total_discounts_response_instance.to_dict()
# create an instance of ListOrderTotalDiscountsResponse from a dict
list_order_total_discounts_response_from_dict = ListOrderTotalDiscountsResponse.from_dict(list_order_total_discounts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


