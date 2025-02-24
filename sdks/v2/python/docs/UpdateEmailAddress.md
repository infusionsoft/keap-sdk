# UpdateEmailAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**opted_in** | **bool** |  | 
**reason** | **str** |  | 

## Example

```python
from keap_core_v2_client.models.update_email_address import UpdateEmailAddress

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateEmailAddress from a JSON string
update_email_address_instance = UpdateEmailAddress.from_json(json)
# print the JSON string representation of the object
print(UpdateEmailAddress.to_json())

# convert the object into a dict
update_email_address_dict = update_email_address_instance.to_dict()
# create an instance of UpdateEmailAddress from a dict
update_email_address_from_dict = UpdateEmailAddress.from_dict(update_email_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


