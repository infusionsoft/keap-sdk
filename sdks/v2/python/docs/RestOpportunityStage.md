# RestOpportunityStage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checklist_items** | [**List[ChecklistItem]**](ChecklistItem.md) |  | [optional] 
**created_time** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**order** | **int** |  | [optional] 
**probability** | **int** |  | [optional] 
**target_number_days** | **int** |  | [optional] 
**updated_time** | **str** |  | [optional] 

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


