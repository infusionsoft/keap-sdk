# StageDealListResponse

Response for a list of deals in a stage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token for the next page of results. | [optional] 
**deals** | [**List[Deal]**](Deal.md) | The list of deals in a stage. | [optional] 

## Example

```python
from keap_core_v2_client.models.stage_deal_list_response import StageDealListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StageDealListResponse from a JSON string
stage_deal_list_response_instance = StageDealListResponse.from_json(json)
# print the JSON string representation of the object
print(StageDealListResponse.to_json())

# convert the object into a dict
stage_deal_list_response_dict = stage_deal_list_response_instance.to_dict()
# create an instance of StageDealListResponse from a dict
stage_deal_list_response_from_dict = StageDealListResponse.from_dict(stage_deal_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


