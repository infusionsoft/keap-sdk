# Automation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_contacts** | **int** |  | [optional] 
**categories** | **List[str]** |  | [optional] 
**current_edit_lock_status** | [**AutomationLockStatus**](AutomationLockStatus.md) |  | [optional] 
**error_message** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**locked** | **bool** |  | [optional] 
**published_by** | **str** |  | [optional] 
**published_date** | **datetime** |  | [optional] 
**published_timezone** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.automation import Automation

# TODO update the JSON string below
json = "{}"
# create an instance of Automation from a JSON string
automation_instance = Automation.from_json(json)
# print the JSON string representation of the object
print(Automation.to_json())

# convert the object into a dict
automation_dict = automation_instance.to_dict()
# create an instance of Automation from a dict
automation_from_dict = Automation.from_dict(automation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


