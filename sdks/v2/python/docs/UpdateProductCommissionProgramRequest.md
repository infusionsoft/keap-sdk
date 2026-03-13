# UpdateProductCommissionProgramRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percentage** | **str** | Commission percentage (0-100). Either percentage or dollar_amount is required | [optional] 
**dollar_amount** | **str** | Fixed dollar amount. Either percentage or dollar_amount is required | [optional] 
**product_id** | **str** | Product ID to assign commission | 

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


