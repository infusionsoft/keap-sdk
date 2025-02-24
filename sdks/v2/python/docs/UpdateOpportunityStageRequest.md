# UpdateOpportunityStageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checklist_items** | [**List[UpdateOpportunityStageChecklistItem]**](UpdateOpportunityStageChecklistItem.md) |  | [optional] 
**name** | **str** |  | [optional] 
**order** | **int** |  | [optional] 
**probability** | **int** | must be an integer between 0 and 100. | [optional] 
**target_number_days** | **int** | Value should be &gt;&#x3D;0. | [optional] 

## Example

```python
from keap_core_v2_client.models.update_opportunity_stage_request import UpdateOpportunityStageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOpportunityStageRequest from a JSON string
update_opportunity_stage_request_instance = UpdateOpportunityStageRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOpportunityStageRequest.to_json())

# convert the object into a dict
update_opportunity_stage_request_dict = update_opportunity_stage_request_instance.to_dict()
# create an instance of UpdateOpportunityStageRequest from a dict
update_opportunity_stage_request_from_dict = UpdateOpportunityStageRequest.from_dict(update_opportunity_stage_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


