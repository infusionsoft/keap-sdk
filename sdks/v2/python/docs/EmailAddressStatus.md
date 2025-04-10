# EmailAddressStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | 
**opted_in** | **bool** |  | 
**status** | **str** |  | 

## Example

```python
from keap_core_v2_client.models.email_address_status import EmailAddressStatus

# TODO update the JSON string below
json = "{}"
# create an instance of EmailAddressStatus from a JSON string
email_address_status_instance = EmailAddressStatus.from_json(json)
# print the JSON string representation of the object
print(EmailAddressStatus.to_json())

# convert the object into a dict
email_address_status_dict = email_address_status_instance.to_dict()
# create an instance of EmailAddressStatus from a dict
email_address_status_from_dict = EmailAddressStatus.from_dict(email_address_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


