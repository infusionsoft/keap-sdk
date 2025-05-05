# DeleteProgramCommissionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_id** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.delete_program_commission_request import DeleteProgramCommissionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteProgramCommissionRequest from a JSON string
delete_program_commission_request_instance = DeleteProgramCommissionRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteProgramCommissionRequest.to_json())

# convert the object into a dict
delete_program_commission_request_dict = delete_program_commission_request_instance.to_dict()
# create an instance of DeleteProgramCommissionRequest from a dict
delete_program_commission_request_from_dict = DeleteProgramCommissionRequest.from_dict(delete_program_commission_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


