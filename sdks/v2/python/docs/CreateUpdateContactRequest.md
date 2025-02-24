# CreateUpdateContactRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**List[Address]**](Address.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**anniversary_date** | **str** |  | [optional] 
**birth_date** | **str** |  | [optional] 
**company** | [**BasicCompany**](BasicCompany.md) |  | [optional] 
**contact_type** | **str** |  | [optional] 
**custom_fields** | [**List[CustomFieldValue]**](CustomFieldValue.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**email_addresses** | [**List[EmailAddressRequest]**](EmailAddressRequest.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**family_name** | **str** |  | [optional] 
**fax_numbers** | [**List[FaxNumber]**](FaxNumber.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**given_name** | **str** |  | [optional] 
**job_title** | **str** |  | [optional] 
**leadsource_id** | **str** |  | [optional] 
**middle_name** | **str** |  | [optional] 
**origin** | [**OriginRequest**](OriginRequest.md) |  | [optional] 
**owner_id** | **str** |  | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**preferred_locale** | **str** |  | [optional] 
**preferred_name** | **str** |  | [optional] 
**prefix** | **str** |  | [optional] 
**referral_code** | **str** |  | [optional] 
**social_accounts** | [**List[SocialAccount]**](SocialAccount.md) | Any address not listed here will be removed if it already exists. If an empty array is specified, all existing values will be removed. | [optional] 
**source_type** | **str** |  | [optional] 
**spouse_name** | **str** |  | [optional] 
**suffix** | **str** |  | [optional] 
**time_zone** | **str** |  | [optional] 
**utm_parameters** | [**CreateContactUtmPropertiesRequest**](CreateContactUtmPropertiesRequest.md) |  | [optional] 
**website** | **str** |  | [optional] 

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


