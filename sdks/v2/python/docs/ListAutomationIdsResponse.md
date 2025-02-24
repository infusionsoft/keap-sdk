# ListAutomationIdsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automation_ids** | **List[str]** |  | [optional] 
**locked_automation_ids** | **List[str]** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_automation_ids_response import ListAutomationIdsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAutomationIdsResponse from a JSON string
list_automation_ids_response_instance = ListAutomationIdsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAutomationIdsResponse.to_json())

# convert the object into a dict
list_automation_ids_response_dict = list_automation_ids_response_instance.to_dict()
# create an instance of ListAutomationIdsResponse from a dict
list_automation_ids_response_from_dict = ListAutomationIdsResponse.from_dict(list_automation_ids_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


