# ListContactTagAssociationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | [**List[TagContactAssociation]**](TagContactAssociation.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_contact_tag_associations_response import ListContactTagAssociationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListContactTagAssociationsResponse from a JSON string
list_contact_tag_associations_response_instance = ListContactTagAssociationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListContactTagAssociationsResponse.to_json())

# convert the object into a dict
list_contact_tag_associations_response_dict = list_contact_tag_associations_response_instance.to_dict()
# create an instance of ListContactTagAssociationsResponse from a dict
list_contact_tag_associations_response_from_dict = ListContactTagAssociationsResponse.from_dict(list_contact_tag_associations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


