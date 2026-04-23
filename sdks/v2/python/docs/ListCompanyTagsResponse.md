# ListCompanyTagsResponse

List of tags applied to a company

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | [**List[AppliedTag]**](AppliedTag.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_company_tags_response import ListCompanyTagsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCompanyTagsResponse from a JSON string
list_company_tags_response_instance = ListCompanyTagsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCompanyTagsResponse.to_json())

# convert the object into a dict
list_company_tags_response_dict = list_company_tags_response_instance.to_dict()
# create an instance of ListCompanyTagsResponse from a dict
list_company_tags_response_from_dict = ListCompanyTagsResponse.from_dict(list_company_tags_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


