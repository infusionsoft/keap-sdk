# MergeContactRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_id** | **str** | Primary contact ID to merge into | 
**duplicate_contact_id** | **str** | Duplicate contact ID to merge from | 

## Example

```python
from keap_core_v2_client.models.merge_contact_request import MergeContactRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MergeContactRequest from a JSON string
merge_contact_request_instance = MergeContactRequest.from_json(json)
# print the JSON string representation of the object
print(MergeContactRequest.to_json())

# convert the object into a dict
merge_contact_request_dict = merge_contact_request_instance.to_dict()
# create an instance of MergeContactRequest from a dict
merge_contact_request_from_dict = MergeContactRequest.from_dict(merge_contact_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


