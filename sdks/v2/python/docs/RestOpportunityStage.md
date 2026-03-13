# RestOpportunityStage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Stage ID | [optional] 
**name** | **str** | Stage name | [optional] 
**order** | **int** | Stage order in pipeline | [optional] 
**target_number_days** | **int** | Target days in stage | [optional] 
**probability** | **int** | Win probability (0-100) | [optional] 
**created_time** | **str** | Creation timestamp (ISO-8601) | [optional] 
**updated_time** | **str** | Last update timestamp (ISO-8601) | [optional] 
**checklist_items** | [**List[ChecklistItem]**](ChecklistItem.md) | Stage checklist items | [optional] 

## Example

```python
from keap_core_v2_client.models.rest_opportunity_stage import RestOpportunityStage

# TODO update the JSON string below
json = "{}"
# create an instance of RestOpportunityStage from a JSON string
rest_opportunity_stage_instance = RestOpportunityStage.from_json(json)
# print the JSON string representation of the object
print(RestOpportunityStage.to_json())

# convert the object into a dict
rest_opportunity_stage_dict = rest_opportunity_stage_instance.to_dict()
# create an instance of RestOpportunityStage from a dict
rest_opportunity_stage_from_dict = RestOpportunityStage.from_dict(rest_opportunity_stage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


