# Automation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of the automation | [optional] 
**title** | **str** | The title of the automation | [optional] 
**categories** | **List[str]** | List of category IDs associated with this automation | [optional] 
**status** | **str** | The publication status of the automation | [optional] 
**locked** | **bool** | Whether the automation is locked for editing | [optional] 
**active_contacts** | **int** | Number of contacts currently active in this automation | [optional] 
**error_message** | **str** | Error message if the automation has issues | [optional] 
**published_date** | **datetime** | The date and time when the automation was published. In ISO-8601 format | [optional] 
**published_by** | **str** | The user ID who published the automation | [optional] 
**published_timezone** | **str** | The timezone used when publishing | [optional] 
**current_edit_lock_status** | [**AutomationLockStatus**](AutomationLockStatus.md) | Current edit lock status information | [optional] 

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


