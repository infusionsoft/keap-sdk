# UpdateUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) |  | [optional] 
**company_name** | **str** |  | [optional] 
**email_address** | [**EmailAddressRequest**](EmailAddressRequest.md) |  | [optional] 
**family_name** | **str** |  | [optional] 
**fax_numbers** | [**List[FaxNumber]**](FaxNumber.md) |  | [optional] 
**given_name** | **str** |  | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) |  | [optional] 
**time_zone** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**website** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.update_user_request import UpdateUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateUserRequest from a JSON string
update_user_request_instance = UpdateUserRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateUserRequest.to_json())

# convert the object into a dict
update_user_request_dict = update_user_request_instance.to_dict()
# create an instance of UpdateUserRequest from a dict
update_user_request_from_dict = UpdateUserRequest.from_dict(update_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


