# BusinessProfileAddressRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** | An ISO 3166-1 Country Code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) | 
**line1** | **str** |  | 
**line2** | **str** |  | 
**locality** | **str** | The municipality to which the address belongs | 
**postal_code** | **str** |  | 
**region** | **str** | The long-name descriptive version of the Region Code | 

## Example

```python
from keap_core_v2_client.models.business_profile_address_request import BusinessProfileAddressRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessProfileAddressRequest from a JSON string
business_profile_address_request_instance = BusinessProfileAddressRequest.from_json(json)
# print the JSON string representation of the object
print(BusinessProfileAddressRequest.to_json())

# convert the object into a dict
business_profile_address_request_dict = business_profile_address_request_instance.to_dict()
# create an instance of BusinessProfileAddressRequest from a dict
business_profile_address_request_from_dict = BusinessProfileAddressRequest.from_dict(business_profile_address_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


