# ParticipantCount

Participant count summary for an automation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**participants** | **int** | Total participant instances in the automation | [optional] 
**unique_contacts** | **int** | Number of distinct contacts active in the automation | [optional] 

## Example

```python
from keap_core_v2_client.models.participant_count import ParticipantCount

# TODO update the JSON string below
json = "{}"
# create an instance of ParticipantCount from a JSON string
participant_count_instance = ParticipantCount.from_json(json)
# print the JSON string representation of the object
print(ParticipantCount.to_json())

# convert the object into a dict
participant_count_dict = participant_count_instance.to_dict()
# create an instance of ParticipantCount from a dict
participant_count_from_dict = ParticipantCount.from_dict(participant_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


