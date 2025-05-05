# PatchAutomationCategoryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.patch_automation_category_request import PatchAutomationCategoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchAutomationCategoryRequest from a JSON string
patch_automation_category_request_instance = PatchAutomationCategoryRequest.from_json(json)
# print the JSON string representation of the object
print(PatchAutomationCategoryRequest.to_json())

# convert the object into a dict
patch_automation_category_request_dict = patch_automation_category_request_instance.to_dict()
# create an instance of PatchAutomationCategoryRequest from a dict
patch_automation_category_request_from_dict = PatchAutomationCategoryRequest.from_dict(patch_automation_category_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


