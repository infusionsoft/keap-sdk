# UpdateProductInterestBundleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Product interest bundle description | [optional] 
**name** | **str** | Product interest bundle name | [optional] 

## Example

```python
from keap_core_v2_client.models.update_product_interest_bundle_request import UpdateProductInterestBundleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateProductInterestBundleRequest from a JSON string
update_product_interest_bundle_request_instance = UpdateProductInterestBundleRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateProductInterestBundleRequest.to_json())

# convert the object into a dict
update_product_interest_bundle_request_dict = update_product_interest_bundle_request_instance.to_dict()
# create an instance of UpdateProductInterestBundleRequest from a dict
update_product_interest_bundle_request_from_dict = UpdateProductInterestBundleRequest.from_dict(update_product_interest_bundle_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


