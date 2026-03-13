# CreateProductDiscountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the discount | 
**description** | **str** | Description of the discount | [optional] 
**criteria** | [**List[DiscountCriteria]**](DiscountCriteria.md) | List of criteria that must be met for this discount to apply | [optional] 
**apply_to_commissions** | **bool** | Whether to apply this discount to commission calculations | [optional] 
**product_id** | **str** | ID of the product this discount applies to | 
**discount_type** | **str** | Type of discount: AMOUNT (fixed amount) or PERCENT (percentage) | 
**discount_value** | **float** | Value of the discount (amount or percentage depending on discount_type) | 

## Example

```python
from keap_core_v2_client.models.create_product_discount_request import CreateProductDiscountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateProductDiscountRequest from a JSON string
create_product_discount_request_instance = CreateProductDiscountRequest.from_json(json)
# print the JSON string representation of the object
print(CreateProductDiscountRequest.to_json())

# convert the object into a dict
create_product_discount_request_dict = create_product_discount_request_instance.to_dict()
# create an instance of CreateProductDiscountRequest from a dict
create_product_discount_request_from_dict = CreateProductDiscountRequest.from_dict(create_product_discount_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


