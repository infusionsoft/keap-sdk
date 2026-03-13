# CreateCategoryDiscountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the discount | 
**description** | **str** | Description of the discount | [optional] 
**criteria** | [**List[CategoryDiscountCriteriaRequest]**](CategoryDiscountCriteriaRequest.md) | List of criteria that must be met for this discount to apply | [optional] 
**apply_to_commissions** | **bool** | Whether to apply this discount to commission calculations | 
**discount_percent** | **float** | Percentage discount to apply. Must be greater than or equal to 0. | 
**product_category_ids** | **List[str]** | List of product category IDs this discount applies to | 

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


