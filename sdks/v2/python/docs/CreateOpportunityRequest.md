# CreateOpportunityRequest

opportunity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**opportunity_title** | **str** | Opportunity title | 
**next_action_time** | **str** | Next action timestamp (ISO-8601) | [optional] 
**next_action_notes** | **str** | Notes for next action | [optional] 
**opportunity_notes** | **str** | General notes | [optional] 
**estimated_close_time** | **str** | Estimated close timestamp (ISO-8601) | [optional] 
**include_in_forecast** | **bool** | Include in sales forecast | [optional] 
**projected_revenue_low** | **float** | Low revenue estimate | [optional] 
**projected_revenue_high** | **float** | High revenue estimate | [optional] 
**contact_id** | **str** | Associated contact ID | [optional] 
**stage_id** | **str** | Pipeline stage ID | [optional] 
**user_id** | **str** | Assigned user ID | [optional] 
**custom_fields** | [**List[CustomField]**](CustomField.md) |  | [optional] 
**affiliate_id** | **str** | Affiliate ID | [optional] 

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


