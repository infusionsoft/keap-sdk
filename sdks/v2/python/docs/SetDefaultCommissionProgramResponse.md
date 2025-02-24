# SetDefaultCommissionProgramResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.set_default_commission_program_response import SetDefaultCommissionProgramResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SetDefaultCommissionProgramResponse from a JSON string
set_default_commission_program_response_instance = SetDefaultCommissionProgramResponse.from_json(json)
# print the JSON string representation of the object
print(SetDefaultCommissionProgramResponse.to_json())

# convert the object into a dict
set_default_commission_program_response_dict = set_default_commission_program_response_instance.to_dict()
# create an instance of SetDefaultCommissionProgramResponse from a dict
set_default_commission_program_response_from_dict = SetDefaultCommissionProgramResponse.from_dict(set_default_commission_program_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


