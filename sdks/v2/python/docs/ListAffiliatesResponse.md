# ListAffiliatesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliates** | [**List[RestAffiliate]**](RestAffiliate.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_affiliates_response import ListAffiliatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAffiliatesResponse from a JSON string
list_affiliates_response_instance = ListAffiliatesResponse.from_json(json)
# print the JSON string representation of the object
print(ListAffiliatesResponse.to_json())

# convert the object into a dict
list_affiliates_response_dict = list_affiliates_response_instance.to_dict()
# create an instance of ListAffiliatesResponse from a dict
list_affiliates_response_from_dict = ListAffiliatesResponse.from_dict(list_affiliates_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


