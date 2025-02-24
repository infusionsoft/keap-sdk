# AutomationLockStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locked** | **bool** |  | [optional] 
**user_firstname** | **str** |  | [optional] 
**user_id** | **str** |  | [optional] 
**user_name** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.automation_lock_status import AutomationLockStatus

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationLockStatus from a JSON string
automation_lock_status_instance = AutomationLockStatus.from_json(json)
# print the JSON string representation of the object
print(AutomationLockStatus.to_json())

# convert the object into a dict
automation_lock_status_dict = automation_lock_status_instance.to_dict()
# create an instance of AutomationLockStatus from a dict
automation_lock_status_from_dict = AutomationLockStatus.from_dict(automation_lock_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


