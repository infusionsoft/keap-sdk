# UpdateOpportunityStageChecklistItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**order** | **int** |  | [optional] 
**required** | **bool** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.update_opportunity_stage_checklist_item import UpdateOpportunityStageChecklistItem

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOpportunityStageChecklistItem from a JSON string
update_opportunity_stage_checklist_item_instance = UpdateOpportunityStageChecklistItem.from_json(json)
# print the JSON string representation of the object
print(UpdateOpportunityStageChecklistItem.to_json())

# convert the object into a dict
update_opportunity_stage_checklist_item_dict = update_opportunity_stage_checklist_item_instance.to_dict()
# create an instance of UpdateOpportunityStageChecklistItem from a dict
update_opportunity_stage_checklist_item_from_dict = UpdateOpportunityStageChecklistItem.from_dict(update_opportunity_stage_checklist_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


