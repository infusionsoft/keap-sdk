# DealContact

Represents a contact entity in the system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the model. | [optional] 
**primary_contact** | **bool** | Indicates if this contact is the primary contact. This field is required. | 

## Example

```python
from keap_core_v2_client.models.deal_contact import DealContact

# TODO update the JSON string below
json = "{}"
# create an instance of DealContact from a JSON string
deal_contact_instance = DealContact.from_json(json)
# print the JSON string representation of the object
print(DealContact.to_json())

# convert the object into a dict
deal_contact_dict = deal_contact_instance.to_dict()
# create an instance of DealContact from a dict
deal_contact_from_dict = DealContact.from_dict(deal_contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


