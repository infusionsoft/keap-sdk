# CreateOpportunityRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate_id** | **str** |  | [optional] 
**contact_id** | **str** |  | [optional] 
**custom_fields** | [**List[CustomField]**](CustomField.md) |  | [optional] 
**estimated_close_time** | **str** |  | [optional] 
**include_in_forecast** | **bool** |  | [optional] 
**next_action_notes** | **str** |  | [optional] 
**next_action_time** | **str** |  | [optional] 
**opportunity_notes** | **str** |  | [optional] 
**opportunity_title** | **str** |  | 
**projected_revenue_high** | **float** |  | [optional] 
**projected_revenue_low** | **float** |  | [optional] 
**stage_id** | **str** |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.create_opportunity_request import CreateOpportunityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOpportunityRequest from a JSON string
create_opportunity_request_instance = CreateOpportunityRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOpportunityRequest.to_json())

# convert the object into a dict
create_opportunity_request_dict = create_opportunity_request_instance.to_dict()
# create an instance of CreateOpportunityRequest from a dict
create_opportunity_request_from_dict = CreateOpportunityRequest.from_dict(create_opportunity_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


