# ListProductDiscountsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discounts** | [**List[ProductDiscount]**](ProductDiscount.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_product_discounts_response import ListProductDiscountsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListProductDiscountsResponse from a JSON string
list_product_discounts_response_instance = ListProductDiscountsResponse.from_json(json)
# print the JSON string representation of the object
print(ListProductDiscountsResponse.to_json())

# convert the object into a dict
list_product_discounts_response_dict = list_product_discounts_response_instance.to_dict()
# create an instance of ListProductDiscountsResponse from a dict
list_product_discounts_response_from_dict = ListProductDiscountsResponse.from_dict(list_product_discounts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


