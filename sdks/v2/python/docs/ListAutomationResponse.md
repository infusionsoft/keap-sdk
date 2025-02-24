# ListAutomationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automation_count** | **int** |  | [optional] 
**automations** | [**List[Automation]**](Automation.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_automation_response import ListAutomationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAutomationResponse from a JSON string
list_automation_response_instance = ListAutomationResponse.from_json(json)
# print the JSON string representation of the object
print(ListAutomationResponse.to_json())

# convert the object into a dict
list_automation_response_dict = list_automation_response_instance.to_dict()
# create an instance of ListAutomationResponse from a dict
list_automation_response_from_dict = ListAutomationResponse.from_dict(list_automation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


