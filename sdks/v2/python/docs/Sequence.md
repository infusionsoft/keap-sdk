# Sequence


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_contact_count** | **int** |  | [optional] 
**active_contact_count_completed** | **int** |  | [optional] 
**historical_contact_count** | [**HistoricalCounts**](HistoricalCounts.md) |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**paths** | [**List[SequencePath]**](SequencePath.md) |  | [optional] 

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


