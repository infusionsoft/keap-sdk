# ListContactLinkTypesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_link_types** | [**List[ContactLinkType]**](ContactLinkType.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_contact_link_types_response import ListContactLinkTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListContactLinkTypesResponse from a JSON string
list_contact_link_types_response_instance = ListContactLinkTypesResponse.from_json(json)
# print the JSON string representation of the object
print(ListContactLinkTypesResponse.to_json())

# convert the object into a dict
list_contact_link_types_response_dict = list_contact_link_types_response_instance.to_dict()
# create an instance of ListContactLinkTypesResponse from a dict
list_contact_link_types_response_from_dict = ListContactLinkTypesResponse.from_dict(list_contact_link_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


