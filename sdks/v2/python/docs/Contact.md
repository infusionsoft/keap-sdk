# Contact


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier | [optional] 
**links** | [**List[Link]**](Link.md) |  | [optional] 
**addresses** | [**List[Address]**](Address.md) |  | [optional] 
**company** | [**BasicCompany**](BasicCompany.md) | Associated company | [optional] 
**origin** | [**Origin**](Origin.md) |  | [optional] 
**prefix** | **str** | Name prefix | [optional] 
**suffix** | **str** | Name suffix | [optional] 
**website** | **str** | Personal website URL | [optional] 
**groups** | **str** |  | [optional] 
**update_time** | **str** | Last update timestamp (ISO-8601) | [optional] 
**create_time** | **str** | Creation timestamp (ISO-8601) | [optional] 
**score_value** | **str** | Contact score value | [optional] 
**tag_ids** | **List[str]** |  | [optional] 
**anniversary_date** | **str** | The anniversary date | [optional] 
**birth_date** | **str** | The birth date | [optional] 
**contact_type** | **str** | Type of contact | [optional] 
**custom_fields** | [**List[CustomFieldValue]**](CustomFieldValue.md) |  | [optional] 
**email_addresses** | [**List[EmailAddress]**](EmailAddress.md) |  | [optional] 
**family_name** | **str** | Last name / surname | [optional] 
**fax_numbers** | [**List[FaxNumber]**](FaxNumber.md) |  | [optional] 
**given_name** | **str** | First name | [optional] 
**job_title** | **str** | Job title | [optional] 
**leadsource_id** | **str** | Lead source identifier | [optional] 
**middle_name** | **str** | Middle name | [optional] 
**owner_id** | **str** | ID of the user who owns this contact | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) |  | [optional] 
**preferred_locale** | **str** | Preferred locale | [optional] 
**preferred_name** | **str** | Preferred name or nickname | [optional] 
**referral_code** | **str** | Referral code | [optional] 
**social_accounts** | [**List[SocialAccount]**](SocialAccount.md) |  | [optional] 
**source_type** | **str** |  | [optional] 
**spouse_name** | **str** | Spouse&#39;s name | [optional] 
**time_zone** | **str** | Contact&#39;s timezone | [optional] 
**utm_parameters** | [**List[ContactUtmResponse]**](ContactUtmResponse.md) |  | [optional] 
**account_id** | **str** |  | [optional] 
**assistant_name** | **str** |  | [optional] 
**assistant_phone** | **str** |  | [optional] 
**billing_information** | **str** |  | [optional] 
**created_by** | **str** |  | [optional] 
**last_updated_by** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.contact import Contact

# TODO update the JSON string below
json = "{}"
# create an instance of Contact from a JSON string
contact_instance = Contact.from_json(json)
# print the JSON string representation of the object
print(Contact.to_json())

# convert the object into a dict
contact_dict = contact_instance.to_dict()
# create an instance of Contact from a dict
contact_from_dict = Contact.from_dict(contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


