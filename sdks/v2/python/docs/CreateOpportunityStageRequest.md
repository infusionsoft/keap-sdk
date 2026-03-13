# CreateOpportunityStageRequest

opportunity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**order** | **int** |  | 
**target_number_days** | **int** |  | 
**probability** | **int** |  | 
**checklist_items** | [**List[CreateOpportunityStageChecklistItem]**](CreateOpportunityStageChecklistItem.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.create_opportunity_stage_request import CreateOpportunityStageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOpportunityStageRequest from a JSON string
create_opportunity_stage_request_instance = CreateOpportunityStageRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOpportunityStageRequest.to_json())

# convert the object into a dict
create_opportunity_stage_request_dict = create_opportunity_stage_request_instance.to_dict()
# create an instance of CreateOpportunityStageRequest from a dict
create_opportunity_stage_request_from_dict = CreateOpportunityStageRequest.from_dict(create_opportunity_stage_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


