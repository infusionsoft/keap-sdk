# CreateDefaultCommissionProgramRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percentage** | **str** | Commission percentage (0-100). Either percentage or dollar_amount is required | [optional] 
**dollar_amount** | **str** | Fixed dollar amount. Either percentage or dollar_amount is required | [optional] 

## Example

```python
from keap_core_v2_client.models.create_default_commission_program_request import CreateDefaultCommissionProgramRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDefaultCommissionProgramRequest from a JSON string
create_default_commission_program_request_instance = CreateDefaultCommissionProgramRequest.from_json(json)
# print the JSON string representation of the object
print(CreateDefaultCommissionProgramRequest.to_json())

# convert the object into a dict
create_default_commission_program_request_dict = create_default_commission_program_request_instance.to_dict()
# create an instance of CreateDefaultCommissionProgramRequest from a dict
create_default_commission_program_request_from_dict = CreateDefaultCommissionProgramRequest.from_dict(create_default_commission_program_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


