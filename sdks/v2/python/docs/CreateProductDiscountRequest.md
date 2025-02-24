# CreateProductDiscountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply_to_commissions** | **bool** |  | [optional] 
**criteria** | [**List[DiscountCriteria]**](DiscountCriteria.md) |  | [optional] 
**description** | **str** |  | [optional] 
**discount_type** | **str** |  | 
**discount_value** | **float** |  | 
**name** | **str** |  | [optional] 
**product_id** | **str** |  | 

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


