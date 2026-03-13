# LeadSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier for this lead source | [optional] 
**name** | **str** | The name of the lead source | [optional] 
**description** | **str** | The description of the lead source | [optional] 
**vendor** | **str** | The vendor of the lead source | [optional] 
**medium** | **str** | The medium of the lead source | [optional] 
**message** | **str** | The message/content of the lead source | [optional] 
**status** | **str** | The status of the lead source | [optional] 
**lead_source_category_id** | **str** | The ID of the category that the lead source belongs to | [optional] 
**start_time** | **datetime** | The time that this lead source started | [optional] 
**end_time** | **datetime** | The time that this lead source will end | [optional] 
**create_time** | **datetime** | The time that this lead source was created | [optional] 
**update_time** | **datetime** | The time that this lead source was last updated | [optional] 

## Example

```python
from keap_core_v2_client.models.lead_source import LeadSource

# TODO update the JSON string below
json = "{}"
# create an instance of LeadSource from a JSON string
lead_source_instance = LeadSource.from_json(json)
# print the JSON string representation of the object
print(LeadSource.to_json())

# convert the object into a dict
lead_source_dict = lead_source_instance.to_dict()
# create an instance of LeadSource from a dict
lead_source_from_dict = LeadSource.from_dict(lead_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


