# AutomationStateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | The desired lifecycle state of the automation. | 

## Example

```python
from keap_core_v2_client.models.automation_state_request import AutomationStateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationStateRequest from a JSON string
automation_state_request_instance = AutomationStateRequest.from_json(json)
# print the JSON string representation of the object
print(AutomationStateRequest.to_json())

# convert the object into a dict
automation_state_request_dict = automation_state_request_instance.to_dict()
# create an instance of AutomationStateRequest from a dict
automation_state_request_from_dict = AutomationStateRequest.from_dict(automation_state_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


