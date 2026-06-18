# ListOpportunityStageMoveResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stage_moves** | [**List[OpportunityStageMove]**](OpportunityStageMove.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_opportunity_stage_move_response import ListOpportunityStageMoveResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListOpportunityStageMoveResponse from a JSON string
list_opportunity_stage_move_response_instance = ListOpportunityStageMoveResponse.from_json(json)
# print the JSON string representation of the object
print(ListOpportunityStageMoveResponse.to_json())

# convert the object into a dict
list_opportunity_stage_move_response_dict = list_opportunity_stage_move_response_instance.to_dict()
# create an instance of ListOpportunityStageMoveResponse from a dict
list_opportunity_stage_move_response_from_dict = ListOpportunityStageMoveResponse.from_dict(list_opportunity_stage_move_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


