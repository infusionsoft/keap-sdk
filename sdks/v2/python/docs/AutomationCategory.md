# AutomationCategory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automation_count** | **int** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.automation_category import AutomationCategory

# TODO update the JSON string below
json = "{}"
# create an instance of AutomationCategory from a JSON string
automation_category_instance = AutomationCategory.from_json(json)
# print the JSON string representation of the object
print(AutomationCategory.to_json())

# convert the object into a dict
automation_category_dict = automation_category_instance.to_dict()
# create an instance of AutomationCategory from a dict
automation_category_from_dict = AutomationCategory.from_dict(automation_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


