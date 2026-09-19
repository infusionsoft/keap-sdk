# ListTagContactAssociationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contacts** | [**List[TagContactAssociation]**](TagContactAssociation.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_tag_contact_associations_response import ListTagContactAssociationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTagContactAssociationsResponse from a JSON string
list_tag_contact_associations_response_instance = ListTagContactAssociationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListTagContactAssociationsResponse.to_json())

# convert the object into a dict
list_tag_contact_associations_response_dict = list_tag_contact_associations_response_instance.to_dict()
# create an instance of ListTagContactAssociationsResponse from a dict
list_tag_contact_associations_response_from_dict = ListTagContactAssociationsResponse.from_dict(list_tag_contact_associations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


