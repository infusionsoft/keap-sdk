# Sequence


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of the sequence | [optional] 
**name** | **str** | The name of the sequence | [optional] 
**paths** | [**List[SequencePath]**](SequencePath.md) | List of paths in this sequence | [optional] 
**active_contact_count** | **int** | Number of contacts currently in this sequence | [optional] 
**active_contact_count_completed** | **int** | Number of contacts who have completed this sequence | [optional] 
**historical_contact_count** | [**HistoricalCounts**](HistoricalCounts.md) | Historical contact counts for this sequence | [optional] 

## Example

```python
from keap_core_v2_client.models.sequence import Sequence

# TODO update the JSON string below
json = "{}"
# create an instance of Sequence from a JSON string
sequence_instance = Sequence.from_json(json)
# print the JSON string representation of the object
print(Sequence.to_json())

# convert the object into a dict
sequence_dict = sequence_instance.to_dict()
# create an instance of Sequence from a dict
sequence_from_dict = Sequence.from_dict(sequence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


