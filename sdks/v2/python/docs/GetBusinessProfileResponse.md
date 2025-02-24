# GetBusinessProfileResponse

Profile information about the business that owns/uses this account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**BusinessProfileAddressResponse**](BusinessProfileAddressResponse.md) |  | [optional] 
**business_goals** | **List[str]** | The goals of this business, ie. Grow Business, Convert more leads | [optional] 
**business_primary_color** | **str** |  | [optional] 
**business_secondary_color** | **str** |  | [optional] 
**business_type** | **str** | The type of business | [optional] 
**currency_code** | **str** | ISO 4217 Currency Code | [optional] 
**email** | **str** |  | [optional] 
**language_tag** | **str** |  | [optional] 
**logo_url** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**phone** | **str** |  | [optional] 
**time_zone** | **str** |  | [optional] 
**website** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.get_business_profile_response import GetBusinessProfileResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetBusinessProfileResponse from a JSON string
get_business_profile_response_instance = GetBusinessProfileResponse.from_json(json)
# print the JSON string representation of the object
print(GetBusinessProfileResponse.to_json())

# convert the object into a dict
get_business_profile_response_dict = get_business_profile_response_instance.to_dict()
# create an instance of GetBusinessProfileResponse from a dict
get_business_profile_response_from_dict = GetBusinessProfileResponse.from_dict(get_business_profile_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


