# AddressDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The long-name descriptive version of the Country Code | [optional] 
**line1** | **str** | Street address line 1 | [optional] 
**line2** | **str** | Street address line 2 | [optional] 
**locality** | **str** | The municipality to which the address belongs | [optional] 
**region** | **str** | The long-name descriptive version of the Region Code | [optional] 
**var_field** | **str** | Address type field | [optional] 
**country_code** | **str** | An ISO 3166-2 Country Code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) | [optional] 
**postal_code** | **str** | Postal or ZIP code | [optional] 
**region_code** | **str** | An ISO 3166-2 Province Code, such as one of the US States (https://en.wikipedia.org/wiki/ISO_3166-2:US) | [optional] 
**zip_code** | **str** | ZIP code (US) | [optional] 
**zip_four** | **str** | ZIP+4 extension | [optional] 

## Example

```python
from keap_core_v2_client.models.address_detail import AddressDetail

# TODO update the JSON string below
json = "{}"
# create an instance of AddressDetail from a JSON string
address_detail_instance = AddressDetail.from_json(json)
# print the JSON string representation of the object
print(AddressDetail.to_json())

# convert the object into a dict
address_detail_dict = address_detail_instance.to_dict()
# create an instance of AddressDetail from a dict
address_detail_from_dict = AddressDetail.from_dict(address_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


