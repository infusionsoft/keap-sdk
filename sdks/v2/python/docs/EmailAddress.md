# EmailAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**email_opt_status** | **str** |  | [optional] 
**var_field** | **str** |  | [optional] 
**is_opt_in** | **bool** |  | [optional] 
**opt_in_reason** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.email_address import EmailAddress

# TODO update the JSON string below
json = "{}"
# create an instance of EmailAddress from a JSON string
email_address_instance = EmailAddress.from_json(json)
# print the JSON string representation of the object
print(EmailAddress.to_json())

# convert the object into a dict
email_address_dict = email_address_instance.to_dict()
# create an instance of EmailAddress from a dict
email_address_from_dict = EmailAddress.from_dict(email_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


