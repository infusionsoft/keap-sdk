# OpportunityStage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**StageDetails**](StageDetails.md) |  | [optional] 
**id** | **str** |  | 
**name** | **str** |  | [optional] 
**reasons** | **List[str]** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.opportunity_stage import OpportunityStage

# TODO update the JSON string below
json = "{}"
# create an instance of OpportunityStage from a JSON string
opportunity_stage_instance = OpportunityStage.from_json(json)
# print the JSON string representation of the object
print(OpportunityStage.to_json())

# convert the object into a dict
opportunity_stage_dict = opportunity_stage_instance.to_dict()
# create an instance of OpportunityStage from a dict
opportunity_stage_from_dict = OpportunityStage.from_dict(opportunity_stage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


