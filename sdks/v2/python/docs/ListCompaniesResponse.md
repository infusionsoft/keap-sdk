# ListCompaniesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companies** | [**List[Company]**](Company.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_companies_response import ListCompaniesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCompaniesResponse from a JSON string
list_companies_response_instance = ListCompaniesResponse.from_json(json)
# print the JSON string representation of the object
print(ListCompaniesResponse.to_json())

# convert the object into a dict
list_companies_response_dict = list_companies_response_instance.to_dict()
# create an instance of ListCompaniesResponse from a dict
list_companies_response_from_dict = ListCompaniesResponse.from_dict(list_companies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


