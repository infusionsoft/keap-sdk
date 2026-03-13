# UpdateCategoryDiscountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the discount | [optional] 
**description** | **str** | Description of the discount | [optional] 
**criteria** | [**List[CategoryDiscountCriteriaRequest]**](CategoryDiscountCriteriaRequest.md) | List of criteria that must be met for this discount to apply | [optional] 
**apply_to_commissions** | **bool** | Whether to apply this discount to commission calculations | [optional] 
**discount_percent** | **float** | Percentage discount to apply. Must be greater than or equal to 0. | [optional] 
**product_category_ids** | **List[str]** | List of product category IDs this discount applies to | [optional] 

## Example

```python
from keap_core_v2_client.models.update_category_discount_request import UpdateCategoryDiscountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCategoryDiscountRequest from a JSON string
update_category_discount_request_instance = UpdateCategoryDiscountRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCategoryDiscountRequest.to_json())

# convert the object into a dict
update_category_discount_request_dict = update_category_discount_request_instance.to_dict()
# create an instance of UpdateCategoryDiscountRequest from a dict
update_category_discount_request_from_dict = UpdateCategoryDiscountRequest.from_dict(update_category_discount_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


