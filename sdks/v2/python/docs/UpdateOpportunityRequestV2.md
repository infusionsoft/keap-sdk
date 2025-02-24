# UpdateOpportunityRequestV2


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
**opportunity_title** | **str** |  | [optional] 
**projected_revenue_high** | **float** |  | [optional] 
**projected_revenue_low** | **float** |  | [optional] 
**stage_id** | **str** |  | [optional] 
**user_id** | **str** |  | [optional] 

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


