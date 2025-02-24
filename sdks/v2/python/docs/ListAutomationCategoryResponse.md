# ListAutomationCategoryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automation_categories** | [**List[AutomationCategory]**](AutomationCategory.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_automation_category_response import ListAutomationCategoryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAutomationCategoryResponse from a JSON string
list_automation_category_response_instance = ListAutomationCategoryResponse.from_json(json)
# print the JSON string representation of the object
print(ListAutomationCategoryResponse.to_json())

# convert the object into a dict
list_automation_category_response_dict = list_automation_category_response_instance.to_dict()
# create an instance of ListAutomationCategoryResponse from a dict
list_automation_category_response_from_dict = ListAutomationCategoryResponse.from_dict(list_automation_category_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


