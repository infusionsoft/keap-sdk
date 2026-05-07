# RestV2Opportunity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Opportunity ID | [optional] 
**contact** | [**OpportunityContact**](OpportunityContact.md) |  | 
**stage** | [**OpportunityStage**](OpportunityStage.md) |  | 
**user** | [**RestV2User**](RestV2User.md) |  | [optional] 
**opportunity_title** | **str** | Opportunity title | 
**next_action_time** | **str** | Next action timestamp (ISO-8601) | [optional] 
**next_action_notes** | **str** | Notes for next action | [optional] 
**opportunity_notes** | **str** | General notes | [optional] 
**estimated_close_time** | **str** | Estimated close timestamp (ISO-8601) | [optional] 
**include_in_forecast** | **bool** | Include in sales forecast | [optional] 
**projected_revenue_low** | **float** | Low revenue estimate | [optional] 
**projected_revenue_high** | **float** | High revenue estimate | [optional] 
**custom_fields** | [**List[CustomField]**](CustomField.md) |  | [optional] 
**created_time** | **str** | Creation timestamp (ISO-8601) | [optional] 
**last_updated_time** | **str** | Last update timestamp (ISO-8601) | [optional] 
**affiliate_id** | **str** | Affiliate ID | [optional] 
**lead_source** | **str** | Lead source | [optional] 

## Example

```python
from keap_core_v2_client.models.rest_v2_opportunity import RestV2Opportunity

# TODO update the JSON string below
json = "{}"
# create an instance of RestV2Opportunity from a JSON string
rest_v2_opportunity_instance = RestV2Opportunity.from_json(json)
# print the JSON string representation of the object
print(RestV2Opportunity.to_json())

# convert the object into a dict
rest_v2_opportunity_dict = rest_v2_opportunity_instance.to_dict()
# create an instance of RestV2Opportunity from a dict
rest_v2_opportunity_from_dict = RestV2Opportunity.from_dict(rest_v2_opportunity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


