# CreateUserRequestV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin** | **bool** |  | [optional] 
**email_address** | [**EmailAddressRequest**](EmailAddressRequest.md) |  | 
**given_name** | **str** |  | 
**partner** | **bool** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.create_user_request_v2 import CreateUserRequestV2

# TODO update the JSON string below
json = "{}"
# create an instance of CreateUserRequestV2 from a JSON string
create_user_request_v2_instance = CreateUserRequestV2.from_json(json)
# print the JSON string representation of the object
print(CreateUserRequestV2.to_json())

# convert the object into a dict
create_user_request_v2_dict = create_user_request_v2_instance.to_dict()
# create an instance of CreateUserRequestV2 from a dict
create_user_request_v2_from_dict = CreateUserRequestV2.from_dict(create_user_request_v2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


