# BusinessProfileAddressResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** | An ISO 3166-1 Country Code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) | [optional] 
**line1** | **str** |  | [optional] 
**line2** | **str** |  | [optional] 
**locality** | **str** | The municipality to which the address belongs | [optional] 
**postal_code** | **str** |  | [optional] 
**region** | **str** | The long-name descriptive version of the Region Code | [optional] 

## Example

```python
from keap_core_v2_client.models.business_profile_address_response import BusinessProfileAddressResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessProfileAddressResponse from a JSON string
business_profile_address_response_instance = BusinessProfileAddressResponse.from_json(json)
# print the JSON string representation of the object
print(BusinessProfileAddressResponse.to_json())

# convert the object into a dict
business_profile_address_response_dict = business_profile_address_response_instance.to_dict()
# create an instance of BusinessProfileAddressResponse from a dict
business_profile_address_response_from_dict = BusinessProfileAddressResponse.from_dict(business_profile_address_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


