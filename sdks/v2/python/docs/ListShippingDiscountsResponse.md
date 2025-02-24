# ListShippingDiscountsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** |  | [optional] 
**shipping_discounts** | [**List[ShippingDiscount]**](ShippingDiscount.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_shipping_discounts_response import ListShippingDiscountsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListShippingDiscountsResponse from a JSON string
list_shipping_discounts_response_instance = ListShippingDiscountsResponse.from_json(json)
# print the JSON string representation of the object
print(ListShippingDiscountsResponse.to_json())

# convert the object into a dict
list_shipping_discounts_response_dict = list_shipping_discounts_response_instance.to_dict()
# create an instance of ListShippingDiscountsResponse from a dict
list_shipping_discounts_response_from_dict = ListShippingDiscountsResponse.from_dict(list_shipping_discounts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


