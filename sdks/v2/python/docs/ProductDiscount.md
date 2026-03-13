# ProductDiscount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for this product discount | [optional] 
**name** | **str** | Name of the discount | [optional] 
**description** | **str** | Description of the discount | [optional] 
**criteria** | [**List[DiscountCriteria]**](DiscountCriteria.md) | List of criteria that must be met for this discount to apply | [optional] 
**apply_to_commissions** | **bool** | Whether to apply this discount to commission calculations | [optional] 
**product_id** | **str** | ID of the product this discount applies to | [optional] 
**discount_type** | **str** | Type of discount: AMOUNT (fixed amount) or PERCENT (percentage) | [optional] 
**discount_value** | **float** | Value of the discount (amount or percentage depending on discount_type) | [optional] 

## Example

```python
from keap_core_v2_client.models.product_discount import ProductDiscount

# TODO update the JSON string below
json = "{}"
# create an instance of ProductDiscount from a JSON string
product_discount_instance = ProductDiscount.from_json(json)
# print the JSON string representation of the object
print(ProductDiscount.to_json())

# convert the object into a dict
product_discount_dict = product_discount_instance.to_dict()
# create an instance of ProductDiscount from a dict
product_discount_from_dict = ProductDiscount.from_dict(product_discount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


