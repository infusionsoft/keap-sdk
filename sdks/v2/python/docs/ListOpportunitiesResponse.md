# ListOpportunitiesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** |  | [optional] 
**opportunities** | [**List[RestV2Opportunity]**](RestV2Opportunity.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_opportunities_response import ListOpportunitiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListOpportunitiesResponse from a JSON string
list_opportunities_response_instance = ListOpportunitiesResponse.from_json(json)
# print the JSON string representation of the object
print(ListOpportunitiesResponse.to_json())

# convert the object into a dict
list_opportunities_response_dict = list_opportunities_response_instance.to_dict()
# create an instance of ListOpportunitiesResponse from a dict
list_opportunities_response_from_dict = ListOpportunitiesResponse.from_dict(list_opportunities_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


