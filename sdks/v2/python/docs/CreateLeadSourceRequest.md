# CreateLeadSourceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A description of the lead source | [optional] 
**end_time** | **str** | When the lead source ends | [optional] 
**lead_source_category_id** | **str** | The lead source category that the lead source belongs to | [optional] 
**medium** | **str** | The medium of the lead source | [optional] 
**message** | **str** | A message on the lead source | [optional] 
**name** | **str** | The name of the lead source | [optional] 
**start_time** | **str** | When the lead source starts | [optional] 
**status** | **str** | The status of the lead source | [optional] 
**vendor** | **str** | The vendor of the lead source | [optional] 

## Example

```python
from keap_core_v2_client.models.create_lead_source_request import CreateLeadSourceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateLeadSourceRequest from a JSON string
create_lead_source_request_instance = CreateLeadSourceRequest.from_json(json)
# print the JSON string representation of the object
print(CreateLeadSourceRequest.to_json())

# convert the object into a dict
create_lead_source_request_dict = create_lead_source_request_instance.to_dict()
# create an instance of CreateLeadSourceRequest from a dict
create_lead_source_request_from_dict = CreateLeadSourceRequest.from_dict(create_lead_source_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


