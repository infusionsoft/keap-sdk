# GetContactOptionTypesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**option_types** | **List[str]** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.get_contact_option_types_response import GetContactOptionTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetContactOptionTypesResponse from a JSON string
get_contact_option_types_response_instance = GetContactOptionTypesResponse.from_json(json)
# print the JSON string representation of the object
print(GetContactOptionTypesResponse.to_json())

# convert the object into a dict
get_contact_option_types_response_dict = get_contact_option_types_response_instance.to_dict()
# create an instance of GetContactOptionTypesResponse from a dict
get_contact_option_types_response_from_dict = GetContactOptionTypesResponse.from_dict(get_contact_option_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


