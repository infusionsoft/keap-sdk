# GetUserInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**family_name** | **str** |  | [optional] 
**given_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**is_admin** | **bool** |  | [optional] 
**keap_id** | **str** |  | [optional] 
**middle_name** | **str** |  | [optional] 
**preferred_name** | **str** |  | [optional] 
**sub** | **str** |  | [optional] 

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


