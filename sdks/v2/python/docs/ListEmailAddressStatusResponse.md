# ListEmailAddressStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_addresses** | [**List[RestEmailAddressStatus]**](RestEmailAddressStatus.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_email_address_status_response import ListEmailAddressStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListEmailAddressStatusResponse from a JSON string
list_email_address_status_response_instance = ListEmailAddressStatusResponse.from_json(json)
# print the JSON string representation of the object
print(ListEmailAddressStatusResponse.to_json())

# convert the object into a dict
list_email_address_status_response_dict = list_email_address_status_response_instance.to_dict()
# create an instance of ListEmailAddressStatusResponse from a dict
list_email_address_status_response_from_dict = ListEmailAddressStatusResponse.from_dict(list_email_address_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


