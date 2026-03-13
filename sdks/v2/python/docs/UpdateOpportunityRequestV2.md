# UpdateOpportunityRequestV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**opportunity_title** | **str** | Opportunity title | [optional] 
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
from keap_core_v2_client.models.update_opportunity_request_v2 import UpdateOpportunityRequestV2

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOpportunityRequestV2 from a JSON string
update_opportunity_request_v2_instance = UpdateOpportunityRequestV2.from_json(json)
# print the JSON string representation of the object
print(UpdateOpportunityRequestV2.to_json())

# convert the object into a dict
update_opportunity_request_v2_dict = update_opportunity_request_v2_instance.to_dict()
# create an instance of UpdateOpportunityRequestV2 from a dict
update_opportunity_request_v2_from_dict = UpdateOpportunityRequestV2.from_dict(update_opportunity_request_v2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


