# ListWebformsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webforms** | [**List[Webform]**](Webform.md) | The webforms in the current page | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_webforms_response import ListWebformsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListWebformsResponse from a JSON string
list_webforms_response_instance = ListWebformsResponse.from_json(json)
# print the JSON string representation of the object
print(ListWebformsResponse.to_json())

# convert the object into a dict
list_webforms_response_dict = list_webforms_response_instance.to_dict()
# create an instance of ListWebformsResponse from a dict
list_webforms_response_from_dict = ListWebformsResponse.from_dict(list_webforms_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


