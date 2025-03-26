# ProductDiscount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply_to_commissions** | **bool** |  | [optional] 
**criteria** | [**List[DiscountCriteria]**](DiscountCriteria.md) |  | [optional] 
**description** | **str** |  | [optional] 
**discount_type** | **str** |  | [optional] 
**discount_value** | **float** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 

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


