# ListContactTagsResponse

List of tags applied to a contact

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | [**List[AppliedTag]**](AppliedTag.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_contact_tags_response import ListContactTagsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListContactTagsResponse from a JSON string
list_contact_tags_response_instance = ListContactTagsResponse.from_json(json)
# print the JSON string representation of the object
print(ListContactTagsResponse.to_json())

# convert the object into a dict
list_contact_tags_response_dict = list_contact_tags_response_instance.to_dict()
# create an instance of ListContactTagsResponse from a dict
list_contact_tags_response_from_dict = ListContactTagsResponse.from_dict(list_contact_tags_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


