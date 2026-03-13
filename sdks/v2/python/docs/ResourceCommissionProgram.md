# ResourceCommissionProgram


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commission_program_id** | **str** | The commission program identifier | [optional] 

## Example

```python
from keap_core_v2_client.models.resource_commission_program import ResourceCommissionProgram

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceCommissionProgram from a JSON string
resource_commission_program_instance = ResourceCommissionProgram.from_json(json)
# print the JSON string representation of the object
print(ResourceCommissionProgram.to_json())

# convert the object into a dict
resource_commission_program_dict = resource_commission_program_instance.to_dict()
# create an instance of ResourceCommissionProgram from a dict
resource_commission_program_from_dict = ResourceCommissionProgram.from_dict(resource_commission_program_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


