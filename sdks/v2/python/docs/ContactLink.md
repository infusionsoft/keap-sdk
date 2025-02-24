# ContactLink


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact1_id** | **str** |  | [optional] 
**contact2_id** | **str** |  | [optional] 
**link_type_id** | **str** |  | [optional] 
**link_type_name** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.contact_link import ContactLink

# TODO update the JSON string below
json = "{}"
# create an instance of ContactLink from a JSON string
contact_link_instance = ContactLink.from_json(json)
# print the JSON string representation of the object
print(ContactLink.to_json())

# convert the object into a dict
contact_link_dict = contact_link_instance.to_dict()
# create an instance of ContactLink from a dict
contact_link_from_dict = ContactLink.from_dict(contact_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


