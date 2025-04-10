# ListLeadSourcesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lead_sources** | [**List[LeadSource]**](LeadSource.md) | The lead sources in the current page | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_lead_sources_response import ListLeadSourcesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListLeadSourcesResponse from a JSON string
list_lead_sources_response_instance = ListLeadSourcesResponse.from_json(json)
# print the JSON string representation of the object
print(ListLeadSourcesResponse.to_json())

# convert the object into a dict
list_lead_sources_response_dict = list_lead_sources_response_instance.to_dict()
# create an instance of ListLeadSourcesResponse from a dict
list_lead_sources_response_from_dict = ListLeadSourcesResponse.from_dict(list_lead_sources_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


