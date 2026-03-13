# ContactLinkType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Link type ID | [optional] 
**name** | **str** | Link type name | [optional] 
**max_links** | **int** | Maximum number of links allowed | [optional] 
**create_time** | **str** | Creation timestamp (ISO-8601) | [optional] 

## Example

```python
from keap_core_v2_client.models.contact_link_type import ContactLinkType

# TODO update the JSON string below
json = "{}"
# create an instance of ContactLinkType from a JSON string
contact_link_type_instance = ContactLinkType.from_json(json)
# print the JSON string representation of the object
print(ContactLinkType.to_json())

# convert the object into a dict
contact_link_type_dict = contact_link_type_instance.to_dict()
# create an instance of ContactLinkType from a dict
contact_link_type_from_dict = ContactLinkType.from_dict(contact_link_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


