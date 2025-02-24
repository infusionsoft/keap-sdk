# RestV2Opportunity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate_id** | **str** |  | [optional] 
**contact** | [**OpportunityContact**](OpportunityContact.md) |  | 
**created_time** | **str** |  | [optional] 
**custom_fields** | [**List[CustomField]**](CustomField.md) |  | [optional] 
**estimated_close_time** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**include_in_forecast** | **bool** |  | [optional] 
**last_updated_time** | **str** |  | [optional] 
**next_action_notes** | **str** |  | [optional] 
**next_action_time** | **str** |  | [optional] 
**opportunity_notes** | **str** |  | [optional] 
**opportunity_title** | **str** |  | 
**projected_revenue_high** | **float** |  | [optional] 
**projected_revenue_low** | **float** |  | [optional] 
**stage** | [**OpportunityStage**](OpportunityStage.md) |  | 
**user** | [**RestV2User**](RestV2User.md) |  | [optional] 

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


