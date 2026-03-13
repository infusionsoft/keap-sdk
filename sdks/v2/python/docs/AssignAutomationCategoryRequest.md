# AssignAutomationCategoryRequest

Request to assign categories to automations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_ids** | **List[str]** | List of category IDs to assign to the automations | [optional] 
**automation_ids** | **List[str]** | List of automation IDs to update. Use &#39;0&#39; as a wildcard to select all automations. | [optional] 
**apply_category** | **bool** | If true, the categories will be applied to the automations. If false, the categories will be removed from the automations. | [optional] 

## Example

```python
from keap_core_v2_client.models.assign_automation_category_request import AssignAutomationCategoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AssignAutomationCategoryRequest from a JSON string
assign_automation_category_request_instance = AssignAutomationCategoryRequest.from_json(json)
# print the JSON string representation of the object
print(AssignAutomationCategoryRequest.to_json())

# convert the object into a dict
assign_automation_category_request_dict = assign_automation_category_request_instance.to_dict()
# create an instance of AssignAutomationCategoryRequest from a dict
assign_automation_category_request_from_dict = AssignAutomationCategoryRequest.from_dict(assign_automation_category_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


