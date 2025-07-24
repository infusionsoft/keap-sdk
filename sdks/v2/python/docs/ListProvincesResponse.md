# ListProvincesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** |  | [optional] 
**provinces** | [**List[Province]**](Province.md) | A key-value pair of province code and province name. | 

## Example

```python
from keap_core_v2_client.models.list_provinces_response import ListProvincesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListProvincesResponse from a JSON string
list_provinces_response_instance = ListProvincesResponse.from_json(json)
# print the JSON string representation of the object
print(ListProvincesResponse.to_json())

# convert the object into a dict
list_provinces_response_dict = list_provinces_response_instance.to_dict()
# create an instance of ListProvincesResponse from a dict
list_provinces_response_from_dict = ListProvincesResponse.from_dict(list_provinces_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


