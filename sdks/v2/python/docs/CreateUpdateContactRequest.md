# CreateUpdateContactRequest

contact

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**List[Address]**](Address.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**company** | [**BasicCompany**](BasicCompany.md) |  | [optional] 
**origin** | [**OriginRequest**](OriginRequest.md) |  | [optional] 
**prefix** | **str** | Name prefix | [optional] 
**suffix** | **str** | Name suffix | [optional] 
**website** | **str** | Personal website URL | [optional] 
**anniversary_date** | **str** | The anniversary date | [optional] 
**birth_date** | **str** | The birth date | [optional] 
**contact_type** | **str** | Type of contact | [optional] 
**custom_fields** | [**List[CustomFieldValue]**](CustomFieldValue.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**email_addresses** | [**List[EmailAddressRequest]**](EmailAddressRequest.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**family_name** | **str** | Last name / surname | [optional] 
**fax_numbers** | [**List[FaxNumber]**](FaxNumber.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**given_name** | **str** | First name | [optional] 
**job_title** | **str** | Job title | [optional] 
**leadsource_id** | **str** | Lead source identifier | [optional] 
**middle_name** | **str** | Middle name | [optional] 
**owner_id** | **str** | ID of the user who owns this contact | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**preferred_locale** | **str** | Preferred locale | [optional] 
**preferred_name** | **str** | Preferred name or nickname | [optional] 
**referral_code** | **str** | Referral code | [optional] 
**social_accounts** | [**List[SocialAccount]**](SocialAccount.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**source_type** | **str** |  | [optional] 
**spouse_name** | **str** | Spouse&#39;s name | [optional] 
**time_zone** | **str** | Contact&#39;s timezone | [optional] 
**utm_parameters** | [**CreateContactUtmPropertiesRequest**](CreateContactUtmPropertiesRequest.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.create_update_contact_request import CreateUpdateContactRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateUpdateContactRequest from a JSON string
create_update_contact_request_instance = CreateUpdateContactRequest.from_json(json)
# print the JSON string representation of the object
print(CreateUpdateContactRequest.to_json())

# convert the object into a dict
create_update_contact_request_dict = create_update_contact_request_instance.to_dict()
# create an instance of CreateUpdateContactRequest from a dict
create_update_contact_request_from_dict = CreateUpdateContactRequest.from_dict(create_update_contact_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


