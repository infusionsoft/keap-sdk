# DealListResponse

Response model for a list of deals.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token for the next page of results. | [optional] 
**deals** | [**List[Deal]**](Deal.md) | The list of Deals. | [optional] 

## Example

```python
from keap_core_v2_client.models.deal_list_response import DealListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DealListResponse from a JSON string
deal_list_response_instance = DealListResponse.from_json(json)
# print the JSON string representation of the object
print(DealListResponse.to_json())

# convert the object into a dict
deal_list_response_dict = deal_list_response_instance.to_dict()
# create an instance of DealListResponse from a dict
deal_list_response_from_dict = DealListResponse.from_dict(deal_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


