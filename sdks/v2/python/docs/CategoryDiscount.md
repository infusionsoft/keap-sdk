# CategoryDiscount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for this category discount | [optional] 
**name** | **str** | Name of the discount | [optional] 
**description** | **str** | Description of the discount | [optional] 
**criteria** | [**List[CategoryDiscountCriteriaResponse]**](CategoryDiscountCriteriaResponse.md) | List of criteria that must be met for this discount to apply | [optional] 
**discount_percent** | **float** | Percentage discount to apply (0-100) | [optional] 
**apply_to_commissions** | **bool** | Whether to apply this discount to commission calculations | [optional] 
**product_categories** | **List[str]** | List of product category IDs this discount applies to | [optional] 

## Example

```python
from keap_core_v2_client.models.category_discount import CategoryDiscount

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryDiscount from a JSON string
category_discount_instance = CategoryDiscount.from_json(json)
# print the JSON string representation of the object
print(CategoryDiscount.to_json())

# convert the object into a dict
category_discount_dict = category_discount_instance.to_dict()
# create an instance of CategoryDiscount from a dict
category_discount_from_dict = CategoryDiscount.from_dict(category_discount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


