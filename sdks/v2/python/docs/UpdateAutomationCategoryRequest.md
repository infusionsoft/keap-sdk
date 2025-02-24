# UpdateAutomationCategoryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply_category** | **bool** |  | [optional] 
**automation_ids** | **List[int]** |  | [optional] 
**category_ids** | **List[int]** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.update_automation_category_request import UpdateAutomationCategoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAutomationCategoryRequest from a JSON string
update_automation_category_request_instance = UpdateAutomationCategoryRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateAutomationCategoryRequest.to_json())

# convert the object into a dict
update_automation_category_request_dict = update_automation_category_request_instance.to_dict()
# create an instance of UpdateAutomationCategoryRequest from a dict
update_automation_category_request_from_dict = UpdateAutomationCategoryRequest.from_dict(update_automation_category_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


