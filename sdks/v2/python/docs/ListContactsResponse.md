# ListContactsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contacts** | [**List[Contact]**](Contact.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_contacts_response import ListContactsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListContactsResponse from a JSON string
list_contacts_response_instance = ListContactsResponse.from_json(json)
# print the JSON string representation of the object
print(ListContactsResponse.to_json())

# convert the object into a dict
list_contacts_response_dict = list_contacts_response_instance.to_dict()
# create an instance of ListContactsResponse from a dict
list_contacts_response_from_dict = ListContactsResponse.from_dict(list_contacts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


