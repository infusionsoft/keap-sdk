# ListProductInterestBundleResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** |  | [optional] 
**product_interest_bundles** | [**List[ProductInterestBundle]**](ProductInterestBundle.md) |  | [optional] 

## Example

```python
from keap_core_v2_client.models.list_product_interest_bundle_response import ListProductInterestBundleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListProductInterestBundleResponse from a JSON string
list_product_interest_bundle_response_instance = ListProductInterestBundleResponse.from_json(json)
# print the JSON string representation of the object
print(ListProductInterestBundleResponse.to_json())

# convert the object into a dict
list_product_interest_bundle_response_dict = list_product_interest_bundle_response_instance.to_dict()
# create an instance of ListProductInterestBundleResponse from a dict
list_product_interest_bundle_response_from_dict = ListProductInterestBundleResponse.from_dict(list_product_interest_bundle_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


