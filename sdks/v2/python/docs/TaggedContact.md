# TaggedContact


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**given_name** | **str** |  | [optional] 
**family_name** | **str** |  | [optional] 
**applied_time** | **datetime** | The time the tag was applied to the contact, in ISO 8601 format. | [optional] 

## Example

```python
from keap_core_v2_client.models.tagged_contact import TaggedContact

# TODO update the JSON string below
json = "{}"
# create an instance of TaggedContact from a JSON string
tagged_contact_instance = TaggedContact.from_json(json)
# print the JSON string representation of the object
print(TaggedContact.to_json())

# convert the object into a dict
tagged_contact_dict = tagged_contact_instance.to_dict()
# create an instance of TaggedContact from a dict
tagged_contact_from_dict = TaggedContact.from_dict(tagged_contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


