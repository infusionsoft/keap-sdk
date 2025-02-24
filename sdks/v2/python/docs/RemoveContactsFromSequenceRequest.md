# RemoveContactsFromSequenceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_ids** | **List[str]** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.remove_contacts_from_sequence_request import RemoveContactsFromSequenceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveContactsFromSequenceRequest from a JSON string
remove_contacts_from_sequence_request_instance = RemoveContactsFromSequenceRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveContactsFromSequenceRequest.to_json())

# convert the object into a dict
remove_contacts_from_sequence_request_dict = remove_contacts_from_sequence_request_instance.to_dict()
# create an instance of RemoveContactsFromSequenceRequest from a dict
remove_contacts_from_sequence_request_from_dict = RemoveContactsFromSequenceRequest.from_dict(remove_contacts_from_sequence_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


