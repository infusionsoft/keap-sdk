# BasicContact


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_time** | **str** | The time the tag was applied to the contact, in ISO 8601 format. | [optional] 
**email** | **str** |  | [optional] 
**family_name** | **str** |  | [optional] 
**given_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.basic_contact import BasicContact

# TODO update the JSON string below
json = "{}"
# create an instance of BasicContact from a JSON string
basic_contact_instance = BasicContact.from_json(json)
# print the JSON string representation of the object
print(BasicContact.to_json())

# convert the object into a dict
basic_contact_dict = basic_contact_instance.to_dict()
# create an instance of BasicContact from a dict
basic_contact_from_dict = BasicContact.from_dict(basic_contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


