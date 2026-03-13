# User

A user in the system

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) | The user&#39;s address | [optional] 
**title** | **str** | The user&#39;s job title | [optional] 
**website** | **str** | The user&#39;s website URL | [optional] 
**partner** | **bool** | Whether the user is a partner | [optional] 
**admin** | **bool** | Whether the user is an admin | [optional] 
**status** | **str** | The user&#39;s status | [optional] 
**id** | **str** | The unique identifier of the user | [optional] 
**global_user_id** | **str** | The global user identifier across tenants | [optional] 
**keap_id** | **str** | The Keap ID of the user | [optional] 
**given_name** | **str** | The user&#39;s first name | [optional] 
**family_name** | **str** | The user&#39;s last name | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) | List of user&#39;s phone numbers | [optional] 
**fax_numbers** | [**List[FaxNumber]**](FaxNumber.md) | List of user&#39;s fax numbers | [optional] 
**email_addresses** | [**List[EmailAddress]**](EmailAddress.md) | List of user&#39;s email addresses | [optional] 
**social_accounts** | [**List[SocialAccount]**](SocialAccount.md) | List of user&#39;s social media accounts | [optional] 
**company_name** | **str** | The user&#39;s company name | [optional] 
**created_by** | **int** | ID of the user who created this user | [optional] 
**create_time** | **datetime** | When the user was created, in ISO-8601 format | [optional] 
**updated_by** | **int** | ID of the user who last updated this user | [optional] 
**update_time** | **datetime** | When the user was last updated, in ISO-8601 format | [optional] 

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


