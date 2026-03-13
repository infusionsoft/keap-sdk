# AddressRequestDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line1** | **str** |  | [optional] 
**line2** | **str** |  | [optional] 
**locality** | **str** | The municipality to which the address belongs | [optional] 
**var_field** | **str** | Address type field | [optional] 
**country_code** | **str** | An ISO 3166-2 Country Code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) | [optional] 
**postal_code** | **str** |  | [optional] 
**region_code** | **str** | An ISO 3166-2 Province Code, such as one of the US States (https://en.wikipedia.org/wiki/ISO_3166-2:US) | [optional] 

## Example

```python
from keap_core_v2_client.models.address_request_detail import AddressRequestDetail

# TODO update the JSON string below
json = "{}"
# create an instance of AddressRequestDetail from a JSON string
address_request_detail_instance = AddressRequestDetail.from_json(json)
# print the JSON string representation of the object
print(AddressRequestDetail.to_json())

# convert the object into a dict
address_request_detail_dict = address_request_detail_instance.to_dict()
# create an instance of AddressRequestDetail from a dict
address_request_detail_from_dict = AddressRequestDetail.from_dict(address_request_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


