# UpdateUserRequest

user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) | The user&#39;s address | [optional] 
**title** | **str** | The user&#39;s job title | [optional] 
**website** | **str** | The user&#39;s website URL | [optional] 
**company_name** | **str** | The user&#39;s company name | [optional] 
**email_address** | [**EmailAddressRequest**](EmailAddressRequest.md) | The user&#39;s email address | [optional] 
**family_name** | **str** | The user&#39;s last name | [optional] 
**fax_numbers** | [**List[FaxNumber]**](FaxNumber.md) | List of user&#39;s fax numbers | [optional] 
**given_name** | **str** | The user&#39;s first name | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) | List of user&#39;s phone numbers | [optional] 
**time_zone** | **str** | The user&#39;s timezone in IANA format | [optional] 

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


