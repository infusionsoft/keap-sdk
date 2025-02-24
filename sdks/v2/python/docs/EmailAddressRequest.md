# EmailAddressRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**var_field** | **str** |  | [optional] 
**opt_in_reason** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.email_address_request import EmailAddressRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EmailAddressRequest from a JSON string
email_address_request_instance = EmailAddressRequest.from_json(json)
# print the JSON string representation of the object
print(EmailAddressRequest.to_json())

# convert the object into a dict
email_address_request_dict = email_address_request_instance.to_dict()
# create an instance of EmailAddressRequest from a dict
email_address_request_from_dict = EmailAddressRequest.from_dict(email_address_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


