# UpdateCommissionProgramRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the Commission Program | 
**notes** | **str** | The notes of the Commission Program | [optional] 
**priority** | **int** | The priority of the Commission Program | [optional] 

## Example

```python
from keap_core_v2_client.models.update_commission_program_request import UpdateCommissionProgramRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCommissionProgramRequest from a JSON string
update_commission_program_request_instance = UpdateCommissionProgramRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCommissionProgramRequest.to_json())

# convert the object into a dict
update_commission_program_request_dict = update_commission_program_request_instance.to_dict()
# create an instance of UpdateCommissionProgramRequest from a dict
update_commission_program_request_from_dict = UpdateCommissionProgramRequest.from_dict(update_commission_program_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


