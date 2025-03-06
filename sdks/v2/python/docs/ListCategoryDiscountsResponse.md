# ListCategoryDiscountsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_discounts** | [**List[CategoryDiscount]**](CategoryDiscount.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_category_discounts_response import ListCategoryDiscountsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCategoryDiscountsResponse from a JSON string
list_category_discounts_response_instance = ListCategoryDiscountsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCategoryDiscountsResponse.to_json())

# convert the object into a dict
list_category_discounts_response_dict = list_category_discounts_response_instance.to_dict()
# create an instance of ListCategoryDiscountsResponse from a dict
list_category_discounts_response_from_dict = ListCategoryDiscountsResponse.from_dict(list_category_discounts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


