# CountryCodes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alpha2** | **str** |  | [optional] 
**alpha3** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.country_codes import CountryCodes

# TODO update the JSON string below
json = "{}"
# create an instance of CountryCodes from a JSON string
country_codes_instance = CountryCodes.from_json(json)
# print the JSON string representation of the object
print(CountryCodes.to_json())

# convert the object into a dict
country_codes_dict = country_codes_instance.to_dict()
# create an instance of CountryCodes from a dict
country_codes_from_dict = CountryCodes.from_dict(country_codes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


