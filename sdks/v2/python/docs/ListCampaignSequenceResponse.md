# ListCampaignSequenceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign_id** | **str** |  | [optional] 
**next_page_token** | **str** |  | [optional] 
**sequences** | [**List[Sequence]**](Sequence.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_campaign_sequence_response import ListCampaignSequenceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCampaignSequenceResponse from a JSON string
list_campaign_sequence_response_instance = ListCampaignSequenceResponse.from_json(json)
# print the JSON string representation of the object
print(ListCampaignSequenceResponse.to_json())

# convert the object into a dict
list_campaign_sequence_response_dict = list_campaign_sequence_response_instance.to_dict()
# create an instance of ListCampaignSequenceResponse from a dict
list_campaign_sequence_response_from_dict = ListCampaignSequenceResponse.from_dict(list_campaign_sequence_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


