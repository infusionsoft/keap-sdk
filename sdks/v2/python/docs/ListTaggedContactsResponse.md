# ListTaggedContactsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contacts** | [**List[BasicContact]**](BasicContact.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_tagged_contacts_response import ListTaggedContactsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTaggedContactsResponse from a JSON string
list_tagged_contacts_response_instance = ListTaggedContactsResponse.from_json(json)
# print the JSON string representation of the object
print(ListTaggedContactsResponse.to_json())

# convert the object into a dict
list_tagged_contacts_response_dict = list_tagged_contacts_response_instance.to_dict()
# create an instance of ListTaggedContactsResponse from a dict
list_tagged_contacts_response_from_dict = ListTaggedContactsResponse.from_dict(list_tagged_contacts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


