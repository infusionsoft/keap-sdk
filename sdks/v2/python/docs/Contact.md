# Contact


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**List[Address]**](Address.md) |  | [optional] 
**anniversary_date** | **str** |  | [optional] 
**birth_date** | **str** |  | [optional] 
**company** | [**BasicCompany**](BasicCompany.md) |  | [optional] 
**contact_type** | **str** |  | [optional] 
**create_time** | **str** |  | [optional] 
**custom_fields** | [**List[CustomFieldValue]**](CustomFieldValue.md) |  | [optional] 
**email_addresses** | [**List[EmailAddress]**](EmailAddress.md) |  | [optional] 
**family_name** | **str** |  | [optional] 
**fax_numbers** | [**List[FaxNumber]**](FaxNumber.md) |  | [optional] 
**given_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**job_title** | **str** |  | [optional] 
**leadsource_id** | **str** |  | [optional] 
**links** | [**List[Link]**](Link.md) |  | [optional] 
**middle_name** | **str** |  | [optional] 
**origin** | [**Origin**](Origin.md) |  | [optional] 
**owner_id** | **str** |  | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) |  | [optional] 
**preferred_locale** | **str** |  | [optional] 
**preferred_name** | **str** |  | [optional] 
**prefix** | **str** |  | [optional] 
**referral_code** | **str** |  | [optional] 
**score_value** | **str** |  | [optional] 
**social_accounts** | [**List[SocialAccount]**](SocialAccount.md) |  | [optional] 
**source_type** | **str** |  | [optional] 
**spouse_name** | **str** |  | [optional] 
**suffix** | **str** |  | [optional] 
**tag_ids** | **List[str]** |  | [optional] 
**time_zone** | **str** |  | [optional] 
**update_time** | **str** |  | [optional] 
**utm_parameters** | [**List[ContactUtmResponse]**](ContactUtmResponse.md) |  | [optional] 
**website** | **str** |  | [optional] 

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


