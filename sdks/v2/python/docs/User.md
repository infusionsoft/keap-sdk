# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) |  | [optional] 
**admin** | **bool** |  | [optional] 
**company_name** | **str** |  | [optional] 
**create_time** | **str** |  | [optional] 
**created_by** | **int** |  | [optional] 
**email_addresses** | [**List[EmailAddress]**](EmailAddress.md) |  | [optional] 
**family_name** | **str** |  | [optional] 
**fax_numbers** | [**List[FaxNumber]**](FaxNumber.md) |  | [optional] 
**given_name** | **str** |  | [optional] 
**global_user_id** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**keap_id** | **str** |  | [optional] 
**partner** | **bool** |  | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) |  | [optional] 
**social_accounts** | [**List[SocialAccount]**](SocialAccount.md) |  | [optional] 
**status** | **str** |  | [optional] 
**time_zone** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**update_time** | **str** |  | [optional] 
**updated_by** | **int** |  | [optional] 
**website** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.user import User

# TODO update the JSON string below
json = "{}"
# create an instance of User from a JSON string
user_instance = User.from_json(json)
# print the JSON string representation of the object
print(User.to_json())

# convert the object into a dict
user_dict = user_instance.to_dict()
# create an instance of User from a dict
user_from_dict = User.from_dict(user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


