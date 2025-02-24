# SequencePath


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**items** | [**List[Item]**](Item.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.sequence_path import SequencePath

# TODO update the JSON string below
json = "{}"
# create an instance of SequencePath from a JSON string
sequence_path_instance = SequencePath.from_json(json)
# print the JSON string representation of the object
print(SequencePath.to_json())

# convert the object into a dict
sequence_path_dict = sequence_path_instance.to_dict()
# create an instance of SequencePath from a dict
sequence_path_from_dict = SequencePath.from_dict(sequence_path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


