# OpportunityContact


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_name** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**id** | **str** |  | 
**job_title** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**phone_number** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.opportunity_contact import OpportunityContact

# TODO update the JSON string below
json = "{}"
# create an instance of OpportunityContact from a JSON string
opportunity_contact_instance = OpportunityContact.from_json(json)
# print the JSON string representation of the object
print(OpportunityContact.to_json())

# convert the object into a dict
opportunity_contact_dict = opportunity_contact_instance.to_dict()
# create an instance of OpportunityContact from a dict
opportunity_contact_from_dict = OpportunityContact.from_dict(opportunity_contact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


