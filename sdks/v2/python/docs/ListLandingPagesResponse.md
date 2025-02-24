# ListLandingPagesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**landingpages** | [**List[LandingPage]**](LandingPage.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 
**page_size** | **str** |  | [optional] 
**pages** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_landing_pages_response import ListLandingPagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListLandingPagesResponse from a JSON string
list_landing_pages_response_instance = ListLandingPagesResponse.from_json(json)
# print the JSON string representation of the object
print(ListLandingPagesResponse.to_json())

# convert the object into a dict
list_landing_pages_response_dict = list_landing_pages_response_instance.to_dict()
# create an instance of ListLandingPagesResponse from a dict
list_landing_pages_response_from_dict = ListLandingPagesResponse.from_dict(list_landing_pages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


