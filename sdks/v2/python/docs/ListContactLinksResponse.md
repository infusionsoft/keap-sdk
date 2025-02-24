# ListContactLinksResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**List[ContactLink]**](ContactLink.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_contact_links_response import ListContactLinksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListContactLinksResponse from a JSON string
list_contact_links_response_instance = ListContactLinksResponse.from_json(json)
# print the JSON string representation of the object
print(ListContactLinksResponse.to_json())

# convert the object into a dict
list_contact_links_response_dict = list_contact_links_response_instance.to_dict()
# create an instance of ListContactLinksResponse from a dict
list_contact_links_response_from_dict = ListContactLinksResponse.from_dict(list_contact_links_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


