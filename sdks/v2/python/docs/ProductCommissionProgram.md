# ProductCommissionProgram


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.product_commission_program import ProductCommissionProgram

# TODO update the JSON string below
json = "{}"
# create an instance of ProductCommissionProgram from a JSON string
product_commission_program_instance = ProductCommissionProgram.from_json(json)
# print the JSON string representation of the object
print(ProductCommissionProgram.to_json())

# convert the object into a dict
product_commission_program_dict = product_commission_program_instance.to_dict()
# create an instance of ProductCommissionProgram from a dict
product_commission_program_from_dict = ProductCommissionProgram.from_dict(product_commission_program_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


