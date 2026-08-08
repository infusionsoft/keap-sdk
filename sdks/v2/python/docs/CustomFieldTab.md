# CustomFieldTab


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of the custom field tab | [optional] 
**name** | **str** | The name of the custom field tab | [optional] 
**order** | **int** | The display order of the tab | [optional] 
**record_type** | **str** | The record type this tab belongs to (e.g., CONTACT, COMPANY, OPPORTUNITY, REFERRAL_PARTNER, ORDER, SUBSCRIPTION, TASK_NOTE_APPOINTMENT) | [optional] 

## Example

```python
from keap_core_v2_client.models.custom_field_tab import CustomFieldTab

# TODO update the JSON string below
json = "{}"
# create an instance of CustomFieldTab from a JSON string
custom_field_tab_instance = CustomFieldTab.from_json(json)
# print the JSON string representation of the object
print(CustomFieldTab.to_json())

# convert the object into a dict
custom_field_tab_dict = custom_field_tab_instance.to_dict()
# create an instance of CustomFieldTab from a dict
custom_field_tab_from_dict = CustomFieldTab.from_dict(custom_field_tab_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


