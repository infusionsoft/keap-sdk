# UpdateDefaultCommissionProgramRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percentage** | **str** | Commission percentage (0-100). Either percentage or dollar_amount is required | [optional] 
**dollar_amount** | **str** | Fixed dollar amount. Either percentage or dollar_amount is required | [optional] 

## Example

```python
from keap_core_v2_client.models.update_default_commission_program_request import UpdateDefaultCommissionProgramRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDefaultCommissionProgramRequest from a JSON string
update_default_commission_program_request_instance = UpdateDefaultCommissionProgramRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDefaultCommissionProgramRequest.to_json())

# convert the object into a dict
update_default_commission_program_request_dict = update_default_commission_program_request_instance.to_dict()
# create an instance of UpdateDefaultCommissionProgramRequest from a dict
update_default_commission_program_request_from_dict = UpdateDefaultCommissionProgramRequest.from_dict(update_default_commission_program_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


