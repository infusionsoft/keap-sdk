# AddToAutomationSequenceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_ids** | **List[str]** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.add_to_automation_sequence_request import AddToAutomationSequenceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddToAutomationSequenceRequest from a JSON string
add_to_automation_sequence_request_instance = AddToAutomationSequenceRequest.from_json(json)
# print the JSON string representation of the object
print(AddToAutomationSequenceRequest.to_json())

# convert the object into a dict
add_to_automation_sequence_request_dict = add_to_automation_sequence_request_instance.to_dict()
# create an instance of AddToAutomationSequenceRequest from a dict
add_to_automation_sequence_request_from_dict = AddToAutomationSequenceRequest.from_dict(add_to_automation_sequence_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


