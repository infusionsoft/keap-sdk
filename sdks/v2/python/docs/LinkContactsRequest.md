# LinkContactsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact1_id** | **str** |  | [optional] 
**contact2_id** | **str** |  | [optional] 
**link_type_id** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.link_contacts_request import LinkContactsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LinkContactsRequest from a JSON string
link_contacts_request_instance = LinkContactsRequest.from_json(json)
# print the JSON string representation of the object
print(LinkContactsRequest.to_json())

# convert the object into a dict
link_contacts_request_dict = link_contacts_request_instance.to_dict()
# create an instance of LinkContactsRequest from a dict
link_contacts_request_from_dict = LinkContactsRequest.from_dict(link_contacts_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


