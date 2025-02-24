# SaveAutomationCategoryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.save_automation_category_request import SaveAutomationCategoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SaveAutomationCategoryRequest from a JSON string
save_automation_category_request_instance = SaveAutomationCategoryRequest.from_json(json)
# print the JSON string representation of the object
print(SaveAutomationCategoryRequest.to_json())

# convert the object into a dict
save_automation_category_request_dict = save_automation_category_request_instance.to_dict()
# create an instance of SaveAutomationCategoryRequest from a dict
save_automation_category_request_from_dict = SaveAutomationCategoryRequest.from_dict(save_automation_category_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


