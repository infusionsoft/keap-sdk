# ListCampaignGoalsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign_id** | **str** |  | [optional] 
**goals** | [**List[Goal]**](Goal.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_campaign_goals_response import ListCampaignGoalsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCampaignGoalsResponse from a JSON string
list_campaign_goals_response_instance = ListCampaignGoalsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCampaignGoalsResponse.to_json())

# convert the object into a dict
list_campaign_goals_response_dict = list_campaign_goals_response_instance.to_dict()
# create an instance of ListCampaignGoalsResponse from a dict
list_campaign_goals_response_from_dict = ListCampaignGoalsResponse.from_dict(list_campaign_goals_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


