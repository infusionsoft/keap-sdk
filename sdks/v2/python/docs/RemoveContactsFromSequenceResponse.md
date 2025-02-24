# RemoveContactsFromSequenceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remove_from_sequence_results** | **Dict[str, str]** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.remove_contacts_from_sequence_response import RemoveContactsFromSequenceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveContactsFromSequenceResponse from a JSON string
remove_contacts_from_sequence_response_instance = RemoveContactsFromSequenceResponse.from_json(json)
# print the JSON string representation of the object
print(RemoveContactsFromSequenceResponse.to_json())

# convert the object into a dict
remove_contacts_from_sequence_response_dict = remove_contacts_from_sequence_response_instance.to_dict()
# create an instance of RemoveContactsFromSequenceResponse from a dict
remove_contacts_from_sequence_response_from_dict = RemoveContactsFromSequenceResponse.from_dict(remove_contacts_from_sequence_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


