# RestEmailAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | 
**opted_in** | **bool** |  | 
**status** | **str** |  | 

## Example

```python
from keap_core_v2_client.models.rest_email_address import RestEmailAddress

# TODO update the JSON string below
json = "{}"
# create an instance of RestEmailAddress from a JSON string
rest_email_address_instance = RestEmailAddress.from_json(json)
# print the JSON string representation of the object
print(RestEmailAddress.to_json())

# convert the object into a dict
rest_email_address_dict = rest_email_address_instance.to_dict()
# create an instance of RestEmailAddress from a dict
rest_email_address_from_dict = RestEmailAddress.from_dict(rest_email_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


