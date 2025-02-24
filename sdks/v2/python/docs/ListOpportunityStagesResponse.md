# ListOpportunityStagesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** |  | [optional] 
**stages** | [**List[RestOpportunityStage]**](RestOpportunityStage.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_opportunity_stages_response import ListOpportunityStagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListOpportunityStagesResponse from a JSON string
list_opportunity_stages_response_instance = ListOpportunityStagesResponse.from_json(json)
# print the JSON string representation of the object
print(ListOpportunityStagesResponse.to_json())

# convert the object into a dict
list_opportunity_stages_response_dict = list_opportunity_stages_response_instance.to_dict()
# create an instance of ListOpportunityStagesResponse from a dict
list_opportunity_stages_response_from_dict = ListOpportunityStagesResponse.from_dict(list_opportunity_stages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


