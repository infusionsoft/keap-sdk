# CreateContactLinkTypeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_links** | **int** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.create_contact_link_type_request import CreateContactLinkTypeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateContactLinkTypeRequest from a JSON string
create_contact_link_type_request_instance = CreateContactLinkTypeRequest.from_json(json)
# print the JSON string representation of the object
print(CreateContactLinkTypeRequest.to_json())

# convert the object into a dict
create_contact_link_type_request_dict = create_contact_link_type_request_instance.to_dict()
# create an instance of CreateContactLinkTypeRequest from a dict
create_contact_link_type_request_from_dict = CreateContactLinkTypeRequest.from_dict(create_contact_link_type_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


