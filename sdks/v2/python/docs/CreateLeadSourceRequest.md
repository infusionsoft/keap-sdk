# CreateLeadSourceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**end_time** | **str** |  | [optional] 
**lead_source_category_id** | **str** |  | [optional] 
**medium** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**start_time** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**vendor** | **str** |  | [optional] 

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


