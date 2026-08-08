# TagContactAssociation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_id** | **str** | The contact ID | [optional] 
**tag_id** | **str** | The tag ID | [optional] 
**applied_at** | **str** | The time the tag was applied to the contact, in ISO 8601 format. | [optional] 

## Example

```python
from keap_core_v2_client.models.tag_contact_association import TagContactAssociation

# TODO update the JSON string below
json = "{}"
# create an instance of TagContactAssociation from a JSON string
tag_contact_association_instance = TagContactAssociation.from_json(json)
# print the JSON string representation of the object
print(TagContactAssociation.to_json())

# convert the object into a dict
tag_contact_association_dict = tag_contact_association_instance.to_dict()
# create an instance of TagContactAssociation from a dict
tag_contact_association_from_dict = TagContactAssociation.from_dict(tag_contact_association_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


