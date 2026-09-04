# TagContactCount

The count of Contacts associated with a Tag

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Number of Contacts for the Tag matching the active filters. | [optional] 

## Example

```python
from keap_core_v2_client.models.tag_contact_count import TagContactCount

# TODO update the JSON string below
json = "{}"
# create an instance of TagContactCount from a JSON string
tag_contact_count_instance = TagContactCount.from_json(json)
# print the JSON string representation of the object
print(TagContactCount.to_json())

# convert the object into a dict
tag_contact_count_dict = tag_contact_count_instance.to_dict()
# create an instance of TagContactCount from a dict
tag_contact_count_from_dict = TagContactCount.from_dict(tag_contact_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


