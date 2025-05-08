# CreateCategoryDiscountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply_to_commissions** | **bool** |  | 
**criteria** | [**List[DiscountCriteria]**](DiscountCriteria.md) |  | [optional] 
**description** | **str** |  | [optional] 
**discount_percent** | **float** | The discount percent. Must be greater than or equal to 0. | 
**name** | **str** |  | 
**product_category_ids** | **List[str]** |  | 

## Example

```python
from keap_core_v2_client.models.create_category_discount_request import CreateCategoryDiscountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCategoryDiscountRequest from a JSON string
create_category_discount_request_instance = CreateCategoryDiscountRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCategoryDiscountRequest.to_json())

# convert the object into a dict
create_category_discount_request_dict = create_category_discount_request_instance.to_dict()
# create an instance of CreateCategoryDiscountRequest from a dict
create_category_discount_request_from_dict = CreateCategoryDiscountRequest.from_dict(create_category_discount_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


