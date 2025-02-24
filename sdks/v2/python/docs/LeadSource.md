# LeadSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**end_time** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**lead_source_category_id** | **str** |  | [optional] 
**medium** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**start_time** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**vendor** | **str** |  | [optional] 

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


