# Company


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier | [optional] 
**address** | [**Address**](Address.md) | The company&#39;s address | [optional] 
**notes** | **str** | Notes about the company | [optional] 
**website** | **str** | The company&#39;s website URL | [optional] 
**suffix** | **str** | Name suffix | [optional] 
**title** | **str** | Name prefix or salutation | [optional] 
**groups** | **str** | Comma-delimited list of tag IDs applied to this company | [optional] 
**company_name** | **str** | The name of the company | [optional] 
**custom_fields** | [**List[CustomFieldValue]**](CustomFieldValue.md) |  | [optional] 
**email_address** | [**EmailAddress**](EmailAddress.md) |  | [optional] 
**fax_number** | [**FaxNumber**](FaxNumber.md) |  | [optional] 
**phone_number** | [**PhoneNumber**](PhoneNumber.md) |  | [optional] 
**update_time** | **str** | Last update timestamp (ISO-8601) | [optional] 
**create_time** | **str** | Creation timestamp (ISO-8601) | [optional] 
**anniversary_date** | **str** | The anniversary date | [optional] 
**assistant_name** | **str** | The name of the company contact&#39;s assistant | [optional] 
**assistant_phone** | **str** | The phone number of the company contact&#39;s assistant | [optional] 
**billing_information** | **str** | Billing information for the company | [optional] 
**birth_date** | **str** | The birth date | [optional] 
**contact_type** | **str** | Type of contact | [optional] 
**first_name** | **str** | First name of the company contact | [optional] 
**job_title** | **str** | Job title of the company contact | [optional] 
**last_name** | **str** | Last name of the company contact | [optional] 
**middle_name** | **str** | Middle name of the company contact | [optional] 
**preferred_name** | **str** | Preferred name or nickname of the company contact | [optional] 
**owner_id** | **str** | ID of the user who owns this company | [optional] 
**referral_code** | **str** | Referral code | [optional] 
**spouse_name** | **str** | Spouse&#39;s name | [optional] 
**account_id** | **str** | The company&#39;s account ID | [optional] 
**created_by** | **str** | ID of the user who created this company | [optional] 
**last_updated_by** | **str** | ID of the user who last updated this company | [optional] 

## Example

```python
from keap_core_v2_client.models.company import Company

# TODO update the JSON string below
json = "{}"
# create an instance of Company from a JSON string
company_instance = Company.from_json(json)
# print the JSON string representation of the object
print(Company.to_json())

# convert the object into a dict
company_dict = company_instance.to_dict()
# create an instance of Company from a dict
company_from_dict = Company.from_dict(company_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


