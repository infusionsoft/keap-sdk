# ChecklistItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**order** | **int** |  | [optional] 
**required** | **bool** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.checklist_item import ChecklistItem

# TODO update the JSON string below
json = "{}"
# create an instance of ChecklistItem from a JSON string
checklist_item_instance = ChecklistItem.from_json(json)
# print the JSON string representation of the object
print(ChecklistItem.to_json())

# convert the object into a dict
checklist_item_dict = checklist_item_instance.to_dict()
# create an instance of ChecklistItem from a dict
checklist_item_from_dict = ChecklistItem.from_dict(checklist_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


