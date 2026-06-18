# OpportunityStageMove

Historical record of an opportunity moving from one pipeline stage to another

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique ID of this stage-move record | [optional] 
**opportunity_id** | **str** | ID of the opportunity that was moved | [optional] 
**move_time** | **str** | Date-time when the move occurred (ISO-8601 UTC) | [optional] 
**move_from_stage_id** | **str** | ID of the stage moved FROM. 0 &#x3D; no previous stage (first move) | [optional] 
**move_to_stage_id** | **str** | ID of the stage moved TO | [optional] 
**prev_stage_move_time** | **str** | Date-time of the previous stage-move (ISO-8601 UTC). Null if first move. | [optional] 
**user_id** | **str** | ID of the user associated with this move | [optional] 
**created_by** | **str** | ID of the user who created this record | [optional] 
**create_time** | **str** | Date-time this record was created (ISO-8601 UTC) | [optional] 

## Example

```python
from keap_core_v2_client.models.opportunity_stage_move import OpportunityStageMove

# TODO update the JSON string below
json = "{}"
# create an instance of OpportunityStageMove from a JSON string
opportunity_stage_move_instance = OpportunityStageMove.from_json(json)
# print the JSON string representation of the object
print(OpportunityStageMove.to_json())

# convert the object into a dict
opportunity_stage_move_dict = opportunity_stage_move_instance.to_dict()
# create an instance of OpportunityStageMove from a dict
opportunity_stage_move_from_dict = OpportunityStageMove.from_dict(opportunity_stage_move_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


