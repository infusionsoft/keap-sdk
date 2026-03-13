# CreateCompanyRequest

company

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) | The company&#39;s address | [optional] 
**notes** | **str** | Notes about the company | [optional] 
**website** | **str** | The company&#39;s website URL | [optional] 
**company_name** | **str** | The name of the company | [optional] 
**custom_fields** | [**List[CustomFieldValue]**](CustomFieldValue.md) |  | [optional] 
**email_address** | [**EmailAddress**](EmailAddress.md) |  | [optional] 
**fax_number** | [**FaxNumber**](FaxNumber.md) |  | [optional] 
**phone_number** | [**PhoneNumber**](PhoneNumber.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.create_company_request import CreateCompanyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCompanyRequest from a JSON string
create_company_request_instance = CreateCompanyRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCompanyRequest.to_json())

# convert the object into a dict
create_company_request_dict = create_company_request_instance.to_dict()
# create an instance of CreateCompanyRequest from a dict
create_company_request_from_dict = CreateCompanyRequest.from_dict(create_company_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


