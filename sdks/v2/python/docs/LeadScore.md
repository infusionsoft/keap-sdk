# LeadScore


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_updated** | **str** |  | [optional] 
**score** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.lead_score import LeadScore

# TODO update the JSON string below
json = "{}"
# create an instance of LeadScore from a JSON string
lead_score_instance = LeadScore.from_json(json)
# print the JSON string representation of the object
print(LeadScore.to_json())

# convert the object into a dict
lead_score_dict = lead_score_instance.to_dict()
# create an instance of LeadScore from a dict
lead_score_from_dict = LeadScore.from_dict(lead_score_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


