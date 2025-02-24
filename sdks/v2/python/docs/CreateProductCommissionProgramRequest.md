# CreateProductCommissionProgramRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dollar_amount** | **str** |  | [optional] 
**percentage** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.create_product_commission_program_request import CreateProductCommissionProgramRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateProductCommissionProgramRequest from a JSON string
create_product_commission_program_request_instance = CreateProductCommissionProgramRequest.from_json(json)
# print the JSON string representation of the object
print(CreateProductCommissionProgramRequest.to_json())

# convert the object into a dict
create_product_commission_program_request_dict = create_product_commission_program_request_instance.to_dict()
# create an instance of CreateProductCommissionProgramRequest from a dict
create_product_commission_program_request_from_dict = CreateProductCommissionProgramRequest.from_dict(create_product_commission_program_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


