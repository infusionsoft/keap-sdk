# ListTaggedCompaniesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** |  | [optional] 
**tagged_companies** | [**List[TaggedCompany]**](TaggedCompany.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_tagged_companies_response import ListTaggedCompaniesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTaggedCompaniesResponse from a JSON string
list_tagged_companies_response_instance = ListTaggedCompaniesResponse.from_json(json)
# print the JSON string representation of the object
print(ListTaggedCompaniesResponse.to_json())

# convert the object into a dict
list_tagged_companies_response_dict = list_tagged_companies_response_instance.to_dict()
# create an instance of ListTaggedCompaniesResponse from a dict
list_tagged_companies_response_from_dict = ListTaggedCompaniesResponse.from_dict(list_tagged_companies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


