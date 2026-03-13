# RestEmailAddressStatus

Email address opt-in status information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address | 
**opted_in** | **bool** | Whether the email address is opted in for marketing | 
**status** | **str** | The opt-in status of the email address | 
**create_time** | **datetime** | When the email status was first recorded, in ISO-8601 format | 
**last_click_time** | **datetime** | The most recent click on an email sent to this address, in ISO-8601 format | [optional] 
**last_open_time** | **datetime** | The most recent open of an email sent to this address, in ISO-8601 format | [optional] 
**last_sent_time** | **datetime** | The most recent time an email was sent to this address, in ISO-8601 format | [optional] 

## Example

```python
from keap_core_v2_client.models.rest_email_address_status import RestEmailAddressStatus

# TODO update the JSON string below
json = "{}"
# create an instance of RestEmailAddressStatus from a JSON string
rest_email_address_status_instance = RestEmailAddressStatus.from_json(json)
# print the JSON string representation of the object
print(RestEmailAddressStatus.to_json())

# convert the object into a dict
rest_email_address_status_dict = rest_email_address_status_instance.to_dict()
# create an instance of RestEmailAddressStatus from a dict
rest_email_address_status_from_dict = RestEmailAddressStatus.from_dict(rest_email_address_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


