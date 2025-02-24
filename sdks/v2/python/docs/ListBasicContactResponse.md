# ListBasicContactResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contacts** | [**List[BasicContact]**](BasicContact.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_basic_contact_response import ListBasicContactResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBasicContactResponse from a JSON string
list_basic_contact_response_instance = ListBasicContactResponse.from_json(json)
# print the JSON string representation of the object
print(ListBasicContactResponse.to_json())

# convert the object into a dict
list_basic_contact_response_dict = list_basic_contact_response_instance.to_dict()
# create an instance of ListBasicContactResponse from a dict
list_basic_contact_response_from_dict = ListBasicContactResponse.from_dict(list_basic_contact_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


