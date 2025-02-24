# CreateOpportunityStageChecklistItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | 
**order** | **int** |  | 
**required** | **bool** |  | 

## Example

```python
from keap_core_v2_client.models.create_opportunity_stage_checklist_item import CreateOpportunityStageChecklistItem

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOpportunityStageChecklistItem from a JSON string
create_opportunity_stage_checklist_item_instance = CreateOpportunityStageChecklistItem.from_json(json)
# print the JSON string representation of the object
print(CreateOpportunityStageChecklistItem.to_json())

# convert the object into a dict
create_opportunity_stage_checklist_item_dict = create_opportunity_stage_checklist_item_instance.to_dict()
# create an instance of CreateOpportunityStageChecklistItem from a dict
create_opportunity_stage_checklist_item_from_dict = CreateOpportunityStageChecklistItem.from_dict(create_opportunity_stage_checklist_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


