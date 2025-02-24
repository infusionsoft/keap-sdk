# AddContactsToSequenceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_ids** | **List[str]** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.add_contacts_to_sequence_request import AddContactsToSequenceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddContactsToSequenceRequest from a JSON string
add_contacts_to_sequence_request_instance = AddContactsToSequenceRequest.from_json(json)
# print the JSON string representation of the object
print(AddContactsToSequenceRequest.to_json())

# convert the object into a dict
add_contacts_to_sequence_request_dict = add_contacts_to_sequence_request_instance.to_dict()
# create an instance of AddContactsToSequenceRequest from a dict
add_contacts_to_sequence_request_from_dict = AddContactsToSequenceRequest.from_dict(add_contacts_to_sequence_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


