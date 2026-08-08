# Address


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | Deprecated. The long-name descriptive version of the Country Code. Please use &#39;country_code&#39; for POST/PATCH operations. Maximum length is 100 characters. | [optional] 
**line1** | **str** | Street address line 1. Maximum length is 75 characters for the BILLING address and 100 characters for the SHIPPING and OTHER addresses. | [optional] 
**line2** | **str** | Street address line 2. Maximum length is 75 characters for the BILLING address and 100 characters for the SHIPPING and OTHER addresses. | [optional] 
**locality** | **str** | The municipality to which the address belongs. Maximum length is 50 characters for the BILLING address and 100 characters for the SHIPPING and OTHER addresses. | [optional] 
**region** | **str** | The long-name descriptive version of the Region Code. Please use &#39;region_code&#39; for POST/PATCH operations. Maximum length is 50 characters. | [optional] 
**var_field** | **str** | Address type field | [optional] 
**country_code** | **str** | An ISO 3166-2 Country Code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) | [optional] 
**postal_code** | **str** | Postal or ZIP code. Maximum length is 15 characters for the BILLING and OTHER addresses and 20 characters for the SHIPPING address. | [optional] 
**region_code** | **str** | An ISO 3166-2 Province Code, such as one of the US States (https://en.wikipedia.org/wiki/ISO_3166-2:US) | [optional] 
**zip_code** | **str** | ZIP code (US). Maximum length is 15 characters for the BILLING and OTHER addresses and 20 characters for the SHIPPING address. | [optional] 
**zip_four** | **str** | ZIP+4 extension. Maximum length is 10 characters. | [optional] 

## Example

```python
from keap_core_v2_client.models.address import Address

# TODO update the JSON string below
json = "{}"
# create an instance of Address from a JSON string
address_instance = Address.from_json(json)
# print the JSON string representation of the object
print(Address.to_json())

# convert the object into a dict
address_dict = address_instance.to_dict()
# create an instance of Address from a dict
address_from_dict = Address.from_dict(address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


