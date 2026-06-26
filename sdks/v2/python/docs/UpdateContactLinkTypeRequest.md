# UpdateContactLinkTypeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Link type name | [optional] 
**max_links** | **int** | Maximum number of links allowed (must be &gt; 0) | [optional] 

## Example

```python
from keap_core_v2_client.models.update_contact_link_type_request import UpdateContactLinkTypeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateContactLinkTypeRequest from a JSON string
update_contact_link_type_request_instance = UpdateContactLinkTypeRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateContactLinkTypeRequest.to_json())

# convert the object into a dict
update_contact_link_type_request_dict = update_contact_link_type_request_instance.to_dict()
# create an instance of UpdateContactLinkTypeRequest from a dict
update_contact_link_type_request_from_dict = UpdateContactLinkTypeRequest.from_dict(update_contact_link_type_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


