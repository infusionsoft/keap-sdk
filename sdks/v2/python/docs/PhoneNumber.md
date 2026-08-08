# PhoneNumber


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extension** | **str** | Phone extension | [optional] 
**number** | **str** | Phone number. Maximum length is 40 characters for PHONE1-PHONE3 and 20 characters for PHONE4-PHONE5. | [optional] 
**type** | **str** | Phone type | [optional] 
**var_field** | **str** | Phone number slot | [optional] 
**number_e164** | **str** | Phone number in E.164 format | [optional] 

## Example

```python
from keap_core_v2_client.models.phone_number import PhoneNumber

# TODO update the JSON string below
json = "{}"
# create an instance of PhoneNumber from a JSON string
phone_number_instance = PhoneNumber.from_json(json)
# print the JSON string representation of the object
print(PhoneNumber.to_json())

# convert the object into a dict
phone_number_dict = phone_number_instance.to_dict()
# create an instance of PhoneNumber from a dict
phone_number_from_dict = PhoneNumber.from_dict(phone_number_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


