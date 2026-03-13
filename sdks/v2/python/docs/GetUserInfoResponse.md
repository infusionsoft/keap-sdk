# GetUserInfoResponse

User information response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The user&#39;s email address | [optional] 
**sub** | **str** | The subject identifier | [optional] 
**id** | **str** | The global user identifier | [optional] 
**keap_id** | **str** | The keap user identifier | [optional] 
**family_name** | **str** | The user&#39;s last name | [optional] 
**given_name** | **str** | The user&#39;s first name | [optional] 
**middle_name** | **str** | The user&#39;s middle name | [optional] 
**preferred_name** | **str** | The user&#39;s preferred name | [optional] 
**is_admin** | **bool** | Whether the user is an admin | [optional] 
**tenant_id** | **str** | The tenant ID the user belongs to | [optional] 

## Example

```python
from keap_core_v2_client.models.get_user_info_response import GetUserInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetUserInfoResponse from a JSON string
get_user_info_response_instance = GetUserInfoResponse.from_json(json)
# print the JSON string representation of the object
print(GetUserInfoResponse.to_json())

# convert the object into a dict
get_user_info_response_dict = get_user_info_response_instance.to_dict()
# create an instance of GetUserInfoResponse from a dict
get_user_info_response_from_dict = GetUserInfoResponse.from_dict(get_user_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


