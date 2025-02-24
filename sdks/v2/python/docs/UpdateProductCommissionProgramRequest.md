# UpdateProductCommissionProgramRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dollar_amount** | **str** |  | [optional] 
**percentage** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.update_product_commission_program_request import UpdateProductCommissionProgramRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateProductCommissionProgramRequest from a JSON string
update_product_commission_program_request_instance = UpdateProductCommissionProgramRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateProductCommissionProgramRequest.to_json())

# convert the object into a dict
update_product_commission_program_request_dict = update_product_commission_program_request_instance.to_dict()
# create an instance of UpdateProductCommissionProgramRequest from a dict
update_product_commission_program_request_from_dict = UpdateProductCommissionProgramRequest.from_dict(update_product_commission_program_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


