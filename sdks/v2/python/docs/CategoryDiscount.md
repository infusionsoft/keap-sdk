# CategoryDiscount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply_to_commissions** | **bool** |  | [optional] 
**category_id** | **str** |  | [optional] 
**criteria** | [**List[DiscountCriteria]**](DiscountCriteria.md) |  | [optional] 
**description** | **str** |  | [optional] 
**discount_percent** | **float** |  | [optional] 
**name** | **str** |  | [optional] 
**product_categories** | **List[str]** |  | [optional] 

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


