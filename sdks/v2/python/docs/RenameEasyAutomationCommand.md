# RenameEasyAutomationCommand

An object used to rename an automation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the easy automation | 

## Example

```python
from keap_core_v2_client.models.rename_easy_automation_command import RenameEasyAutomationCommand

# TODO update the JSON string below
json = "{}"
# create an instance of RenameEasyAutomationCommand from a JSON string
rename_easy_automation_command_instance = RenameEasyAutomationCommand.from_json(json)
# print the JSON string representation of the object
print(RenameEasyAutomationCommand.to_json())

# convert the object into a dict
rename_easy_automation_command_dict = rename_easy_automation_command_instance.to_dict()
# create an instance of RenameEasyAutomationCommand from a dict
rename_easy_automation_command_from_dict = RenameEasyAutomationCommand.from_dict(rename_easy_automation_command_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


