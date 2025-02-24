# CreateAutomationCategoryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.create_automation_category_request import CreateAutomationCategoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAutomationCategoryRequest from a JSON string
create_automation_category_request_instance = CreateAutomationCategoryRequest.from_json(json)
# print the JSON string representation of the object
print(CreateAutomationCategoryRequest.to_json())

# convert the object into a dict
create_automation_category_request_dict = create_automation_category_request_instance.to_dict()
# create an instance of CreateAutomationCategoryRequest from a dict
create_automation_category_request_from_dict = CreateAutomationCategoryRequest.from_dict(create_automation_category_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


