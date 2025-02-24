# ListAffiliateLinksResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate_links** | [**List[AffiliateLink]**](AffiliateLink.md) |  | [optional] 
**next_page_token** | **str** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_affiliate_links_response import ListAffiliateLinksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAffiliateLinksResponse from a JSON string
list_affiliate_links_response_instance = ListAffiliateLinksResponse.from_json(json)
# print the JSON string representation of the object
print(ListAffiliateLinksResponse.to_json())

# convert the object into a dict
list_affiliate_links_response_dict = list_affiliate_links_response_instance.to_dict()
# create an instance of ListAffiliateLinksResponse from a dict
list_affiliate_links_response_from_dict = ListAffiliateLinksResponse.from_dict(list_affiliate_links_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


